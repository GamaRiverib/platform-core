import { BaseError } from "./BaseError";
import { Schema as Schema2, Property as Property2 } from "openapi-utilities-lib/build/lib/v2";
import { Schema as Schema3, Property as Property3 } from "openapi-utilities-lib/build/lib/v3";

@Schema2()
@Schema3()
export class AlreadyExistsError extends BaseError {

  static CODE = "ALREADY_EXISTS_ERROR";
  static DEFAULT_MESSAGE = "Already exists item id";

  constructor(message?: string) {
    super(message || AlreadyExistsError.DEFAULT_MESSAGE, AlreadyExistsError.CODE);
  }

  @Property2({
    schema: {
      type: "string",
      example: AlreadyExistsError.CODE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: AlreadyExistsError.CODE
    },
    required: true
  })
  code: string;

  @Property2({
    schema: {
      type: "string",
      example: AlreadyExistsError.DEFAULT_MESSAGE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: AlreadyExistsError.DEFAULT_MESSAGE
    },
    required: true
  })
  message: string;

}