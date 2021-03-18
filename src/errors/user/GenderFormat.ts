import { BaseError } from "../BaseError";
import { Schema as Schema2, Property as Property2 } from "openapi-utilities-lib/build/lib/v2";
import { Schema as Schema3, Property as Property3 } from "openapi-utilities-lib/build/lib/v3";

@Schema2()
@Schema3()
export class GenderFormatError extends BaseError {
  
  static CODE = "BAD_GENDER_FORMAT";
  static DEFAULT_MESSAGE = "Bad gender format";

  constructor(message?: string) {
    super(message || GenderFormatError.DEFAULT_MESSAGE, GenderFormatError.CODE);
  }

  @Property2({
    schema: {
      type: "string",
      example: GenderFormatError.CODE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: GenderFormatError.CODE
    },
    required: true
  })
  code: string;

  @Property2({
    schema: {
      type: "string",
      example: GenderFormatError.DEFAULT_MESSAGE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: GenderFormatError.DEFAULT_MESSAGE
    },
    required: true
  })
  message: string;
  
}
