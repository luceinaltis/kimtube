import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import { userRouter } from "./router";

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("Hello from server");
});

app.get("/profile", (req, res) => {
    res.send("profile");
});

app.use("/user", userRouter);

export default app;