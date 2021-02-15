import { OpenAPI, OpenAPIV2 } from "openapi-types";
import { getOpenApiSpecificationBuilder } from "./open_api_builder";

export function Schema(spec?: OpenAPIV2.ReferenceObject | OpenAPIV2.SchemaObject) {
    // tslint:disable-next-line: ban-types
    return (constructor: Function) => {
        const builder = getOpenApiSpecificationBuilder();
        const key = constructor.name;
        const parent = Object.getPrototypeOf(constructor);
        if (parent) {
            try {
                new parent();
                (spec as OpenAPIV2.SchemaObject).allOf = [{
                    $schema: `#/definitions/${parent.name}`
                }];
            } catch (er) {
                
            }
        }
        builder.addSchemaComponentsObject(key, spec || { type: "object" });
    }
}

export type PropertyDecoratorParams = { schema?: OpenAPIV2.ReferenceObject | OpenAPIV2.SchemaObject, required?: boolean };

export function Property(params: PropertyDecoratorParams) {
    return (target: object, propertyName: string) => {
        const builder = getOpenApiSpecificationBuilder();
        const key = target.constructor.name;
        const name = propertyName;
        const schema = (params.schema || { type: "object" });
        const required = params.required;
        builder.addSchemaComponentObjectProperty(key, name, schema, required);
    }
}

export type PathDecoratorParams = {
    operation?: OpenAPIV2.OperationObject,
    $ref?: string,
    parameters?: OpenAPIV2.Parameters;
};

export type PathDecoratorMethodParam = "get" | "put" | "post" | "del" | "delete" | "options" | "head" | "patch" | "trace";

export function Path(path: string, method: PathDecoratorMethodParam, params: PathDecoratorParams) {
    return (target: object, propertyName: string) => {
        const builder = getOpenApiSpecificationBuilder();
        const operation: {[ m: string ]: OpenAPI.Operation } = {};
        operation[method] = params.operation || {};
        delete params.operation;
        const spec: any = Object.assign({}, params, operation);
        builder.addPath(path, spec);
    }
}


export function Get(path: string, params: PathDecoratorParams) {
    return Path(path, "get", params);
}

export function Post(path: string, params: PathDecoratorParams) {
    return Path(path, "post", params);
}

export function Put(path: string, params: PathDecoratorParams) {
    return Path(path, "put", params);
}

export function Del(path: string, params: PathDecoratorParams) {
    return Path(path, "delete", params);
}

