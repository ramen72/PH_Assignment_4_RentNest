import { Router } from "express";
import { amenityController } from "./amenity.controller";

const router = Router();

router.post("/", amenityController.createAmenity);
router.get("/", amenityController.getAllAmenities);
router.patch("/:id", amenityController.updateAmenities);
router.delete("/:id", amenityController.updateAmenities);

export const amenityRoute = router;
