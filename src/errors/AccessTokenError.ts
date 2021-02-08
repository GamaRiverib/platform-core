import { BaseError } from "./BaseError";

export class MissingAccessTokenError extends BaseError {
    constructor(message?: string) {
        super(message || "Missing access token", "MISSING_ACCESS_TOKEN");   
    }
}

export class SchemeAuthorizationError extends BaseError {
    constructor(message?: string) {
        super(message || "Invalid scheme authorization header", "INVALID_SCHEME_AUTHORIZATION");
    }
}

export class ExpiredAccessTokenError extends BaseError {
    constructor(message?: string) {
        super(message || "Access token has expired", "ACCESS_TOKEN_EXPIRED");
    }
}

export class FormatAccessTokenError extends BaseError {
    constructor(message?: string) {
        super(message || "Invalid access token format", "INVALID_ACCESS_TOKEN_FORMAT");
    }
}

export class VerificationAccessTokenError extends BaseError {
    constructor(message?: string) {
        super(message || "Could not verify the access token", "ERROR_VERIFYING_ACCESS_TOKEN");
    }
}

export class AccessForbiddenError extends BaseError {
    constructor(message?: string) {
        super(message || "User not found in access control list", "ACCESS_FORBIDDEN");
    }
}

export class ServiceAccountError extends BaseError {
    constructor(message?: string) {
        super(message || "Service account error", "SERVICE_ACCOUNT_ERROR");
    }
}