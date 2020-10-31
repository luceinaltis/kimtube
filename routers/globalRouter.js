import express from 'express';
import {
  getJoin,
  getLogin,
  logout,
  postJoin,
  postLogin,
} from '../controllers/userController';
import { home, search } from '../controllers/videoController';

import routes from '../routes';

const globalRouter = express.Router();

globalRouter.get(routes.JOIN, getJoin);
globalRouter.post(routes.JOIN, postJoin);

globalRouter.get(routes.LOGIN, getLogin);
globalRouter.post(routes.LOGIN, postLogin);

globalRouter.get(routes.HOME, home);
globalRouter.get(routes.SEARCH, search);
globalRouter.get(routes.LOGOUT, logout);

export default globalRouter;
