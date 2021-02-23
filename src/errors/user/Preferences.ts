import { BaseError } from "../BaseError";
import { Schema as Schema2, Property as Property2 } from "../../openapi/v2";
import { Schema as Schema3, Property as Property3 } from "../../openapi/v3";

@Schema2()
@Schema3()
export class PreferencesError extends BaseError {
  
  static CODE = "PREFERENCES_ERROR";
  static DEFAULT_MESSAGE = "Preferences error";

  constructor(message?: string) {
    super(message || PreferencesError.DEFAULT_MESSAGE, PreferencesError.CODE);
  }

  @Property2({
    schema: {
      type: "string",
      example: PreferencesError.CODE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: PreferencesError.CODE
    },
    required: true
  })
  code: string;

  @Property2({
    schema: {
      type: "string",
      example: PreferencesError.DEFAULT_MESSAGE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: PreferencesError.DEFAULT_MESSAGE
    },
    required: true
  })
  message: string;
  
}
