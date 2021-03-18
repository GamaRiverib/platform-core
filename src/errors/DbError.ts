import { BaseError } from "./BaseError";
import { Schema as Schema2, Property as Property2 } from "openapi-utilities-lib/build/lib/v2";
import { Schema as Schema3, Property as Property3 } from "openapi-utilities-lib/build/lib/v3";

@Schema2()
@Schema3()
export class DbError extends BaseError {

  static CODE = "DB_ERROR";
  static DEFAULT_MESSAGE = "Something was wrong with database";

  constructor(message?: string) {
    super(message || DbError.DEFAULT_MESSAGE, DbError.CODE);
  }

  @Property2({
    schema: {
      type: "string",
      example: DbError.CODE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: DbError.CODE
    },
    required: true
  })
  code: string;

  @Property2({
    schema: {
      type: "string",
      example: DbError.DEFAULT_MESSAGE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: DbError.DEFAULT_MESSAGE
    },
    required: true
  })
  message: string;

}