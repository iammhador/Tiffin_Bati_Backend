import express from "express"
import validateRequest from "../../middlewares/validateRequest";
import { MenuController } from "./menu.controller";
import { MenuValidation } from "./menu.validation";

const router = express.Router();

router
  .get("/", MenuController.getAllMenus)
  .get("/:id", MenuController.getSingleMenu)
  .post(
    "/",
    validateRequest(MenuValidation.create),
    MenuController.insertIntoDB
  )
  .patch(
    "/:id",
    validateRequest(MenuValidation.update),
    MenuController.updateIntoDB
  )
  .delete("/:id", MenuController.deleteFromDB);

export const MenuRoutes = router;
