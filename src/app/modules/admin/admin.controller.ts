import { Request, Response } from "express";
import { SendResponse } from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { AdminService } from "./admin.service";

const getAllAdmins = async (req: Request, res: Response) => {
  const result = await AdminService.getAllAdmins();
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All Admin Data Fetched Successfully",
    data: result,
  });
};
const getSingleAdmins = async (req: Request, res: Response) => {
  const result = await AdminService.getSingleAdmins(req.params.id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Admin Data Fetched Successfully",
    data: result,
  });
};

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await AdminService.insertIntoDB(req.body);
    SendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "New Admin Created Successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateIntoDB = async (req: Request, res: Response) => {
  const result = await AdminService.updateIntoDB(req.params.id, req.body);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin Information Updated Successfully",
    data: result,
  });
};

const deleteFromDB = async (req: Request, res: Response) => {
  const result = await AdminService.deleteFromDB(req.params.id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin Information Deleted Successfully",
    data: result,
  });
};

export const AdminController = {
  getAllAdmins,
  getSingleAdmins,
  insertIntoDB,
  updateIntoDB,
  deleteFromDB,
};
