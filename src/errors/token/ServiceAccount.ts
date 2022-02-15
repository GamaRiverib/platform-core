import { BaseError } from "../BaseError";
import { Schema as Schema2, Property as Property2 } from "@gamariverib/openapi-utilities-lib/build/lib/v2";
import { Schema as Schema3, Property as Property3 } from "@gamariverib/openapi-utilities-lib/build/lib/v3";

@Schema2()
@Schema3()
export class ServiceAccountError extends BaseError {

  static CODE = "SERVICE_ACCOUNT_ERROR";
  static DEFAULT_MESSAGE = "Service account error";

  constructor(message?: string) {
    super(message || ServiceAccountError.DEFAULT_MESSAGE, ServiceAccountError.CODE);
  }

  @Property2({
    schema: {
      type: "string",
      example: ServiceAccountError.CODE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: ServiceAccountError.CODE
    },
    required: true
  })
  code: string;

  @Property2({
    schema: {
      type: "string",
      example: ServiceAccountError.DEFAULT_MESSAGE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: ServiceAccountError.DEFAULT_MESSAGE
    },
    required: true
  })
  message: string;

}
