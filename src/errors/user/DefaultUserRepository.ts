import { BaseError } from "../BaseError";
import { Schema as Schema2, Property as Property2 } from "../../openapi/v2";
import { Schema as Schema3, Property as Property3 } from "../../openapi/v3";

@Schema2()
@Schema3()
export class DefaultUserRepositoryError extends BaseError {
  
  static CODE = "REPOSITORY_ERROR";
  static DEFAULT_MESSAGE = "There was a problem trying to persist the information in the repository";

  constructor(message?: string) {
    super(message || DefaultUserRepositoryError.DEFAULT_MESSAGE, DefaultUserRepositoryError.CODE);
  }

  @Property2({
    schema: {
      type: "string",
      example: DefaultUserRepositoryError.CODE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: DefaultUserRepositoryError.CODE
    },
    required: true
  })
  code: string;

  @Property2({
    schema: {
      type: "string",
      example: DefaultUserRepositoryError.DEFAULT_MESSAGE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: DefaultUserRepositoryError.DEFAULT_MESSAGE
    },
    required: true
  })
  message: string;
  
}
