import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "KimTube";
    res.locals.routes = routes;
    next();
}