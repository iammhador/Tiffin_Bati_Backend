import express from "express";
import { AllUsersController } from "./allUsers.controller";

const router = express.Router();

router
  .get("/", AllUsersController.getAllUsers)
  .get("/:id", AllUsersController.getSingleUserFromUsers)
  .delete("/:id", AllUsersController.deleteSingleUserFromAllUsers);

export const AllUsersRoutes = router;
