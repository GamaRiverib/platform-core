import { OpenAPI, OpenAPIV3 } from "openapi-types";

let BUILDER: OpenApiSpecificationBuilder | null = null;

export class OpenApiSpecificationBuilder {

    private document: OpenAPIV3.Document;

    constructor() {
        this.document = {
            openapi: "3.0.3",
            info: { title: "API", version: "1.0.0" },
            servers: [],
            paths: {},
            components: {},
            tags: []
        };
        return this;
    }

    setOpenApiVersion(version: string): OpenApiSpecificationBuilder {
        this.document.openapi = version;
        return this;
    }

    setInfo(info: OpenAPIV3.InfoObject): OpenApiSpecificationBuilder {
        this.document.info = info;
        return this;
    }

    setBasePath(basePath: string): OpenApiSpecificationBuilder {
        return this;
    }

    setConsumes(mimeTypes: string[]): OpenApiSpecificationBuilder {
        return this;
    }

    addConsume(mimeType: string): OpenApiSpecificationBuilder {
        return this;
    }

    addDefinition(key: string, schema: OpenAPIV3.SchemaObject): OpenApiSpecificationBuilder {
        return this.addSchemaComponentsObject(key, schema);
    }

    setExternalDocs(url: string, description?: string): OpenApiSpecificationBuilder {
        this.document.externalDocs = { url, description };
        return this;
    }

    addExternalDocs(key: string, obj: any): OpenApiSpecificationBuilder {
        return this;
    }

    setHost(host: string): OpenApiSpecificationBuilder {
        return this;
    }

    addServer(server: OpenAPIV3.ServerObject): OpenApiSpecificationBuilder {
        if (!this.document.servers) {
            this.document.servers = [];
        }
        this.document.servers.push(server);
        return this;
    }

    addPath(path: string, spec: OpenAPIV3.PathItemObject): OpenApiSpecificationBuilder {
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
        return this;
    }

    addProduces(mimeType: string): OpenApiSpecificationBuilder {
        return this;
    }

    addSchemaComponentsObject(key: string, schema: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject): OpenApiSpecificationBuilder {
        if (!this.document.components) {
            this.document.components = {};
        }
        if (!this.document.components.schemas) {
            this.document.components.schemas = {};
        }
        const spec = this.document.components.schemas[key] || {};
        this.document.components.schemas[key] = Object.assign(spec, schema) as OpenAPIV3.SchemaObject;

        return this;
    }

