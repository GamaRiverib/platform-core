import { OpenAPI, OpenAPIV2 } from "openapi-types";

let BUILDER: OpenApiSpecificationBuilder | null = null;

export class OpenApiSpecificationBuilder {

    private document: OpenAPIV2.Document;

    constructor() {
        this.document = {
            swagger: "2.0",
            info: { title: "API", version: "1.0.0" },
            paths: {}
        };
        return this;
    }

    setOpenApiVersion(version: string): OpenApiSpecificationBuilder {
        this.document.swagger = version;
        return this;
    }

    setInfo(info: OpenAPIV2.InfoObject): OpenApiSpecificationBuilder {
        this.document.info = info;
        return this;
    }

    setBasePath(basePath: string): OpenApiSpecificationBuilder {
        this.document.basePath = basePath;
        return this;
    }

    setConsumes(mimeTypes: string[]): OpenApiSpecificationBuilder {
        this.document.consumes = mimeTypes;
        return this;
    }

    addConsume(mimeType: string): OpenApiSpecificationBuilder {
        if (!this.document.consumes) {
            this.document.consumes = [];
        }
        if (!this.document.consumes.includes(mimeType)) {
            this.document.consumes.push(mimeType);
        }
        return this;
    }

    addDefinition(key: string, schema: OpenAPIV2.SchemaObject): OpenApiSpecificationBuilder {
        if (!this.document.definitions) {
            this.document.definitions = {};
        }
        const spec = this.document.definitions[key] || {};
        this.document.definitions[key] = Object.assign(spec, schema);
        return this;
    }

    setExternalDocs(url: string, description?: string): OpenApiSpecificationBuilder {
        if (!this.document.externalDocs) {
            this.document.externalDocs = { url, description };
        } else {
            this.document.externalDocs.url = url;
            this.document.externalDocs.description = description || this.document.externalDocs.description;
        }
        return this;
    }

    addExternalDocs(key: string, obj: any): OpenApiSpecificationBuilder {
        if (!this.document.externalDocs) {
            this.document.externalDocs = { url: "" };
        }
        this.document.externalDocs[key] = obj;
        return this;
    }

    setHost(host: string): OpenApiSpecificationBuilder {
        this.document.host = host;
        return this;
    }

    addServer(server: any): OpenApiSpecificationBuilder {
        return this;
    }

    addPath(path: string, spec: OpenAPIV2.PathItemObject): OpenApiSpecificationBuilder {
        if (!this.document.paths) {
            this.document.paths = {};
        }
        if (!this.document.paths[path]) {
            this.document.paths[path] = spec;
        } else {
            this.document.paths[path] = Object.assign(this.document.paths[path], spec);
        }
        return this;
    }

    setProduces(mimeTypes: string[]): OpenApiSpecificationBuilder {
        this.document.produces = mimeTypes;
        return this;
    }

    addProduces(mimeType: string): OpenApiSpecificationBuilder {
        if (!this.document.produces) {
            this.document.produces = [];
        }
        if (!this.document.produces.includes(mimeType)) {
            this.document.produces.push(mimeType);
        }
        return this;
    }

    addSchemaComponentsObject(key: string, schema: OpenAPIV2.SchemaObject): OpenApiSpecificationBuilder {
        return this.addDefinition(key, schema);
    }

    addSchemaComponentObjectProperty(key: string, name: string, schema: OpenAPIV2.SchemaObject, required?: boolean): OpenApiSpecificationBuilder {
        return this.addDefinitionProperty(key, name, schema, required);
    }

    addDefinitionProperty(key: string, name: string, schema: OpenAPIV2.SchemaObject, required?: boolean): OpenApiSpecificationBuilder {
        if(!this.document.definitions) {
            this.document.definitions = {};
        }
        if (!this.document.definitions[key]) {
            this.document.definitions[key] = { type: "obejct" };
        }
        const spec = this.document.definitions[key];
        if (!spec.properties) {
            spec.properties = {};
        }
        spec.properties[name] = schema;
        if (required) {
            if (!spec.required) {
                spec.required = [];
            }
            const index = spec.required.findIndex(s => s === name);
            if (index < 0) {
                spec.required.push(name);
            }
        }
        return this;
    }

