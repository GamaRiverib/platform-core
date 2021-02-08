import { Db, MongoClient } from "mongodb";

const MONGODB_CONN_URL: string = process.env.MONGODB_CONN_URL || "mongodb://localhost:27017";
const DB_NAME: string = process.env.DB_NAME || "core_db";

const CLIENT: MongoClient = new MongoClient(MONGODB_CONN_URL, { useUnifiedTopology: true });

let DB: Db | null = null;

export async function connectDB(): Promise<void> {
    await CLIENT.connect();
    return;
}

export function getDatabase(): Db {
    if(DB === null) {
        DB = CLIENT.db(DB_NAME);
    }
    return DB;
}

export function closeDatabase(): Promise<void> {
    return CLIENT.close();
}