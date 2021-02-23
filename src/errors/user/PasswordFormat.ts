import { BaseError } from "../BaseError";
import { Schema as Schema2, Property as Property2 } from "../../openapi/v2";
import { Schema as Schema3, Property as Property3 } from "../../openapi/v3";

@Schema2()
@Schema3()
export class PasswordFormatError extends BaseError {
  
  static CODE = "BAD_PASSWORD_FORMAT_ERROR";
  static DEFAULT_MESSAGE = "Bad password format";

  constructor(message?: string) {
    super(message || PasswordFormatError.DEFAULT_MESSAGE, PasswordFormatError.CODE);
  }

  @Property2({
    schema: {
      type: "string",
      example: PasswordFormatError.CODE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: PasswordFormatError.CODE
    },
    required: true
  })
  code: string;

  @Property2({
    schema: {
      type: "string",
      example: PasswordFormatError.DEFAULT_MESSAGE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: PasswordFormatError.DEFAULT_MESSAGE
    },
    required: true
  })
  message: string;
  
}
