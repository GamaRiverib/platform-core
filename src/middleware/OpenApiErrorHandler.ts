import { UnhandleError, ApiValidationError } from "../errors";
import { getLogger } from "../logger";

const logger = getLogger("OAEH");

const errorCodeReplace: string = ".openapi.validation";
const pathReplaceBody: string = ".body.";
const pathReplaceQuery: string = ".query.";

export function openApiErrorHandler(error: any, req: any, res: any, next: any): void {
    if(Array.isArray(error.errors) && error.errors.length >= 1) {
        let errors: Array<any> = error.errors.map((e: { message: string, errorCode: string, path: string })=> {
            let error: { property: string, code: string, message: string } = {
                code: e.errorCode ? e.errorCode.replace(errorCodeReplace, "") : "UNKNOWN",
                property: e.path ? e.path.replace(pathReplaceBody, "").replace(pathReplaceQuery, "") : "UNKNOWN",
                message: e.message
            };
            return error;
        });
        res.status(error.status || 400).send({ error: new ApiValidationError("Request validation error", errors) });
        return;
    }
    logger.error("Not OpenAPI errors", { data: { error } });
    res.status(error.status || 500).send({ error: new UnhandleError() });
}