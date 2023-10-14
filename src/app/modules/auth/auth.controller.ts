import httpStatus from "http-status";
import { SendResponse } from "../../../shared/sendResponse";
import { Request, Response } from "express";
import { AuthService } from "./auth.service";
import config from "../../../config";

const LoginUsers = async (req: Request, res: Response) => {
  const { ...loginData } = req.body;
  const result = await AuthService.loginUser(loginData);

  if (typeof result === "string") {
    SendResponse(res, {
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      message: result,
      data: null,
    });
  } else {
    const { refreshToken } = result;

    const cookieOptions = {
      secure: config.env === "production",
      httpOnly: true,
    };

    res.cookie("refreshToken", refreshToken, cookieOptions);

    SendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User Logged in successfully.",
      data: result,
    });
  }
};

const refreshToken = async (req: Request, res: Response) => {
  const { refreshToken } = req.cookies;

  const result = await AuthService.refreshToken(refreshToken);

  const cookieOptions = {
    secure: config.env === "production",
    httpOnly: true,
  };

  res.cookie("refreshToken", refreshToken, cookieOptions);

  SendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User logged in successfully !",
    data: result,
  });
};

export const AuthController = {
  LoginUsers,
  refreshToken,
};
