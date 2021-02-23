import { BaseError } from "./BaseError";
import { Schema as Schema2 } from "../openapi/v2";
import { Schema as Schema3 } from "../openapi/v3";

@Schema2()
@Schema3()
export class ApiError extends BaseError {

  constructor(message: string, code: string) {
    super(message, code);
  }

}
