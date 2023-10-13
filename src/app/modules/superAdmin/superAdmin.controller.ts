import { Request, Response } from "express";
import { SuperAdminService } from "./superAdmin.service";
import { SendResponse } from "../../../shared/sendResponse";
import httpStatus from "http-status";

const getAllSuperAdmin = async (req: Request, res: Response) => {
  const result = await SuperAdminService.getAllSuperAdmin();
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Super Admin Data Fetched Successfully",
    data: result,
  });
};
const getSingleSuperAdmin = async (req: Request, res: Response) => {
  const result = await SuperAdminService.getSingleSuperAdmin(req.params.id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Super Admin Data Fetched Successfully",
    data: result,
  });
};

const insertIntoDB = async (req: Request, res: Response) => {
  const result = await SuperAdminService.insertIntoDB(req.body);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "New Super Admin Created Successfully",
    data: result,
  });
};

const updateIntoDB = async (req: Request, res: Response) => {
  const result = await SuperAdminService.updateIntoDB(req.params.id, req.body);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Super Admin Information Updated Successfully",
    data: result,
  });
};

const deleteFromDB = async (req: Request, res: Response) => {
  const result = await SuperAdminService.deleteFromDB(req.params.id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Super Admin Information Deleted Successfully",
    data: result,
  });
};

export const SuperAdminController = {
  getAllSuperAdmin,
  getSingleSuperAdmin,
  insertIntoDB,
  updateIntoDB,
  deleteFromDB,
};
