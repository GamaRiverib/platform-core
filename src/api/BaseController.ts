import { DefaultError, NotFoundError, StateNotValidError } from "../errors";
import winston = require("winston");
import { getLogger } from "../logger";

const logger: winston.Logger = getLogger("CONTROLLER");

export abstract class BaseController {
  abstract registerEndpoints(app: any): void;
}

export function handleError(error: any, res: any): void {
  if(error && error.code) {
    if (error.code === NotFoundError.CODE) {
      res.status(404).send({ error });
      return;
    }
    if (error.code === StateNotValidError.CODE) {
      res.status(409).send({ error });
      return;
    }
    res.status(400).send({ error });
    return;
  }
  logger.error(error);
  res.status(500).send({ error: new DefaultError() });
}