import { Request, Response } from "express";
import { SendResponse } from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { AllUsersService } from "./allUsers.service";

const getAllUsers = async (req: Request, res: Response) => {
  const result = await AllUsersService.getAllUsers();
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All Users Data Fetched Successfully",
    data: result,
  });
};

const deleteSingleUserFromAllUsers = async (req: Request, res: Response) => {
  const result = await AllUsersService.deleteSingleUserFromAllUsers(
    req.params.id
  );
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single User Delete From All Users Successfully",
    data: result,
  });
};

export const AllUsersController = {
  getAllUsers,
  deleteSingleUserFromAllUsers,
};
