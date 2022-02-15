import { Schema as Schema2, Property as Property2 } from "@gamariverib/openapi-utilities-lib/build/lib/v2";
import { Schema as Schema3, Property as Property3 } from "@gamariverib/openapi-utilities-lib/build/lib/v3";
import { BaseError } from "./";

@Schema2()
@Schema3()
export class MissingRequiredParametersError extends BaseError {

  static CODE = "MISSING_REQUIRED_PARAMETERS_ERROR";
  static DEFAULT_MESSAGE = "Missing required parameters";

  constructor(message?: string) {
    super(message || MissingRequiredParametersError.DEFAULT_MESSAGE, MissingRequiredParametersError.CODE);
  }

  @Property2({
    schema: {
      type: "string",
      example: MissingRequiredParametersError.CODE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: MissingRequiredParametersError.CODE
    },
    required: true
  })
  code: string;

  @Property2({
    schema: {
      type: "string",
      example: MissingRequiredParametersError.DEFAULT_MESSAGE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: MissingRequiredParametersError.DEFAULT_MESSAGE
    },
    required: true
  })
  message: string;
  
}