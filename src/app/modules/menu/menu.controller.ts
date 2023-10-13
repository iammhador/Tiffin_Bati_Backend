import { Request, Response } from "express";
import { SendResponse } from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { MenuService } from "./menu.service";

const getAllMenus = async (req: Request, res: Response) => {
  const result = await MenuService.getAllMenus();
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All Menus Data Fetched Successfully",
    data: result,
  });
};
const getSingleMenu = async (req: Request, res: Response) => {
  const result = await MenuService.getSingleMenu(req.params.id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Menu Data Fetched Successfully",
    data: result,
  });
};

const insertIntoDB = async (req: Request, res: Response) => {
  const result = await MenuService.insertIntoDB(req.body);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "New Menu Created Successfully",
    data: result,
  });
};

const updateIntoDB = async (req: Request, res: Response) => {
  const result = await MenuService.updateIntoDB(req.params.id, req.body);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Menu Information Updated Successfully",
    data: result,
  });
};

const deleteFromDB = async (req: Request, res: Response) => {
  const result = await MenuService.deleteFromDB(req.params.id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Menu Information Deleted Successfully",
    data: result,
  });
};

export const MenuController = {
  getAllMenus,
  getSingleMenu,
  insertIntoDB,
  updateIntoDB,
  deleteFromDB,
};
