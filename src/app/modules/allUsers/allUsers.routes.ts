import express from "express";
import { AllUsersController } from "./allUsers.controller";

const router = express.Router();

router
  .get("/", AllUsersController.getAllUsers)
  .delete("/", AllUsersController.deleteSingleUserFromAllUsers);

export const AllUsersRoutes = router;
