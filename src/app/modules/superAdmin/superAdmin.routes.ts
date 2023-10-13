import express from "express";
import { SuperAdminController } from "./superAdmin.controller";

const router = express.Router();

router.post("/", SuperAdminController.insertIntoDB);

export const SuperAdminRoutes = router;
