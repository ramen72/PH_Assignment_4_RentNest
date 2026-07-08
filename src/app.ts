import cookieParser from "cookie-parser";
import express, { Application, NextFunction, Request, Response } from "express";
import { authRoute } from "./modules/auth/auth.route";
import { notFoundHandler } from "./middlewares/notFoundHandler";
import { globalErrorHandler } from "./middlewares/globalErrorHandler";
import { auth } from "./middlewares/auth";
import { Role } from "../generated/prisma/enums";
import { adminRoute } from "./modules/admin/admin.route";
import { amenityRoute } from "./modules/amenity/amenity.route";
import { categoryRoute } from "./modules/category/category.route";
import { rentalRoute } from "./modules/rentalRequest/rentalRequest.route";
import { propertyRoutes } from "./modules/property/property.route";
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/api/auth", auth(Role.TENANT), (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api/auth", authRoute);
app.use("/api/admin", auth(Role.ADMIN), adminRoute);
app.use("/api/amenities", amenityRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/properties", propertyRoutes);
app.use("/api/rentals", rentalRoute);
app.use("/api/reviews", rentalRoute);

// Not Found Handler
app.use(notFoundHandler);

// Global Error Handler
app.use(globalErrorHandler);

export default app;
