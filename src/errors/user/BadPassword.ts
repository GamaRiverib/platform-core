import { BaseError } from "../BaseError";
import { Schema as Schema2, Property as Property2 } from "@gamariverib/openapi-utilities-lib/build/lib/v2";
import { Schema as Schema3, Property as Property3 } from "@gamariverib/openapi-utilities-lib/build/lib/v3";

@Schema2()
@Schema3()
export class BadPasswordError extends BaseError {
  
  static CODE = "BAD_PASSWORD_ERROR";
  static DEFAULT_MESSAGE = "Bad password";

  constructor(message?: string) {
    super(message || BadPasswordError.DEFAULT_MESSAGE, BadPasswordError.CODE);
  }

  @Property2({
    schema: {
      type: "string",
      example: BadPasswordError.CODE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: BadPasswordError.CODE
    },
    required: true
  })
  code: string;

  @Property2({
    schema: {
      type: "string",
      example: BadPasswordError.DEFAULT_MESSAGE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: BadPasswordError.DEFAULT_MESSAGE
    },
    required: true
  })
  message: string;

}
