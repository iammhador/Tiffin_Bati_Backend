import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { NewFoodController } from "./newFood.controller";
import { NewFoodValidation } from "./newFood.validation";

const router = express.Router();

router
  .get("/", NewFoodController.getAllNewFoods)
  .get("/:id", NewFoodController.getSingleFood)
  .post(
    "/",
    validateRequest(NewFoodValidation.create),
    NewFoodController.insertIntoDB
  )
  .patch(
    "/:id",
    validateRequest(NewFoodValidation.update),
    NewFoodController.updateIntoDB
  )
  .delete("/:id", NewFoodController.deleteFromDB);

export const NewFoodRoutes = router;
