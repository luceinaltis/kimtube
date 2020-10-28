import express from "express";

import routes from "../routes";
import { changePassword, editProfile, userDetail } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.EDIT_PROFILE, editProfile);
userRouter.get(routes.USER_DETAIL(), userDetail);
userRouter.get(routes.CHANGE_PASSWORD, changePassword);

export default userRouter;