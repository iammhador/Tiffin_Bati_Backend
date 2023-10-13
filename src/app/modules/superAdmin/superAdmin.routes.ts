import express from "express";
import { SuperAdminController } from "./superAdmin.controller";
import validateRequest from "../../middlewares/validateRequest";
import { SuperAdminValidation } from "./superAdmin.validation";

const router = express.Router();

router
  .get("/", SuperAdminController.getAllSuperAdmin)
  .get("/:id", SuperAdminController.getSingleSuperAdmin)
  .post(
    "/",
    validateRequest(SuperAdminValidation.create),
    SuperAdminController.insertIntoDB
  )
  .patch(
    "/:id",
    validateRequest(SuperAdminValidation.update),
    SuperAdminController.updateIntoDB
  )
  .delete("/:id", SuperAdminController.deleteFromDB);

export const SuperAdminRoutes = router;
