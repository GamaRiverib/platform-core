export * from "./api";
export * from "./errors";
export * from "./logger";
export * from "./middleware";
export * from "@gamariverib/openapi-utilities-lib";

export const HEADER_KEY_SUB: string = "x-subject-id";
export const HEADER_KEY_CONSUMER: string = "x-consumer-id";

type AsyncForEachCb<T> = (item: T, index?: number, array?: Array<T>) => Promise<void>;

export function asyncForEach<T>(array: Array<T>, callback: AsyncForEachCb<T>) {
    return async () => {
        for(let i = 0; i < array.length; i++) {
            await callback(array[i], i, array);
        }
    };
}

export function randomNumber(max?: number, min?: number): number {
    if(!max) {
        max = 100;
    }
    if (!min) {
        min = 0;
    }
    return Math.floor(Math.random() * (max - min)) + min;
}

export function getEnumValues(type: any, valuesType?: "string" | "number"): string[] | number[] {
    const keys = Object.keys(type).filter(k => typeof type[k as any] === valuesType || "string");
    const values = keys.map(k => type[k as any]);
    return values;
}
