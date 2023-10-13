import { Request, Response } from "express";
import { SendResponse } from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { ReviewAndRatingService } from "./reviewAndRating.service";

const getAllReviewAndRating = async (req: Request, res: Response) => {
  const result = await ReviewAndRatingService.getAllReviewAndRating();
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All Review And Rating Data Fetched Successfully",
    data: result,
  });
};
const getSingleReviewAndRating = async (req: Request, res: Response) => {
  const result = await ReviewAndRatingService.getSingleReviewAndRating(
    req.params.id
  );
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Review And Rating  Fetched Successfully",
    data: result,
  });
};

const insertIntoDB = async (req: Request, res: Response) => {
  const result = await ReviewAndRatingService.insertIntoDB(req.body);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "New Review And Rating Created Successfully",
    data: result,
  });
};

const updateIntoDB = async (req: Request, res: Response) => {
  const result = await ReviewAndRatingService.updateIntoDB(
    req.params.id,
    req.body
  );
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Review And Rating Information Updated Successfully",
    data: result,
  });
};

const deleteFromDB = async (req: Request, res: Response) => {
  const result = await ReviewAndRatingService.deleteFromDB(req.params.id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Review And Rating Information Deleted Successfully",
    data: result,
  });
};

export const ReviewAndRatingController = {
  getAllReviewAndRating,
  getSingleReviewAndRating,
  insertIntoDB,
  updateIntoDB,
  deleteFromDB,
};
