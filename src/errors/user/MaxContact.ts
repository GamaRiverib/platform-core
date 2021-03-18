import { BaseError } from "../BaseError";
import { Schema as Schema2, Property as Property2 } from "openapi-utilities-lib/build/lib/v2";
import { Schema as Schema3, Property as Property3 } from "openapi-utilities-lib/build/lib/v3";

@Schema2()
@Schema3()
export class MaxContactError extends BaseError {
  
  static CODE = "MAX_CONTACT_ITEMS_ERROR";
  static DEFAULT_MESSAGE = "Maximum number of contact items allowed";

  constructor(message?: string) {
    super(message || MaxContactError.DEFAULT_MESSAGE, MaxContactError.CODE);
  }

  @Property2({
    schema: {
      type: "string",
      example: MaxContactError.CODE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: MaxContactError.CODE
    },
    required: true
  })
  code: string;

  @Property2({
    schema: {
      type: "string",
      example: MaxContactError.DEFAULT_MESSAGE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: MaxContactError.DEFAULT_MESSAGE
    },
    required: true
  })
  message: string;
  
}
