import { Request, Response } from "express";
import { SendResponse } from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { SubscriptionService } from "./subscription.service";

const getAllSubscription = async (req: Request, res: Response) => {
  const result = await SubscriptionService.getAllSubscription();
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All Subscription Data Fetched Successfully",
    data: result,
  });
};
const getSingleSubscription = async (req: Request, res: Response) => {
  const result = await SubscriptionService.getSingleSubscription(req.params.id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Subscription Data Fetched Successfully",
    data: result,
  });
};

const getSingleSubscriptionByUserId = async (req: Request, res: Response) => {
  const result = await SubscriptionService.getSingleSubscriptionByUserId(
    req.params.id
  );
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Subscription Data Fetched Successfully To Use User ID",
    data: result,
  });
};

const insertIntoDB = async (req: Request, res: Response) => {
  const result = await SubscriptionService.insertIntoDB(req.body);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "New Subscription Created Successfully",
    data: result,
  });
};

const updateIntoDB = async (req: Request, res: Response) => {
  const result = await SubscriptionService.updateIntoDB(
    req.params.id,
    req.body
  );
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Subscription Information Updated Successfully",
    data: result,
  });
};

const deleteFromDB = async (req: Request, res: Response) => {
  const result = await SubscriptionService.deleteFromDB(req.params.id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Subscription Information Deleted Successfully",
    data: result,
  });
};

export const subscriptionController = {
  getAllSubscription,
  getSingleSubscription,
  getSingleSubscriptionByUserId,
  insertIntoDB,
  updateIntoDB,
  deleteFromDB,
};
