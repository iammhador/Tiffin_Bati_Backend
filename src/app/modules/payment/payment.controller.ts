import { Request, Response } from "express";
import httpStatus from "http-status";
import { SendResponse } from "../../../shared/sendResponse";
import { PaymentsService } from "./payment.service";

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
  paymentIntent,
  createPayment,
};
