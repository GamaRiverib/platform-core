import { BaseError } from "../BaseError";
import { Schema as Schema2, Property as Property2 } from "@gamariverib/openapi-utilities-lib/build/lib/v2";
import { Schema as Schema3, Property as Property3 } from "@gamariverib/openapi-utilities-lib/build/lib/v3";

@Schema2()
@Schema3()
export class UserBlockedError extends BaseError {
  
  static CODE = "USER_BLOCKED_ERROR";
  static DEFAULT_MESSAGE = "User already blocked";

  constructor(message?: string) {
    super(message || UserBlockedError.DEFAULT_MESSAGE, UserBlockedError.CODE);
  }

  @Property2({
    schema: {
      type: "string",
      example: UserBlockedError.CODE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: UserBlockedError.CODE
    },
    required: true
  })
  code: string;

  @Property2({
    schema: {
      type: "string",
      example: UserBlockedError.DEFAULT_MESSAGE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: UserBlockedError.DEFAULT_MESSAGE
    },
    required: true
  })
  message: string;
  
}
