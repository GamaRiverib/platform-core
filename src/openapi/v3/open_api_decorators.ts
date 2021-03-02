import { OpenAPI, OpenAPIV3 } from "openapi-types";
import { getOpenApiSpecificationBuilder } from "./open_api_builder";

export function Schema(spec?: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject) {
  // tslint:disable-next-line: ban-types
  return (constructor: Function) => {
    const builder = getOpenApiSpecificationBuilder();
    spec = spec ? spec : { type: "object" };
    const key = constructor.name;
    const parent = Object.getPrototypeOf(constructor);
    if (parent) {
      try {
        new parent();
        (spec as OpenAPIV3.SchemaObject).allOf = [{
          $ref: `#/components/schemas/${parent.name}`
        }];
      } catch (er) {
          
      }
    }
    builder.addSchemaComponentsObject(key, spec);
  }
}

export type PropertyDecoratorParams = { schema?: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject, required?: boolean };

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

export function ReferenceObject(type: any) {
  return (target: object, propertyName: string) => {
    const builder = getOpenApiSpecificationBuilder();
    const key = target.constructor.name;
    const name = propertyName;
    const schema = {
      $ref: `#/components/schemas/${type.name}`
    };
    builder.addSchemaComponentObjectProperty(key, name, schema);
  };
}

export function Array(items: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject) {
  return (target: object, propertyName: string) => {
    const builder = getOpenApiSpecificationBuilder();
    const key = target.constructor.name;
    const name = propertyName;
    const type: OpenAPIV3.ArraySchemaObjectType = "array";
    const schema = { type, items };
    builder.addSchemaComponentObjectProperty(key, name, schema);
  }
}

export function Boolean() {
  return (target: object, propertyName: string) => {
    const builder = getOpenApiSpecificationBuilder();
    const key = target.constructor.name;
    const name = propertyName;
    const type: OpenAPIV3.NonArraySchemaObjectType = "boolean";
    const schema = { type };
    builder.addSchemaComponentObjectProperty(key, name, schema);
  }
}

export function Number() {
  return (target: object, propertyName: string) => {
    const builder = getOpenApiSpecificationBuilder();
    const key = target.constructor.name;
    const name = propertyName;
    const type: OpenAPIV3.NonArraySchemaObjectType = "number";
    const schema = { type };
    builder.addSchemaComponentObjectProperty(key, name, schema);
  }
}

export function MaxItems(maxItems: number) {
  return (target: object, propertyName: string) => {
    const builder = getOpenApiSpecificationBuilder();
    const key = target.constructor.name;
    const name = propertyName;
    const schema = { maxItems };
    builder.addSchemaComponentObjectProperty(key, name, schema);
  }
}

export function MinItems(minItems: number) {
  return (target: object, propertyName: string) => {
    const builder = getOpenApiSpecificationBuilder();
    const key = target.constructor.name;
    const name = propertyName;
    const schema = { minItems };
    builder.addSchemaComponentObjectProperty(key, name, schema);
  }
}

export function Default(val: any) {
  return (target: object, propertyName: string) => {
    const builder = getOpenApiSpecificationBuilder();
    const key = target.constructor.name;
    const name = propertyName;
    const schema = { default: val };
    builder.addSchemaComponentObjectProperty(key, name, schema);
  }
}

export function Description(description: string) {
  return (target: object, propertyName: string) => {
    const builder = getOpenApiSpecificationBuilder();
    const key = target.constructor.name;
    const name = propertyName;
    const schema = { description };
    builder.addSchemaComponentObjectProperty(key, name, schema);
  }
}

export function Enum(values: string[]) {
  return (target: object, propertyName: string) => {
    const builder = getOpenApiSpecificationBuilder();
    const key = target.constructor.name;
    const name = propertyName;
    const schema = { enum: values };
    builder.addSchemaComponentObjectProperty(key, name, schema);
  }
}

