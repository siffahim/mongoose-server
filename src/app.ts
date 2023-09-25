import cors from "cors";
import express, { Application } from "express";
import userRouter from "./app/modules/user/user.route";

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRouter);

export default app;
