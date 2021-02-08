import { MessageProperties, Channel, ConsumeMessage } from "amqplib";
import { getSubscribeChannel } from "./PubSubServices";

export interface Subscriber {
    connect(): Promise<void>;
    subscribe(topic: string, handler: (content: Buffer, properties: MessageProperties) => Promise<void>): Promise<void>;
    close(): Promise<void>;
}

export function createSubscriber(source: string): Subscriber {
    return new SubscriberImpl(source);
}

class SubscriberImpl implements Subscriber {

    private channel: Channel | null;
    private queues: Array<{ queue: string, topic: string }> = [];

    constructor(private source: string) {
        this.channel = null;
    }

    async connect(): Promise<void> {
        try {
            if(!this.channel) {
                this.channel = await getSubscribeChannel();
            }
            await this.channel!!.assertExchange(this.source, "direct");
            return;
        } catch(error) {
            throw error;
        }
    }

    async subscribe(topic: string, handler: (content: Buffer, properties: MessageProperties) => Promise<void>): Promise<void> {
        try {
            if(!this.channel) {
                await this.connect();
            }
            const { queue } = await this.channel!!.assertQueue("");
            await this.channel!!.bindQueue(queue, this.source, topic);
            this.channel!!.consume(queue, async (message: ConsumeMessage | null) => {
                if(message) {
                    try {
                        await handler(message.content, message.properties);
                        if(this.channel) {
                            this.channel.ack(message);
                        }
                    } catch(error) {
                        console.log(error); // TODO: handle this errors
                    }
                }
            });
            this.queues.push({ queue, topic});
        } catch(error) {
            throw error;
        }
    }

    async close(): Promise<void> {
        if(this.queues && this.queues.length > 0) {
            this.queues.forEach((q: { queue: string, topic: string }) => {
                this.channel!!.unbindQueue(q.queue, this.source, q.topic)
            });
        }
        return;
    }

}