import { Secret, verify, VerifyOptions/*, TokenExpiredError*/ } from "jsonwebtoken"
import { MissingAccessTokenError, SchemeAuthorizationError, FormatAccessTokenError, 
         VerificationAccessTokenError, ExpiredAccessTokenError, AccessForbiddenError } from "../errors/token";

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