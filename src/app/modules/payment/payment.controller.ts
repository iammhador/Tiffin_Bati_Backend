import { Request, Response } from "express";
import httpStatus from "http-status";
import { SendResponse } from "../../../shared/sendResponse";
import { PaymentsService } from "./payment.service";

const getAllPayments = async (req: Request, res: Response) => {
  const result = await PaymentsService.getAllPayments();
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All Payments Fetched Successfully",
    data: result,
  });
};

const getSinglePayments = async (req: Request, res: Response) => {
  const result = await PaymentsService.getSinglePayments(req.params.id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Payments Fetched Successfully",
    data: result,
  });
};

const paymentIntent = async (req: Request, res: Response) => {
  const result = await PaymentsService.paymentIntent(req.body);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "New payment intent",
    data: result?.clientSecret,
  });
};

const createPayment = async (req: Request, res: Response) => {
  const result = await PaymentsService.createPayment(req.body);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "New payment added Successfully",
    data: result,
  });
};

export const PaymentsController = {
  getAllPayments,
  getSinglePayments,
  paymentIntent,
  createPayment,
};
