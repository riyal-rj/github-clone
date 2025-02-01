import { ENV_VARS } from "../env/env.variables.js";

export async function authenticationMiddleware(req, res, next) {
    if(req.isAuthenticated())
        return next();
    res.redirect(ENV_VARS.CLIENT_URL+"/sign-in");
}
