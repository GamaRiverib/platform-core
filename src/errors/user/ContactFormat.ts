import { BaseError } from "../BaseError";
import { Schema as Schema2, Property as Property2 } from "@gamariverib/openapi-utilities-lib/build/lib/v2";
import { Schema as Schema3, Property as Property3 } from "@gamariverib/openapi-utilities-lib/build/lib/v3";

@Schema2()
@Schema3()
export class ContactFormatError extends BaseError {
  
  static CODE = "BAD_CONTACT_FORMAT_ERROR";
  static DEFAULT_MESSAGE = "Bad contact format";

  constructor(message?: string) {
    super(message || ContactFormatError.DEFAULT_MESSAGE, ContactFormatError.CODE);
  }

  @Property2({
    schema: {
      type: "string",
      example: ContactFormatError.CODE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: ContactFormatError.CODE
    },
    required: true
  })
  code: string;

  @Property2({
    schema: {
      type: "string",
      example: ContactFormatError.DEFAULT_MESSAGE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: ContactFormatError.DEFAULT_MESSAGE
    },
    required: true
  })
  message: string;
  
}
