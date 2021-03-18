import { BaseError } from "../BaseError";
import { Schema as Schema2, Property as Property2 } from "openapi-utilities-lib/build/lib/v2";
import { Schema as Schema3, Property as Property3 } from "openapi-utilities-lib/build/lib/v3";

@Schema2()
@Schema3()
export class UsernameFormatError extends BaseError {
  
  static CODE = "BAD_USERNAME_FORMAT";
  static DEFAULT_MESSAGE = "Bad username format";

  constructor(message?: string) {
    super(message || UsernameFormatError.DEFAULT_MESSAGE, UsernameFormatError.CODE);
  }

  @Property2({
    schema: {
      type: "string",
      example: UsernameFormatError.CODE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: UsernameFormatError.CODE
    },
    required: true
  })
  code: string;

  @Property2({
    schema: {
      type: "string",
      example: UsernameFormatError.DEFAULT_MESSAGE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: UsernameFormatError.DEFAULT_MESSAGE
    },
    required: true
  })
  message: string;
  
}
