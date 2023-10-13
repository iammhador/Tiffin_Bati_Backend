import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { TodayFoodController } from "./todayFood.controller";
import { TodayFoodValidation } from "./todayFood.validation";

const router = express.Router();

router
  .get("/", TodayFoodController.getAllTodayFood)
  .get("/:id", TodayFoodController.getSingleTodayFood)
  .post(
    "/",
    validateRequest(TodayFoodValidation.create),
    TodayFoodController.insertIntoDB
  )
  .patch(
    "/:id",
    validateRequest(TodayFoodValidation.update),
    TodayFoodController.updateIntoDB
  )
  .delete("/:id", TodayFoodController.deleteFromDB);

export const TodayFoodRoutes = router;
