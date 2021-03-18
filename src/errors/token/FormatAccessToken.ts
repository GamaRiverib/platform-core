import { BaseError } from "../BaseError";
import { Schema as Schema2, Property as Property2 } from "openapi-utilities-lib/build/lib/v2";
import { Schema as Schema3, Property as Property3 } from "openapi-utilities-lib/build/lib/v3";

@Schema2()
@Schema3()
export class FormatAccessTokenError extends BaseError {

  static CODE = "INVALID_ACCESS_TOKEN_FORMAT_ERROR";
  static DEFAULT_MESSAGE = "Invalid access token format";

  constructor(message?: string) {
    super(message || FormatAccessTokenError.DEFAULT_MESSAGE, FormatAccessTokenError.CODE);
  }

  @Property2({
    schema: {
      type: "string",
      example: FormatAccessTokenError.CODE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: FormatAccessTokenError.CODE
    },
    required: true
  })
  code: string;

  @Property2({
    schema: {
      type: "string",
      example: FormatAccessTokenError.DEFAULT_MESSAGE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: FormatAccessTokenError.DEFAULT_MESSAGE
    },
    required: true
  })
  message: string;

}
