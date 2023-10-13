import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { FAQController } from "./faq.controller";
import { FAQValidation } from "./faq.validation";

const router = express.Router();

router
  .get("/", FAQController.getAllFAQ)
  .get("/:id", FAQController.getSingleFAQ)
  .post("/", validateRequest(FAQValidation.create), FAQController.insertIntoDB)
  .patch(
    "/:id",
    validateRequest(FAQValidation.update),
    FAQController.updateIntoDB
  )
  .delete("/:id", FAQController.deleteFromDB);

export const FAQRoutes = router;
