import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { BlogController } from "./blog.controller";
import { BlogValidation } from "./blog.validation";

const router = express.Router();

router
  .get("/", BlogController.getAllBlog)
  .get("/:id", BlogController.getSingleBlog)
  .post(
    "/",
    validateRequest(BlogValidation.create),
    BlogController.insertIntoDB
  )
  .patch(
    "/:id",
    validateRequest(BlogValidation.update),
    BlogController.updateIntoDB
  )
  .delete("/:id", BlogController.deleteFromDB);

export const BlogRoutes = router;
