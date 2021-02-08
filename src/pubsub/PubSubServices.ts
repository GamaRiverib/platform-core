import { connect, Connection, Channel } from "amqplib";

const AMQP_CONN_URL: string = process.env.AMQP_CONN_URL || "amqp://localhost:5672";

let CONNECTION: Connection | null = null;
let CHANNEL: Channel | null = null;
let PUBLISH_CHANNEL: Channel | null = null;
let SUBSCRIBE_CHANNEL: Channel | null = null;

export async function connectPubsub(): Promise<void> {
    try {
        CONNECTION = await connect(AMQP_CONN_URL);
        return;
    } catch(error) {
        throw error;
    }
}

export async function getChannel(): Promise<Channel> {
    if(!CHANNEL) {
        if(!CONNECTION) {
            await connectPubsub();
        }
        try {
            CHANNEL = await CONNECTION!!.createChannel();
        } catch(error) {
            throw error;
        }
    }
    return CHANNEL;
}

export async function getPublishChannel(): Promise<Channel> {
    if(!PUBLISH_CHANNEL) {
        if(!CONNECTION) {
            await connectPubsub();
        }
        try {
            PUBLISH_CHANNEL = await CONNECTION!!.createChannel();
        } catch(error) {
            throw error;
        }
    }
    return PUBLISH_CHANNEL;
}

export async function getSubscribeChannel(): Promise<Channel> {
    if(!SUBSCRIBE_CHANNEL) {
        if(!CONNECTION) {
            await connectPubsub();
        }
        try {
            SUBSCRIBE_CHANNEL = await CONNECTION!!.createChannel();
        } catch(error) {
            throw error;
        }
    }
    return SUBSCRIBE_CHANNEL;
}

export async function closePubsub(): Promise<void> {
    try {
        if(CHANNEL) {
            CHANNEL.removeAllListeners();
            CHANNEL.close();
        }
        if(PUBLISH_CHANNEL) {
            PUBLISH_CHANNEL.removeAllListeners();
            PUBLISH_CHANNEL.close();
        }
        if(SUBSCRIBE_CHANNEL) {
            SUBSCRIBE_CHANNEL.removeAllListeners();
            SUBSCRIBE_CHANNEL.close();
        }
        if(CONNECTION) {
            CONNECTION.removeAllListeners();
            CONNECTION.close();
        }
        return;
    } catch(err) {
        throw err;
    }
}