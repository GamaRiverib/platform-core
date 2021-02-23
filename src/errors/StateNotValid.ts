import { Schema as Schema2, Property as Property2 } from "../openapi/v2";
import { Schema as Schema3, Property as Property3 } from "../openapi/v3";
import { ApiError } from "./ApiError";

@Schema2()
@Schema3()
export class StateNotValidError extends ApiError {

  static CODE = "STATE_NOT_VALID_ERROR";
  static DEFAULT_MESSAGE = "Entity invalid state";

  constructor(message?: string) {
    super(message || StateNotValidError.DEFAULT_MESSAGE, StateNotValidError.CODE);
  }

  @Property2({
    schema: {
      type: "string",
      example: StateNotValidError.CODE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: StateNotValidError.CODE
    },
    required: true
  })
  code: string;

  @Property2({
    schema: {
      type: "string",
      example: StateNotValidError.DEFAULT_MESSAGE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: StateNotValidError.DEFAULT_MESSAGE
    },
    required: true
  })
  message: string;

}
