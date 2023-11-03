import express from "express";
import { AdminController } from "./admin.controller";
import validateRequest from "../../middlewares/validateRequest";
import { AdminValidation } from "./admin.validation";

const router = express.Router();

router
  .get("/", AdminController.getAllAdmins)
  .get(
    "/:id",

    AdminController.getSingleAdmins
  )
  .post(
    "/",
    validateRequest(AdminValidation.create),
    AdminController.insertIntoDB
  )
  .patch(
    "/:id",
    validateRequest(AdminValidation.update),
    AdminController.updateIntoDB
  )
  .delete("/:id", AdminController.deleteFromDB);

export const AdminRoutes = router;
