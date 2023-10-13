import { Request, Response } from "express";
import { SendResponse } from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { FAQService } from "./faq.service";

const getAllFAQ = async (req: Request, res: Response) => {
  const result = await FAQService.getAllFAQ();
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All FAQ Data Fetched Successfully",
    data: result,
  });
};
const getSingleFAQ = async (req: Request, res: Response) => {
  const result = await FAQService.getSingleFAQ(req.params.id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single FAQ Fetched Successfully",
    data: result,
  });
};

const insertIntoDB = async (req: Request, res: Response) => {
  const result = await FAQService.insertIntoDB(req.body);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "New FAQ Created Successfully",
    data: result,
  });
};

const updateIntoDB = async (req: Request, res: Response) => {
  const result = await FAQService.updateIntoDB(req.params.id, req.body);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "FAQ Information Updated Successfully",
    data: result,
  });
};

const deleteFromDB = async (req: Request, res: Response) => {
  const result = await FAQService.deleteFromDB(req.params.id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "FAQ Information Deleted Successfully",
    data: result,
  });
};

export const FAQController = {
  getAllFAQ,
  getSingleFAQ,
  insertIntoDB,
  updateIntoDB,
  deleteFromDB,
};
