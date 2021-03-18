import { BaseError } from "../BaseError";
import { Schema as Schema2, Property as Property2 } from "openapi-utilities-lib/build/lib/v2";
import { Schema as Schema3, Property as Property3 } from "openapi-utilities-lib/build/lib/v3";

@Schema2()
@Schema3()
export class MissingAccessTokenError extends BaseError {

  static CODE = "MISSING_ACCESS_TOKEN_ERROR";
  static DEFAULT_MESSAGE = "Missing access token";

  constructor(message?: string) {
    super(message || MissingAccessTokenError.DEFAULT_MESSAGE, MissingAccessTokenError.CODE);
  }

  @Property2({
    schema: {
      type: "string",
      example: MissingAccessTokenError.CODE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: MissingAccessTokenError.CODE
    },
    required: true
  })
  code: string;

  @Property2({
    schema: {
      type: "string",
      example: MissingAccessTokenError.DEFAULT_MESSAGE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: MissingAccessTokenError.DEFAULT_MESSAGE
    },
    required: true
  })
  message: string;

}
