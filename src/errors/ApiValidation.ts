import { BaseError } from "./BaseError";
import { Schema as Schema2, Property as Property2 } from "@gamariverib/openapi-utilities-lib/build/lib/v2";
import { Schema as Schema3, Property as Property3 } from "@gamariverib/openapi-utilities-lib/build/lib/v3";

@Schema2()
@Schema3()
export class ApiValidationError extends BaseError {

  static CODE = "API_VALIDATION_ERROR";
  static DEFAULT_MESSAGE = "API validation error";

  validations: Array<any>;

  constructor(message?: string, errors?: Array<any>) {
    super(message || ApiValidationError.DEFAULT_MESSAGE, ApiValidationError.CODE);
    this.validations = errors || [];
  }

  @Property2({
    schema: {
      type: "string",
      example: ApiValidationError.CODE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: ApiValidationError.CODE
    },
    required: true
  })
  code: string;

  @Property2({
    schema: {
      type: "string",
      example: ApiValidationError.DEFAULT_MESSAGE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: ApiValidationError.DEFAULT_MESSAGE
    },
    required: true
  })
  message: string;

}