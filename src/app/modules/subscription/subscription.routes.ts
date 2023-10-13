import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { subscriptionController } from "./subscription.controller";
import { SubscriptionValidation } from "./subscription.validation";

const router = express.Router();

router
  .get("/", subscriptionController.getAllSubscription)
  .get("/:id", subscriptionController.getSingleSubscription)
  .post(
    "/",
    validateRequest(SubscriptionValidation.create),
    subscriptionController.insertIntoDB
  )
  .patch(
    "/:id",
    validateRequest(SubscriptionValidation.update),
    subscriptionController.updateIntoDB
  )
  .delete("/:id", subscriptionController.deleteFromDB);

export const SubscriptionRoutes = router;
