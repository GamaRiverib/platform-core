import { BaseError } from "../BaseError";
import { Schema as Schema2, Property as Property2 } from "../../openapi/v2";
import { Schema as Schema3, Property as Property3 } from "../../openapi/v3";

@Schema2()
@Schema3()
export class ContactMainError extends BaseError {
  
  static CODE = "MAIN_CONTACT_ERROR";
  static DEFAULT_MESSAGE = "Main contact error";

  constructor(message?: string) {
    super(message || ContactMainError.DEFAULT_MESSAGE, ContactMainError.CODE);
  }
  
  @Property2({
    schema: {
      type: "string",
      example: ContactMainError.CODE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: ContactMainError.CODE
    },
    required: true
  })
  code: string;

  @Property2({
    schema: {
      type: "string",
      example: ContactMainError.DEFAULT_MESSAGE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: ContactMainError.DEFAULT_MESSAGE
    },
    required: true
  })
  message: string;

}
