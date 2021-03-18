import { BaseError } from "../BaseError";
import { Schema as Schema2, Property as Property2 } from "openapi-utilities-lib/build/lib/v2";
import { Schema as Schema3, Property as Property3 } from "openapi-utilities-lib/build/lib/v3";

@Schema2()
@Schema3()
export class SchemeAuthorizationError extends BaseError {

  static CODE = "INVALID_SCHEME_AUTHORIZATION_ERROR";
  static DEFAULT_MESSAGE = "Invalid scheme authorization header";

  constructor(message?: string) {
    super(message || SchemeAuthorizationError.DEFAULT_MESSAGE, SchemeAuthorizationError.CODE);
  }

  @Property2({
    schema: {
      type: "string",
      example: SchemeAuthorizationError.CODE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: SchemeAuthorizationError.CODE
    },
    required: true
  })
  code: string;

  @Property2({
    schema: {
      type: "string",
      example: SchemeAuthorizationError.DEFAULT_MESSAGE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: SchemeAuthorizationError.DEFAULT_MESSAGE
    },
    required: true
  })
  message: string;

}
