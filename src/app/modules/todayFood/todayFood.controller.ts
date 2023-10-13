import { Request, Response } from "express";
import { SendResponse } from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { TodayFoodService } from "./todayFood.service";

const getAllTodayFood = async (req: Request, res: Response) => {
  const result = await TodayFoodService.getAllTodayFood();
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All Today Food Data Fetched Successfully",
    data: result,
  });
};
const getSingleTodayFood = async (req: Request, res: Response) => {
  const result = await TodayFoodService.getSingleTodayFood(req.params.id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Today Food Data Fetched Successfully",
    data: result,
  });
};

const insertIntoDB = async (req: Request, res: Response) => {
  const result = await TodayFoodService.insertIntoDB(req.body);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "New Today Food Created Successfully",
    data: result,
  });
};

const updateIntoDB = async (req: Request, res: Response) => {
  const result = await TodayFoodService.updateIntoDB(req.params.id, req.body);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Today Food Information Updated Successfully",
    data: result,
  });
};

const deleteFromDB = async (req: Request, res: Response) => {
  const result = await TodayFoodService.deleteFromDB(req.params.id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Today Food Information Deleted Successfully",
    data: result,
  });
};

export const TodayFoodController = {
  getAllTodayFood,
  getSingleTodayFood,
  insertIntoDB,
  updateIntoDB,
  deleteFromDB,
};
