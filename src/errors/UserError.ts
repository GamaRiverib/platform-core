import { BaseError } from "./BaseError";

export class EmailFormatError extends BaseError {
    constructor(message?: string) {
        super(message || "Bad email format", "BAD_EMAIL_FORMAT");
    }
}

export class UsernameFormatError extends BaseError {
    constructor(message?: string) {
        super(message || "Bad username format", "BAD_USERNAME_FORMAT");
    }
}

export class PasswordFormatError extends BaseError {
    constructor(message?: string) {
        super(message || "Bad password format", "BAD_PASSWORD_FORMAT");
    }
}

export class BadPasswordError extends BaseError {
    constructor(message?: string) {
        super(message || "Bad password", "BAD_PASSWORD_ERROR");
    }
}

export class EmailRegisteredError extends BaseError {
    constructor(message?: string) {
        super(message || "Email already registered", "EMAIL_REGISTERED_ERROR");
    }
}

export class PhoneRegisteredError extends BaseError {
    constructor(message?: string) {
        super(message || "Phone already registered", "PHONE_REGISTERED_ERROR");
    }
}

export class UsernameRegisteredError extends BaseError {
    constructor(message?: string) {
        super(message || "Username already registered", "USERNAME_REGISTERED_ERROR");
    }
}

export class UserBlockedError extends BaseError {
    constructor(message?: string) {
        super(message || "User already blocked", "USER_BLOCKED_ERROR");
    }
}

export class DefaultUserRepositoryError extends BaseError {
    constructor(message?: string) {
        super(message || "There was a problem trying to persist the information in the repository", "REPOSITORY_ERROR");
    }
}

export class ContactFormatError extends BaseError {
    constructor(message?: string) {
        super(message || "Bad contact format", "BAD_CONTACT_FORMAT");
    }
}

export class ContactMainError extends BaseError {
    constructor(message?: string) {
        super(message || "Main contact error", "MAIN_CONTACT_ERROR");
    }
}

export class MaxContactError extends BaseError {
    constructor(message?: string) {
        super(message || "Maximum number of contact items allowed", "MAX_CONTACT_ITEMS_ERROR");
    }
}

export class NameFormatError extends BaseError {
    constructor(message?: string) {
        super(message || "Bad name format", "BAD_NAME_FORMAT");
    }
}

export class BirthdayFormatError extends BaseError {
    constructor(message?: string) {
        super(message || "Bad birthday format", "BAD_BIRTHDAY_FORMAT");
    }    
}

export class BirthdayError extends BaseError {
    constructor(message?: string) {
        super(message || "Bad birthday", "BIRTHDAY_ERROR");
    }
}

export class GenderFormatError extends BaseError {
    constructor(message?: string) {
        super(message || "Bad gender format", "BAD_GENDER_FORMAT");
    }
}

export class PreferencesError extends BaseError {
    constructor(message?: string) {
        super(message || "Preferences error", "PREFERENCES_ERROR");
    }
}

export class AccountError extends BaseError {
    constructor(message?: string) {
        super(message || "Account error", "ACCOUNT_ERROR");
    }
}