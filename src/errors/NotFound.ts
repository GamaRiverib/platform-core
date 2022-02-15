import { Schema as Schema2, Property as Property2 } from "@gamariverib/openapi-utilities-lib/build/lib/v2";
import { Schema as Schema3, Property as Property3 } from "@gamariverib/openapi-utilities-lib/build/lib/v3";
import { ApiError } from "./ApiError";

@Schema2()
@Schema3()
export class NotFoundError extends ApiError {

  static CODE = "NOT_FOUND_ERROR";
  static DEFAULT_MESSAGE = "Item not found";

  constructor(message?: string) {
    super(message || NotFoundError.DEFAULT_MESSAGE, NotFoundError.CODE);
  }

  @Property2({
    schema: {
      type: "string",
      example: NotFoundError.CODE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: NotFoundError.CODE
    },
    required: true
  })
  code: string;

  @Property2({
    schema: {
      type: "string",
      example: NotFoundError.DEFAULT_MESSAGE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: NotFoundError.DEFAULT_MESSAGE
    },
    required: true
  })
  message: string;

}
