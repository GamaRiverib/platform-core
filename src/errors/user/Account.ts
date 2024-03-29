import { BaseError } from "../BaseError";
import { Schema as Schema2, Property as Property2 } from "@gamariverib/openapi-utilities-lib/build/lib/v2";
import { Schema as Schema3, Property as Property3 } from "@gamariverib/openapi-utilities-lib/build/lib/v3";

@Schema2()
@Schema3()
export class AccountError extends BaseError {
  
  static CODE = "ACCOUNT_ERROR";
  static DEFAULT_MESSAGE = "Account error";

  constructor(message?: string) {
    super(message || AccountError.DEFAULT_MESSAGE, AccountError.CODE);
  }
}
