import { Router } from "express";
import { rentalController } from "./rentalRequest.controller";

const router = Router();

router.post("/", rentalController.createRental);
router.get("/", rentalController.getAllRentals);
router.patch("/:id", rentalController.updateRentals);
router.delete("/:id", rentalController.deleteRentals);

export const rentalRoute = router;
