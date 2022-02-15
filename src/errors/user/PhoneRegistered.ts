import { BaseError } from "../BaseError";
import { Schema as Schema2, Property as Property2 } from "@gamariverib/openapi-utilities-lib/build/lib/v2";
import { Schema as Schema3, Property as Property3 } from "@gamariverib/openapi-utilities-lib/build/lib/v3";

@Schema2()
@Schema3()
export class PhoneRegisteredError extends BaseError {
  
  static CODE = "PHONE_REGISTERED_ERROR";
  static DEFAULT_MESSAGE = "Phone already registered";

  constructor(message?: string) {
    super(message || PhoneRegisteredError.DEFAULT_MESSAGE, PhoneRegisteredError.CODE);
  }

  @Property2({
    schema: {
      type: "string",
      example: PhoneRegisteredError.CODE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: PhoneRegisteredError.CODE
    },
    required: true
  })
  code: string;

  @Property2({
    schema: {
      type: "string",
      example: PhoneRegisteredError.DEFAULT_MESSAGE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: PhoneRegisteredError.DEFAULT_MESSAGE
    },
    required: true
  })
  message: string;
  
}
