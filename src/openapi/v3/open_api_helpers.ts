import { OpenAPIV3 } from "openapi-types";

export function getRequestJSON(description: string, schema: string, required?: boolean, config?: any): OpenAPIV3.RequestBodyObject {
    if (required === undefined) {
        // tslint:disable-next-line: no-parameter-reassignment
        required = true;
    }
    let reqObj: OpenAPIV3.RequestBodyObject = {
        description,
        content: {
            "application/json": {
                schema: { $ref: `#/components/schemas/${schema}` }
            }
        },
        required
    };
    if (config) {
        reqObj = Object.assign(reqObj, config);
    }
    return reqObj;
}

export function getResponseJSON(description: string, schema: string, config?: any): OpenAPIV3.ResponseObject {
    const respObj: OpenAPIV3.ResponseObject = {
        description,
        content: {
            "application/json": {
                schema: { $ref: `#/components/schemas/${schema}` }
            }
        }
    };
    return Object.assign(respObj, config || {});
}

export function getBadRequestResponseJSON(): OpenAPIV3.ResponseObject {
    return getResponseJSON("Bad request", "ApiErrorResponse");
}

export function getNotFoundResponseJSON(name?: string): OpenAPIV3.ResponseObject {
    let message = "Not found";
    if (name) {
        message = `${name} not found`;
    }
    return getErrorResponseJSON("NotFoundError", message);
}

export function getDefaultErrorResponseJSON(): OpenAPIV3.ResponseObject {
    return getResponseJSON("Something was wrong", "ApiErrorResponse");
}

export function getErrorResponseJSON(errorName: string, message?: string, config?: any) {
    const description = message || "There was a problem";
    const respObj: OpenAPIV3.ResponseObject = {
        description,
        content: {
            "application/json": {
                schema: {
                    properties: {
                        error: {
                            $ref: `#/components/schemas/${errorName}`
                        }
                    }
                }
            }
        }
    };
    return Object.assign(respObj, config || {});
}
