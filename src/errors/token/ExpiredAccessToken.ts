import { BaseError } from "../BaseError";
import { Schema as Schema2, Property as Property2 } from "@gamariverib/openapi-utilities-lib/build/lib/v2";
import { Schema as Schema3, Property as Property3 } from "@gamariverib/openapi-utilities-lib/build/lib/v3";

@Schema2()
@Schema3()
export class ExpiredAccessTokenError extends BaseError {

  static CODE = "ACCESS_TOKEN_EXPIRED_ERROR";
  static DEFAULT_MESSAGE = "Access token has expired";

  constructor(message?: string) {
    super(message || ExpiredAccessTokenError.DEFAULT_MESSAGE, ExpiredAccessTokenError.CODE);
  }

  @Property2({
    schema: {
      type: "string",
      example: ExpiredAccessTokenError.CODE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: ExpiredAccessTokenError.CODE
    },
    required: true
  })
  code: string;

  @Property2({
    schema: {
      type: "string",
      example: ExpiredAccessTokenError.DEFAULT_MESSAGE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: ExpiredAccessTokenError.DEFAULT_MESSAGE
    },
    required: true
  })
  message: string;

}
