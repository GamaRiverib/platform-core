export * from "./api";
export * from "./errors";
export * from "./logger";
export * from "./middleware";
export * from "./openapi";

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