import { Request, Response } from "express";
import { UsersService } from "./users.service";
import { SendResponse } from "../../../shared/sendResponse";
import httpStatus from "http-status";

const getAllUsers = async (req: Request, res: Response) => {
  const result = await UsersService.getAllUsers();
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Users Data Fetched Successfully",
    data: result,
  });
};
const getSingleUsers = async (req: Request, res: Response) => {
  const result = await UsersService.getSingleUser(req.params.id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User Data Fetched Successfully",
    data: result,
  });
};

const insertIntoDB = async (req: Request, res: Response) => {
  const result = await UsersService.insertIntoDB(req.body);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User Created Successfully",
    data: result,
  });
};

const updateIntoDB = async (req: Request, res: Response) => {
  const result = await UsersService.updateIntoDB(req.params.id, req.body);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User Information Updated Successfully",
    data: result,
  });
};

const deleteFromDB = async (req: Request, res: Response) => {
  const result = await UsersService.deleteFromDB(req.params.id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User Information Deleted Successfully",
    data: result,
  });
};

export const UsersController = {
  getAllUsers,
  getSingleUsers,
  insertIntoDB,
  updateIntoDB,
  deleteFromDB,
};
