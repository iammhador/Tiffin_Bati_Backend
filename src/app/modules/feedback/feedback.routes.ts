import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { FeedbackController } from "./feedback.controller";
import { FeedbackValidation } from "./feedback.validation";

const router = express.Router();

router
  .get("/", FeedbackController.getAllFeedback)
  .get("/:id", FeedbackController.getSingleFeedback)
  .post(
    "/",
    validateRequest(FeedbackValidation.create),
    FeedbackController.insertIntoDB
  )
  .patch(
    "/:id",
    validateRequest(FeedbackValidation.update),
    FeedbackController.updateIntoDB
  )
  .delete("/:id", FeedbackController.deleteFromDB);

export const FeedbackRoutes = router;