    addSchemaComponentObjectProperty(key: string, name: string, schema: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject, required?: boolean): OpenApiSpecificationBuilder {
        if (!this.document.components) {
            this.document.components = {};
        }
        if(!this.document.components.schemas) {
            this.document.components.schemas = {};
        }
        if(!this.document.components.schemas[key]) {
            this.document.components.schemas[key] = { type: "object" };
        }
        const spec = this.document.components.schemas[key] as OpenAPIV3.SchemaObject;
        if (!spec.properties) {
            spec.properties = {};
        }
        const property = spec.properties[name] || {};
        spec.properties[name] = Object.assign(property, schema);
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

    addDefinitionProperty(key: string, name: string, schema: OpenAPIV3.SchemaObject, required?: boolean): OpenApiSpecificationBuilder {
        return this.addSchemaComponentObjectProperty(key, name, schema, required);
    }

    addResponseComponentsObject(key: string, response: OpenAPIV3.ReferenceObject | OpenAPIV3.ResponseObject): OpenApiSpecificationBuilder {
        if (!this.document.components) {
            this.document.components = {};
        }
        if (!this.document.components.responses) {
            this.document.components.responses = {};
        }
        this.document.components.responses[key] = response;
        return this;
    }

    addParameterComponentsObject(key: string, parameter: OpenAPI.Parameter): OpenApiSpecificationBuilder {
        if (!this.document.components) {
            this.document.components = {};
        }
        if (!this.document.components.parameters) {
            this.document.components.parameters = {};
        }
        this.document.components.parameters[key] = parameter as OpenAPIV3.ParameterObject;
        return this;
    }

    addParameter(key: string, parameter: OpenAPIV3.ParameterObject): OpenApiSpecificationBuilder {
        return this.addParameterComponentsObject(key, parameter);
    }

    addResponse(key: string, response: OpenAPIV3.ResponseObject): OpenApiSpecificationBuilder {
        return this.addResponseComponentsObject(key, response);
    }

    setSchemes(schemes: string[]): OpenApiSpecificationBuilder {
        return this;
    }

    addScheme(scheme: string): OpenApiSpecificationBuilder {
        return this;
    }

    addExampleComponentsObject(key: string, example: OpenAPIV3.ReferenceObject | OpenAPIV3.ExampleObject): OpenApiSpecificationBuilder {
        if (!this.document.components) {
            this.document.components = {};
        }
        if (!this.document.components.examples) {
            this.document.components.examples = {};
        }
        this.document.components.examples[key] = example;
        return this;
    }

    addRequestBodyComponentsObject(key: string, requestBody: OpenAPIV3.ReferenceObject | OpenAPIV3.RequestBodyObject): OpenApiSpecificationBuilder {
        if (!this.document.components) {
            this.document.components = {};
        }
        if (!this.document.components.requestBodies) {
            this.document.components.requestBodies = {};
        }
        this.document.components.requestBodies[key] = requestBody;
        return this;
    }

    addHeaderComponentsObject(key: string, header: OpenAPIV3.ReferenceObject | OpenAPIV3.HeaderObject): OpenApiSpecificationBuilder {
        if (!this.document.components) {
            this.document.components = {};
        }
        if (!this.document.components.headers) {
            this.document.components.headers = {};
        }
        this.document.components.headers[key] = header;
        return this;
    }

    addSecuritySchemeComponentsObject(key: string, securityScheme: OpenAPIV3.ReferenceObject | OpenAPIV3.SecuritySchemeObject): OpenApiSpecificationBuilder {
        if (!this.document.components) {
            this.document.components = {};
        }
        if (!this.document.components.securitySchemes) {
            this.document.components.securitySchemes = {};
        }
        return this;
    }

    addLinkComponentsObject(key: string, link: OpenAPIV3.ReferenceObject | OpenAPIV3.LinkObject): OpenApiSpecificationBuilder {
        if (!this.document.components) {
            this.document.components = {};
        }
        if (!this.document.components.links) {
            this.document.components.links = {};
        }
        this.document.components.links[key] = link;
        return this;
    }

    addCallbackComponentsObject(key: string, callback: OpenAPIV3.ReferenceObject | OpenAPIV3.CallbackObject): OpenApiSpecificationBuilder {
        if (!this.document.components) {
            this.document.components = {};
        }
        if (!this.document.components.callbacks) {
            this.document.components.callbacks = {};
        }
        this.document.components.callbacks[key] = callback;
        return this;
    }

    addSecurityRequirement(requirement: OpenAPIV3.SecurityRequirementObject): OpenApiSpecificationBuilder {
        if (!this.document.security) {
            this.document.security = [];
        }
        this.document.security.push(requirement);
        return this;
    }

    addSecurityDefinition(key: string, definition: OpenAPIV3.SecuritySchemeObject): OpenApiSpecificationBuilder {
        return this.addSecuritySchemeComponentsObject(key, definition);
    }

    addTag(tag: OpenAPIV3.TagObject): OpenApiSpecificationBuilder {
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

    build(): OpenAPIV3.Document {
        return this.document;
    }
}

export function getOpenApiSpecificationBuilder(): OpenApiSpecificationBuilder {
    if (BUILDER === null) {
        BUILDER = new OpenApiSpecificationBuilder();
    }
    return BUILDER;
}
