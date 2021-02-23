import { BaseError } from "../BaseError";
import { Schema as Schema2, Property as Property2 } from "../../openapi/v2";
import { Schema as Schema3, Property as Property3 } from "../../openapi/v3";

@Schema2()
@Schema3()
export class EmailRegisteredError extends BaseError {
  
  static CODE = "EMAIL_REGISTERED_ERROR";
  static DEFAULT_MESSAGE = "Email already registered";

  constructor(message?: string) {
    super(message || EmailRegisteredError.DEFAULT_MESSAGE, EmailRegisteredError.CODE);
  }

  @Property2({
    schema: {
      type: "string",
      example: EmailRegisteredError.CODE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: EmailRegisteredError.CODE
    },
    required: true
  })
  code: string;

  @Property2({
    schema: {
      type: "string",
      example: EmailRegisteredError.DEFAULT_MESSAGE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: EmailRegisteredError.DEFAULT_MESSAGE
    },
    required: true
  })
  message: string;
  
}
