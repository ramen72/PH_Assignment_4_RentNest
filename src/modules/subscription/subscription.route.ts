import { Request, Response, Router } from "express";
import { subscriptionController } from "./subscription.controller";
import { auth } from "../../middlewares/auth";
import { Role } from "../../../generated/prisma/client";

const router = Router();

router.post(
  "/checkout",
  auth(Role.ADMIN, Role.LANDLORD, Role.TENANT),
  subscriptionController.createCheckoutSession,
);

router.post("/webhook", subscriptionController.handleWebhook);
router.get(
  "/status",
  auth(Role.ADMIN, Role.LANDLORD, Role.TENANT),
  subscriptionController.getSubscriptionStatus,
);

export const subscriptionRoutes = router;
