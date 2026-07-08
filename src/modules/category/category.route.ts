import { Router } from "express";
import { categoryController } from "./category.controller";

const router = Router();

router.post("/", categoryController.createCategory);
router.get("/", categoryController.getAllCategories);
router.patch("/:id", categoryController.updateCategories);
router.delete("/:id", categoryController.deleteCategories);

export const categoryRoute = router;
