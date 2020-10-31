import express from "express";
import { deleteVideo, getEditVideo, postEditVideo, getUpload, postUpload, videoDetail } from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

import routes from "../routes";

const videoRouter = express.Router();

export default videoRouter;

videoRouter.get(routes.UPLOAD, getUpload);
videoRouter.post(routes.UPLOAD, uploadVideo ,postUpload);

videoRouter.get(routes.EDIT_VIDEO(), getEditVideo);
videoRouter.post(routes.EDIT_VIDEO(), postEditVideo);

videoRouter.get(routes.VIDEO_DETAIL(), videoDetail);

videoRouter.get(routes.DELETE_VIDEO(), deleteVideo);