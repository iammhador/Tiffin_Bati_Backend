import { Request, Response } from "express";
import { SendResponse } from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { FeedbackService } from "./feedback.service";

const getAllFeedback = async (req: Request, res: Response) => {
  const result = await FeedbackService.getAllFeedback();
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All Feedback Data Fetched Successfully",
    data: result,
  });
};
const getSingleFeedback = async (req: Request, res: Response) => {
  const result = await FeedbackService.getSingleFeedback(req.params.id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Feedback Fetched Successfully",
    data: result,
  });
};

const insertIntoDB = async (req: Request, res: Response) => {
  const result = await FeedbackService.insertIntoDB(req.body);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "New Feedback Created Successfully",
    data: result,
  });
};

const updateIntoDB = async (req: Request, res: Response) => {
  const result = await FeedbackService.updateIntoDB(req.params.id, req.body);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Feedback Information Updated Successfully",
    data: result,
  });
};

const deleteFromDB = async (req: Request, res: Response) => {
  const result = await FeedbackService.deleteFromDB(req.params.id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Feedback Information Deleted Successfully",
    data: result,
  });
};

export const FeedbackController = {
  getAllFeedback,
  getSingleFeedback,
  insertIntoDB,
  updateIntoDB,
  deleteFromDB,
};
