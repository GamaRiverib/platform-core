import { OpenAPIV2 } from "openapi-types";

export function getRequestJSON(description: string, schema: string, required?: boolean, config?: any): OpenAPIV2.Parameter {
    if (required === undefined) {
        // tslint:disable-next-line: no-parameter-reassignment
        required = true;
    }
    let reqObj: OpenAPIV2.Parameter = {
        name: schema.toLocaleLowerCase(),
        in: "body",
        description,
        schema: { $ref: `#/definitions/${schema}` },
        required
    };
    if (config) {
        reqObj = Object.assign(reqObj, config);
    }
    return reqObj;
}

export function getResponseJSON(description: string, schema: string, config?: any): OpenAPIV2.ResponseObject {
    const respObj: OpenAPIV2.ResponseObject = {
        description,
        schema: { $ref: `#/definitions/${schema}` }
    };
    return Object.assign(respObj, config || {});
}

export function getBadRequestResponseJSON(): OpenAPIV2.ResponseObject {
    return getResponseJSON("Bad request", "ApiErrorResponse");
}

export function getNotFoundResponseJSON(name?: string): OpenAPIV2.ResponseObject {
    let message = "Not found";
    if (name) {
        message = `${name} not found`;
    }
    return getErrorResponseJSON("NotFoundError", message);
}

export function getDefaultErrorResponseJSON(): OpenAPIV2.ResponseObject {
    return getResponseJSON("Something was wrong", "ApiErrorResponse");
}

export function getErrorResponseJSON(errorName: string, message?: string, config?: any) {
    const description = message || "There was a problem";
    const respObj: OpenAPIV2.ResponseObject = {
        description,
        schema: {
            properties: {
                error: {
                    $ref: `#/definitions/${errorName}`
                }
            }
        }
    };
    return Object.assign(respObj, config || {});
}