export function Example(example: any) {
  return (target: object, propertyName: string) => {
    const builder = getOpenApiSpecificationBuilder();
    const key = target.constructor.name;
    const name = propertyName;
    const schema = { example };
    builder.addSchemaComponentObjectProperty(key, name, schema);
  }
}

export function Format(format: string) {
  return (target: object, propertyName: string) => {
    const builder = getOpenApiSpecificationBuilder();
    const key = target.constructor.name;
    const name = propertyName;
    const schema = { format };
    builder.addSchemaComponentObjectProperty(key, name, schema);
  }
}

export function Nullable(nullable?: boolean) {
  return (target: object, propertyName: string) => {
    const builder = getOpenApiSpecificationBuilder();
    const key = target.constructor.name;
    const name = propertyName;
    const schema: { nullable?: boolean } = { nullable: true };
    if (nullable !== undefined) {
      schema.nullable = nullable;
    }
    builder.addSchemaComponentObjectProperty(key, name, schema);
  }
}

export function Maximum(maximum: number, exclusive?: boolean) {
  return (target: object, propertyName: string) => {
    const builder = getOpenApiSpecificationBuilder();
    const key = target.constructor.name;
    const name = propertyName;
    const schema = { maximum };
    if (exclusive !== undefined) {
      schema["exclusiveMinimum"] = exclusive;
    }
    builder.addSchemaComponentObjectProperty(key, name, schema);
  }
}

export function Minimum(minimum: number, exclusive?: boolean) {
  return (target: object, propertyName: string) => {
    const builder = getOpenApiSpecificationBuilder();
    const key = target.constructor.name;
    const name = propertyName;
    const schema = { minimum };
    if (exclusive !== undefined) {
      schema["exclusiveMinimum"] = exclusive;
    }
    builder.addSchemaComponentObjectProperty(key, name, schema);
  }
}

export function Pattern(pattern: string) {
  return (target: object, propertyName: string) => {
    const builder = getOpenApiSpecificationBuilder();
    const key = target.constructor.name;
    const name = propertyName;
    const schema = { pattern };
    builder.addSchemaComponentObjectProperty(key, name, schema);
  }
}

export function Required(isRequired?: boolean) {
  return (target: object, propertyName: string) => {
    const builder = getOpenApiSpecificationBuilder();
    const key = target.constructor.name;
    const name = propertyName;
    let required = true;
    if (isRequired !== undefined) {
      required = isRequired;
    }
    builder.addSchemaComponentObjectProperty(key, name, {}, required);
  }
}

export function MaxLength(maxLength: number) {
  return (target: object, propertyName: string) => {
    const builder = getOpenApiSpecificationBuilder();
    const key = target.constructor.name;
    const name = propertyName;
    const schema = { maxLength };
    builder.addSchemaComponentObjectProperty(key, name, schema);
  }
}

export function MinLength(minLength: number) {
  return (target: object, propertyName: string) => {
    const builder = getOpenApiSpecificationBuilder();
    const key = target.constructor.name;
    const name = propertyName;
    const schema = { minLength };
    builder.addSchemaComponentObjectProperty(key, name, schema);
  }
}

export function Title(title: string) {
  return (target: object, propertyName: string) => {
    const builder = getOpenApiSpecificationBuilder();
    const key = target.constructor.name;
    const name = propertyName;
    const schema = { title };
    builder.addSchemaComponentObjectProperty(key, name, schema);
  }
}

export function String() {
  return (target: object, propertyName: string) => {
    const builder = getOpenApiSpecificationBuilder();
    const key = target.constructor.name;
    const name = propertyName;
    const type: OpenAPIV3.NonArraySchemaObjectType = "string";
    const schema = { type };
    builder.addSchemaComponentObjectProperty(key, name, schema);
  }
}

export type PathDecoratorParams = {
  operation?: OpenAPI.Operation,
  $ref?: string,
  summary?: string,
  description?: string;
  servers?: OpenAPIV3.ServerObject[];
  parameters?: OpenAPI.Parameters;
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
