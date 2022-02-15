import { BaseError } from "../BaseError";
import { Schema as Schema2, Property as Property2 } from "@gamariverib/openapi-utilities-lib/build/lib/v2";
import { Schema as Schema3, Property as Property3 } from "@gamariverib/openapi-utilities-lib/build/lib/v3";

@Schema2()
@Schema3()
export class AccessForbiddenError extends BaseError {

  static CODE = "ACCESS_FORBIDDEN_ERROR";
  static DEFAULT_MESSAGE = "User not found in access control list";

  constructor(message?: string) {
    super(message || AccessForbiddenError.DEFAULT_MESSAGE, AccessForbiddenError.CODE);
  }

  @Property2({
    schema: {
      type: "string",
      example: AccessForbiddenError.CODE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: AccessForbiddenError.CODE
    },
    required: true
  })
  code: string;

  @Property2({
    schema: {
      type: "string",
      example: AccessForbiddenError.DEFAULT_MESSAGE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: AccessForbiddenError.DEFAULT_MESSAGE
    },
    required: true
  })
  message: string;

}
