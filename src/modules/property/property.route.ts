import { Router } from "express";
import { authController } from "./property.controller";

const router = Router();

router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);

export const authRoute = router;
