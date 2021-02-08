import { BaseError } from "./BaseError";

export class DbError extends BaseError {
    constructor(message?: string) {
        super(message || "Something was wrong with database", "DB_ERROR");
    }
}