import { Request, Response } from "express";
import { SendResponse } from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { MenuService } from "./newFood.service";

const getAllNewFoods = async (req: Request, res: Response) => {
  const result = await MenuService.getAllNewFoods();
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All Foods Data Fetched Successfully",
    data: result,
  });
};
const getSingleFood = async (req: Request, res: Response) => {
  const result = await MenuService.getSingleFood(req.params.id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Food Data Fetched Successfully",
    data: result,
  });
};

const insertIntoDB = async (req: Request, res: Response) => {
  const result = await MenuService.insertIntoDB(req.body);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "New Food Created Successfully",
    data: result,
  });
};

const updateIntoDB = async (req: Request, res: Response) => {
  const result = await MenuService.updateIntoDB(req.params.id, req.body);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Food Information Updated Successfully",
    data: result,
  });
};

const deleteFromDB = async (req: Request, res: Response) => {
  const result = await MenuService.deleteFromDB(req.params.id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Food Information Deleted Successfully",
    data: result,
  });
};

export const NewFoodController = {
  getAllNewFoods,
  getSingleFood,
  insertIntoDB,
  updateIntoDB,
  deleteFromDB,
};
