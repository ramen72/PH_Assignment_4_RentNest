import { Router } from "express";
import { reviewController } from "./review.controller";

const router = Router();

router.post("/", reviewController.createReview);
router.get("/", reviewController.getAllReviews);
router.patch("/:id", reviewController.updateReviews);
router.delete("/:id", reviewController.deleteReviews);

export const reviewRoute = router;
