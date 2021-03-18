import { BaseError } from "../BaseError";
import { Schema as Schema2, Property as Property2 } from "openapi-utilities-lib/build/lib/v2";
import { Schema as Schema3, Property as Property3 } from "openapi-utilities-lib/build/lib/v3";

@Schema2()
@Schema3()
export class UsernameRegisteredError extends BaseError {
  
  static CODE = "USERNAME_REGISTERED_ERROR";
  static DEFAULT_MESSAGE = "Username already registered";

  constructor(message?: string) {
    super(message || UsernameRegisteredError.DEFAULT_MESSAGE, UsernameRegisteredError.CODE);
  }

  @Property2({
    schema: {
      type: "string",
      example: UsernameRegisteredError.CODE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: UsernameRegisteredError.CODE
    },
    required: true
  })
  code: string;

  @Property2({
    schema: {
      type: "string",
      example: UsernameRegisteredError.DEFAULT_MESSAGE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: UsernameRegisteredError.DEFAULT_MESSAGE
    },
    required: true
  })
  message: string;
  
}

