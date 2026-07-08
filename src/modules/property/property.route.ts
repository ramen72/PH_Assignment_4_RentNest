import { Router } from "express";
import { propertyController } from "./property.controller";

const router = Router();

router.post("/", propertyController.createProperty);
router.get("/", propertyController.getAllProperties);
router.patch("/:id", propertyController.updateProperties);
router.delete("/:id", propertyController.deleteProperties);

export const propertyRoute = router;
