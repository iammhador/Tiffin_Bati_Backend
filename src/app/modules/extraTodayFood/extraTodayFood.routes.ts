import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ExtraTodayFoodController } from "./extraTodayFood.controller";
import { ExtraTodayFoodValidation } from "./extraTodayFood.validation";

const router = express.Router();

router
  .get(
    "/",

    ExtraTodayFoodController.getAllExtraTodayFood
  )
  .get("/:id", ExtraTodayFoodController.getSingleExtraTodayFood)
  .post(
    "/",
    validateRequest(ExtraTodayFoodValidation.create),
    ExtraTodayFoodController.insertIntoDB
  )
  .patch(
    "/:id",
    validateRequest(ExtraTodayFoodValidation.update),
    ExtraTodayFoodController.updateIntoDB
  )
  .delete("/:id", ExtraTodayFoodController.deleteFromDB);

export const ExtraTodayFoodRoutes = router;
