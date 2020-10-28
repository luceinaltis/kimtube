import express from "express";
import { deleteVideo, editVideo, getUpload, postUpload, videoDetail } from "../controllers/videoController";

import routes from "../routes";

const videoRouter = express.Router();

export default videoRouter;

videoRouter.get(routes.UPLOAD, getUpload);
videoRouter.post(routes.UPLOAD, postUpload);

videoRouter.get(routes.VIDEO_DETAIL(), videoDetail);
videoRouter.get(routes.EDIT_VIDEO, editVideo);
videoRouter.get(routes.DELETE_VIDEO, deleteVideo);