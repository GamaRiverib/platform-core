import { Channel } from "amqplib";
import { getPublishChannel } from "./PubSubServices";

import { v4 as generateUuid } from "uuid";

export interface Publisher {
    connect(): Promise<void>;
    publish(topic: string, payload: string, type?: string): Promise<void>;
}

export function createPublisher(source: string, appId?: string): Publisher { // TODO: check appId
    return new PublisherImpl(source, appId);
}

class PublisherImpl implements Publisher {

    private channel: Channel | null;

    constructor(private source: string, private appId?: string) {
        this.channel = null;
    }

    async connect(): Promise<void> {
        try {
            if(!this.channel) {
                this.channel = await getPublishChannel();
            }
            await this.channel.assertExchange(this.source, "direct");
            return;
        } catch(error) {
            throw error;
        }
    }
    
    async publish(topic: string, payload: string, type?: string): Promise<void> {
        if (!this.channel) {
            await this.connect();
        }
        try {
            this.channel!!.publish(this.source, topic, Buffer.from(payload), {
                contentType: "application/json",
                timestamp: Date.now(),
                type: type || "",
                appId: this.appId || "",
                messageId: generateUuid()
            });
            return;
        } catch(error) {
            throw error;
        }
    }

}