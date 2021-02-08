import { BaseError } from "./BaseError";

export class MissingRequiredParametersError extends BaseError {
    constructor(message?: string) {
        super(message || "Missing required parameters", "MISSING_REQUIRED_PARAMETERS");
    }
}

export class NotFoundError extends BaseError {
    constructor(message?: string) {
        super(message || "Item not found", "NOT_FOUND_ERROR");
    }
}

export class DefaultError extends BaseError {
    constructor(message?: string) {
        super(message || "Something was wrong!", "DEFAULT_ERROR");
    }
}

export class UnhandleError extends BaseError {
    constructor(message?: string) {
        super(message || "Something was wrong!", "UNHANDLE_ERROR");
    }
}

export class ApiValidationError extends BaseError {

    validations: Array<any>;

    constructor(message?: string, errors?: Array<any>) {
        super(message || "API validation error", "API_VALIDATION_ERROR");
        this.validations = errors || [];
    }
}