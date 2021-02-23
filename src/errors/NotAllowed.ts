import { Schema as Schema2, Property as Property2 } from "../openapi/v2";
import { Schema as Schema3, Property as Property3 } from "../openapi/v3";
import { ApiError } from "./ApiError";

@Schema2()
@Schema3()
export class NotAllowedError extends ApiError {

  static CODE = "NOT_ALLOWED_ERROR";
  static DEFAULT_MESSAGE = "Not have permission for this resource";

  constructor(message?: string) {
    super(message || NotAllowedError.DEFAULT_MESSAGE, NotAllowedError.CODE);
  }

  @Property2({
    schema: {
      type: "string",
      example: NotAllowedError.CODE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: NotAllowedError.CODE
    },
    required: true
  })
  code: string;

  @Property2({
    schema: {
      type: "string",
      example: NotAllowedError.DEFAULT_MESSAGE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: NotAllowedError.DEFAULT_MESSAGE
    },
    required: true
  })
  message: string;

}
