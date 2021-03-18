import { Schema as Schema2, Property as Property2 } from "openapi-utilities-lib/build/lib/v2";
import { Schema as Schema3, Property as Property3 } from "openapi-utilities-lib/build/lib/v3";
import { ApiError } from "./ApiError";

@Schema2()
@Schema3()
export class NotAuthenticatedError extends ApiError {

  static CODE = "NOT_AUTHENTICATED_ERROR";

  static DEFAULT_MESSAGE = "User is not authenticated";

  constructor(message?: string) {
    super(message || NotAuthenticatedError.DEFAULT_MESSAGE, NotAuthenticatedError.CODE);
  }

  @Property2({
    schema: {
      type: "string",
      example: NotAuthenticatedError.CODE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: NotAuthenticatedError.CODE
    },
    required: true
  })
  code: string;

  @Property2({
    schema: {
      type: "string",
      example: NotAuthenticatedError.DEFAULT_MESSAGE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: NotAuthenticatedError.DEFAULT_MESSAGE
    },
    required: true
  })
  message: string;

}
