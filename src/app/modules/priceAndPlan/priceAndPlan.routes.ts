import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { PriceAndPlanController } from "./priceAndPlan.controller";
import { PriceAndPlanValidation } from "./priceAndPlan.validation";

const router = express.Router();

router
  .get("/", PriceAndPlanController.getAllPriceAndPlan)
  .get("/:id", PriceAndPlanController.getSinglePriceAndPlan)
  .post(
    "/",
    validateRequest(PriceAndPlanValidation.create),
    PriceAndPlanController.insertIntoDB
  )
  .patch(
    "/:id",
    validateRequest(PriceAndPlanValidation.update),
    PriceAndPlanController.updateIntoDB
  )
  .delete("/:id", PriceAndPlanController.deleteFromDB);

export const PriceAndPlanRoutes = router;
