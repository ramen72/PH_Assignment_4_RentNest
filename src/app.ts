import cookieParser from "cookie-parser";
import express, { Application, NextFunction, Request, Response } from "express";
import { authRoute } from "./modules/auth/auth.route";
import { notFoundHandler } from "./middlewares/notFoundHandler";
import { globalErrorHandler } from "./middlewares/globalErrorHandler";
import { auth } from "./middlewares/auth";
import { Role } from "../generated/prisma/enums";
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/api/auth", auth(Role.TENANT), (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api/auth", authRoute);

// Not Found Handler
app.use(notFoundHandler);

// Global Error Handler
app.use(globalErrorHandler);

export default app;
