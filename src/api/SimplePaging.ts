export type SortDirection = "asc" | "des";

export interface SimplePaging {
    skip: number;
    limit: number;
    direction?: SortDirection;
    sort?: string;
}

export type SimplePagingOptions = { page?: number, limit?: number, direction?: SortDirection, sort?: string };

export function getSimplePaging(options: SimplePagingOptions): SimplePaging {
    if(options.limit && !Number.isInteger(options.limit)) {
        options.limit = parseInt(options.limit.toString());
    }
    if(options.page && !Number.isInteger(options.page)) {
        options.page = parseInt(options.page.toString());
    }
    const limit: number = options.limit || 100;
    const page: number = options.page || 1;
    const skip: number = limit * (page - 1);
    const direction: SortDirection | undefined = options.direction;
    const sort: string | undefined = options.sort;
    return { skip, limit, direction, sort };
};