    addResponseComponentsObject(key: string, response: OpenAPIV2.ResponseObject): OpenApiSpecificationBuilder {
        return this.addResponse(key, response);
    }

    addParameterComponentsObject(key: string, parameter: OpenAPI.Parameter): OpenApiSpecificationBuilder {
        return this.addParameter(key, parameter as OpenAPIV2.ParameterObject);
    }

    addParameter(key: string, parameter: OpenAPIV2.ParameterObject): OpenApiSpecificationBuilder {
        if (!this.document.parameters) {
            this.document.parameters = {};
        }
        this.document.parameters[key] = parameter;
        return this;
    }

    addResponse(key: string, response: OpenAPIV2.ResponseObject): OpenApiSpecificationBuilder {
        if (!this.document.responses) {
            this.document.responses = {};
        }
        if (!this.document.responses[key]) {
            this.document.responses[key] = response;
        } else {
            this.document.responses[key] = Object.assign(this.document.responses[key], response);
        }
        return this;
    }

    setSchemes(schemes: string[]): OpenApiSpecificationBuilder {
        this.document.schemes = schemes;
        return this;
    }

    addScheme(scheme: string): OpenApiSpecificationBuilder {
        if (!this.document.schemes) {
            this.document.schemes = [];
        }
        if (!this.document.schemes.includes(scheme)) {
            this.document.schemes.push(scheme);
        }
        return this;
    }

    addExampleComponentsObject(key: string, example: OpenAPIV2.ReferenceObject | OpenAPIV2.ExampleObject): OpenApiSpecificationBuilder {
        return this;
    }

    addRequestBodyComponentsObject(key: string, requestBody: OpenAPIV2.ReferenceObject): OpenApiSpecificationBuilder {
        return this;
    }

    addHeaderComponentsObject(key: string, header: OpenAPIV2.ReferenceObject | OpenAPIV2.HeaderObject): OpenApiSpecificationBuilder {
        return this;
    }

    addSecuritySchemeComponentsObject(key: string, securityScheme: OpenAPIV2.ReferenceObject | OpenAPIV2.SecuritySchemeObject): OpenApiSpecificationBuilder {
        if (!this.document.securityDefinitions) {
            this.document.securityDefinitions = {};
        }
        this.document.securityDefinitions[key] = securityScheme as OpenAPIV2.SecuritySchemeObject;
        return this;
    }

    addLinkComponentsObject(key: string, link: OpenAPIV2.ReferenceObject): OpenApiSpecificationBuilder {
        return this;
    }

    addCallbackComponentsObject(key: string, callback: OpenAPIV2.ReferenceObject): OpenApiSpecificationBuilder {
        return this;
    }

    addSecurityRequirement(requirement: OpenAPIV2.SecurityRequirementObject ): OpenApiSpecificationBuilder {
        if (!this.document.security) {
            this.document.security = [];
        }
        this.document.security.push(requirement);
        return this;
    }

    addSecurityDefinition(key: string, definition: OpenAPIV2.SecuritySchemeObject): OpenApiSpecificationBuilder {
        return this.addSecuritySchemeComponentsObject(key, definition);
    }

    addTag(tag: OpenAPIV2.TagObject): OpenApiSpecificationBuilder {
        if (!this.document.tags) {
            this.document.tags = [];
        }
        this.document.tags.push(tag);
        return this;
    }

    scanComponents(ns: any): OpenApiSpecificationBuilder {
        for(const key in ns) {
            if(typeof ns[key] === "function") {
                // tslint:disable-next-line: no-unused-expression
                new ns[key]();
            }
        }
        return this;
    }

    build(): OpenAPIV2.Document {
        return this.document;
    }
}

export function getOpenApiSpecificationBuilder(): OpenApiSpecificationBuilder {
    if (BUILDER === null) {
        BUILDER = new OpenApiSpecificationBuilder();
    }
    return BUILDER;
}
