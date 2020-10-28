import db from "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();

import "./models/video";
import "./models/comment";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));