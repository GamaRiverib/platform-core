import { BaseError } from "../BaseError";
import { Schema as Schema2, Property as Property2 } from "../../openapi/v2";
import { Schema as Schema3, Property as Property3 } from "../../openapi/v3";

@Schema2()
@Schema3()
export class BirthdayError extends BaseError {
  
  static CODE = "BIRTHDAY_ERROR";
  static DEFAULT_MESSAGE = "Bad birthday";

  constructor(message?: string) {
    super(message || BirthdayError.DEFAULT_MESSAGE, BirthdayError.CODE);
  }

  @Property2({
    schema: {
      type: "string",
      example: BirthdayError.CODE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: BirthdayError.CODE
    },
    required: true
  })
  code: string;

  @Property2({
    schema: {
      type: "string",
      example: BirthdayError.DEFAULT_MESSAGE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: BirthdayError.DEFAULT_MESSAGE
    },
    required: true
  })
  message: string;
  
}
