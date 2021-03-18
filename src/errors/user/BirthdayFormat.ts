import { BaseError } from "../BaseError";
import { Schema as Schema2, Property as Property2 } from "openapi-utilities-lib/build/lib/v2";
import { Schema as Schema3, Property as Property3 } from "openapi-utilities-lib/build/lib/v3";

@Schema2()
@Schema3()
export class BirthdayFormatError extends BaseError {
  
  static CODE = "BAD_BIRTHDAY_FORMAT_ERROR";
  static DEFAULT_MESSAGE = "Bad birthday format";

  constructor(message?: string) {
    super(message || BirthdayFormatError.DEFAULT_MESSAGE, BirthdayFormatError.CODE);
  }

  @Property2({
    schema: {
      type: "string",
      example: BirthdayFormatError.CODE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: BirthdayFormatError.CODE
    },
    required: true
  })
  code: string;

  @Property2({
    schema: {
      type: "string",
      example: BirthdayFormatError.DEFAULT_MESSAGE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: BirthdayFormatError.DEFAULT_MESSAGE
    },
    required: true
  })
  message: string;
    
}
