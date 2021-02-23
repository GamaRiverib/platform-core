import { BaseError } from "../BaseError";
import { Schema as Schema2, Property as Property2 } from "../../openapi/v2";
import { Schema as Schema3, Property as Property3 } from "../../openapi/v3";

@Schema2()
@Schema3()
export class VerificationAccessTokenError extends BaseError {

  static CODE = "ERROR_VERIFYING_ACCESS_TOKEN_ERROR";
  static DEFAULT_MESSAGE = "Could not verify the access token";

  constructor(message?: string) {
    super(message || VerificationAccessTokenError.DEFAULT_MESSAGE, VerificationAccessTokenError.CODE);
  }

  @Property2({
    schema: {
      type: "string",
      example: VerificationAccessTokenError.CODE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: VerificationAccessTokenError.CODE
    },
    required: true
  })
  code: string;

  @Property2({
    schema: {
      type: "string",
      example: VerificationAccessTokenError.DEFAULT_MESSAGE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: VerificationAccessTokenError.DEFAULT_MESSAGE
    },
    required: true
  })
  message: string;

}
