import { Request, Response } from "express";
import { SendResponse } from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { PriceAndPlanService } from "./priceAndPlan.service";

const getAllPriceAndPlan = async (req: Request, res: Response) => {
  const result = await PriceAndPlanService.getAllPriceAndPlan();
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All Price And Plan Data Fetched Successfully",
    data: result,
  });
};
const getSinglePriceAndPlan = async (req: Request, res: Response) => {
  const result = await PriceAndPlanService.getSinglePriceAndPlan(req.params.id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Price And Plan Data Fetched Successfully",
    data: result,
  });
};

const insertIntoDB = async (req: Request, res: Response) => {
  const result = await PriceAndPlanService.insertIntoDB(req.body);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "New Price And Plan Created Successfully",
    data: result,
  });
};

const updateIntoDB = async (req: Request, res: Response) => {
  const result = await PriceAndPlanService.updateIntoDB(
    req.params.id,
    req.body
  );
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Price And Plan Information Updated Successfully",
    data: result,
  });
};

const deleteFromDB = async (req: Request, res: Response) => {
  const result = await PriceAndPlanService.deleteFromDB(req.params.id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Price And Plan Information Deleted Successfully",
    data: result,
  });
};

export const PriceAndPlanController = {
  getAllPriceAndPlan,
  getSinglePriceAndPlan,
  insertIntoDB,
  updateIntoDB,
  deleteFromDB,
};
