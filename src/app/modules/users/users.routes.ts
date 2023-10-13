import express from "express";
import { UsersController } from "./users.controller";
import validateRequest from "../../middlewares/validateRequest";
import { UsersValidation } from "./users.validation";

const router = express.Router();

router
  .get("/", UsersController.getAllUsers)
  .get("/:id", UsersController.getSingleUsers)
  .post(
    "/",
    validateRequest(UsersValidation.create),
    UsersController.insertIntoDB
  )
  .patch(
    "/:id",
    validateRequest(UsersValidation.update),
    UsersController.updateIntoDB
  )
  .delete("/:id", UsersController.deleteFromDB);

export const UsersRoutes = router;
