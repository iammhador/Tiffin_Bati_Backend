import { Request, Response } from "express";
import { SendResponse } from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { ExtraTodayFoodService } from "./extraTodayFood.service";

const getAllExtraTodayFood = async (req: Request, res: Response) => {
  const result = await ExtraTodayFoodService.getAllExtraTodayFood();
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All Extra Today Food Data Fetched Successfully",
    data: result,
  });
};
const getSingleExtraTodayFood = async (req: Request, res: Response) => {
  const result = await ExtraTodayFoodService.getSingleExtraTodayFood(
    req.params.id
  );
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Extra Today Food Data Fetched Successfully",
    data: result,
  });
};

const insertIntoDB = async (req: Request, res: Response) => {
  const result = await ExtraTodayFoodService.insertIntoDB(req.body);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Create Extra Today Food Created Successfully",
    data: result,
  });
};

const updateIntoDB = async (req: Request, res: Response) => {
  const result = await ExtraTodayFoodService.updateIntoDB(
    req.params.id,
    req.body
  );
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Extra Today Food Information Updated Successfully",
    data: result,
  });
};

const deleteFromDB = async (req: Request, res: Response) => {
  const result = await ExtraTodayFoodService.deleteFromDB(req.params.id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Extra Today Food Information Deleted Successfully",
    data: result,
  });
};

export const ExtraTodayFoodController = {
  getAllExtraTodayFood,
  getSingleExtraTodayFood,
  insertIntoDB,
  updateIntoDB,
  deleteFromDB,
};
