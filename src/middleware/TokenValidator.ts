import winston = require("winston");

import { decode, Secret, verify, VerifyOptions, Algorithm/*, TokenExpiredError*/ } from "jsonwebtoken"
import { MissingAccessTokenError, SchemeAuthorizationError, FormatAccessTokenError, 
         VerificationAccessTokenError, ExpiredAccessTokenError, AccessForbiddenError } from "../errors/token";
import { getLogger } from "../logger";

import { HEADER_KEY_SUB, HEADER_KEY_CONSUMER } from "..";


const logger: winston.Logger = getLogger("JWT");


export function admin_token_validator_middleware(secretOrPublicKey: Secret, options: VerifyOptions, acl: Array<string>): (req: any, res: any, next: any) => void {

    const middleware = (req: any, res: any, next: any): void => {
        if(!req.headers || !req.headers.authorization) {
            return res.status(401).send({ error: new MissingAccessTokenError() });
        }
        if(!req.headers.authorization.startsWith("Bearer ")) {
            return res.status(401).send({ error: new SchemeAuthorizationError() });
        }
        const token: string = req.headers.authorization.split(" ")[1];

        try {
            const json: any = verify(token, secretOrPublicKey, options);
            if (typeof json !== "object" || !json.user_id) { // TODO: Payload interface
                return res.status(403).send({ error: new FormatAccessTokenError() });
            }
            const isAdmin: any = acl.find(user_id => user_id == json.user_id);
            if (!isAdmin) {
                return res.status(403).send({ error: new AccessForbiddenError() });
            }
            req.user_id = json.user_id;
            req.headers[HEADER_KEY_SUB] = json.sub;
            req.headers[HEADER_KEY_CONSUMER] = json.client_id;
            next();
        } catch(error) {
            // TODO: error.name, error.message (logger);
            // name: 'JsonWebTokenError', message: 'invalid algorithm'
            if(error && error.name && error.name === "TokenExpiredError") { // TODO: TokenExpiredError
                return res.status(401).send({ error: new ExpiredAccessTokenError() });
            }
            res.status(400).send({ error: new VerificationAccessTokenError(error.message || error.name || "") });
        }
    };

    return middleware;
}

export function token_validator_middleware(secretOrPublicKey: Secret, options: VerifyOptions): (req: any, res: any, next: any) => void {

    const middleware = (req: any, res: any, next: any): void => {
        if(!req.headers || !req.headers.authorization) {
            return res.status(401).send({ error: new MissingAccessTokenError() });
        }
        if(!req.headers.authorization.startsWith("Bearer ")) {
            return res.status(401).send({ error: new SchemeAuthorizationError() });
        }
        const token: string = req.headers.authorization.split(" ")[1];

        try {
            const json: any = verify(token, secretOrPublicKey, options);
            if (typeof json !== "object" || !json.user_id) { // TODO: Payload interface
                // TODO: logger
                return res.status(403).send({ error: new FormatAccessTokenError() });
            }
            req.user_id = json.user_id;
            req.headers[HEADER_KEY_SUB] = json.sub;
            req.headers[HEADER_KEY_CONSUMER] = json.client_id;
            next();
        } catch(error) {
            // console.log(error);
            // TODO: error.name, error.message (logger);
            // name: 'JsonWebTokenError', message: 'invalid algorithm'
            if(error && error.name && error.name === "TokenExpiredError") { // TODO: TokenExpiredError
                return res.status(401).send({ error: new ExpiredAccessTokenError() });
            }
            res.status(400).send({ error: new VerificationAccessTokenError() });
        }
    };

    return middleware;
}

export interface PublicKeyInfo {
    key_id: string;
    public_key: string;
    algorithm: Algorithm;
    expiration?: number;
}

export function jwt_validator_middleware(options: VerifyOptions, secretOrPublicKey?: Secret, getPublicKey?: (kid: string) => Promise<PublicKeyInfo | null>): (req: any, res: any, next: any) => void {

    const middleware = async (req: any, res: any, next: any): Promise<void> => {
        logger.debug("JWT Filter", { data: { endpoint: `${req.baseUrl}${req.url}` } });
        if(!req.headers || !req.headers.authorization) {
            const error: string = "missing_access_token_error";
            res.status(401).send({ error });
            logger.warn(error, { data: { url: req.url, method: req.method, headers: req.headers } })
            return;
        }
        if(!req.headers.authorization.startsWith("Bearer ")) {
            const error: string = "schema_authorization_error";
            res.status(401).send({ error });
            logger.warn(error, { data: { url: req.url, method: req.method, headers: req.headers } });
            return;
        }
        const token: string = req.headers.authorization.split(" ")[1];

        try {
            const json: any = decode(token, { complete: true });
            if (typeof json !== "object") {
                const error: string = "format_access_token_error";
                res.status(403).send({ error });
                logger.warn(error, { data: { url: req.url, method: req.method, headers: req.headers } });
                return;
            }
            let publicKey: Secret = secretOrPublicKey;
            if(json.header.kid) {
                const publicKeyInfo: PublicKeyInfo = await getPublicKey(json.header.kid);
                if (!options.algorithms) {
                    options.algorithms = [];
                }
                options.algorithms.push(publicKeyInfo.algorithm);
                publicKey = publicKeyInfo.public_key;
            }
            const verified: any = verify(token, publicKey, options);
            if (typeof verified !== "object") {
                const error: string = "format_access_token_error";
                res.status(403).send({ error });
                logger.warn(error, { data: { url: req.url, method: req.method, headers: req.headers } });
                return;
            }
            req.headers[HEADER_KEY_SUB] = verified.sub;
            req.headers[HEADER_KEY_CONSUMER] = verified.client_id;
            next();
        } catch(error) {
            logger.warn("JWT Exception", { data: { error } });
            // TODO: error.name, error.message (logger);
            // name: 'JsonWebTokenError', message: 'invalid algorithm'
            if(error && error.name && error.name === "TokenExpiredError") { // TODO: TokenExpiredError
                res.status(401).send({ error: "token_expired_error" });
                return;
            }
            res.status(400).send({ error: "verification_access_token_error" });
        }
    };

    return middleware;
}
