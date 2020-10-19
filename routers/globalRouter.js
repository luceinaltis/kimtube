import express from "express";
import { join, login, logout } from "../controllers/userController";
import { home, search } from "../controllers/videoController";

import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.HOME, home);
globalRouter.get(routes.SEARCH, search);
globalRouter.get(routes.JOIN, join);
globalRouter.get(routes.LOGIN, login);
globalRouter.get(routes.LOGOUT, logout);

export default globalRouter;