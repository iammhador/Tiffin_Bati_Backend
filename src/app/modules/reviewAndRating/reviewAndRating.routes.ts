import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ReviewAndRatingController } from "./reviewAndRating.controller";
import { ReviewAndRatingValidation } from "./reviewAndRating.validation";

const router = express.Router();

router
  .get("/", ReviewAndRatingController.getAllReviewAndRating)
  .get("/:id", ReviewAndRatingController.getSingleReviewAndRating)
  .post(
    "/",
    validateRequest(ReviewAndRatingValidation.create),
    ReviewAndRatingController.insertIntoDB
  )
  .patch(
    "/:id",
    validateRequest(ReviewAndRatingValidation.update),
    ReviewAndRatingController.updateIntoDB
  )
  .delete("/:id", ReviewAndRatingController.deleteFromDB);

export const ReviewAndRatingRoutes = router;
