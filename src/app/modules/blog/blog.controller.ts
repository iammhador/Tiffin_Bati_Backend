import { Request, Response } from "express";
import { SendResponse } from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { BlogService } from "./blog.service";

const getAllBlog = async (req: Request, res: Response) => {
  const result = await BlogService.getAllBlog();
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All Blog Data Fetched Successfully",
    data: result,
  });
};
const getSingleBlog = async (req: Request, res: Response) => {
  const result = await BlogService.getSingleBlog(req.params.id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Blog Fetched Successfully",
    data: result,
  });
};

const insertIntoDB = async (req: Request, res: Response) => {
  const result = await BlogService.insertIntoDB(req.body);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "New Blog Created Successfully",
    data: result,
  });
};

const updateIntoDB = async (req: Request, res: Response) => {
  const result = await BlogService.updateIntoDB(req.params.id, req.body);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "New Blog Information Updated Successfully",
    data: result,
  });
};

const deleteFromDB = async (req: Request, res: Response) => {
  const result = await BlogService.deleteFromDB(req.params.id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog Information Deleted Successfully",
    data: result,
  });
};

export const BlogController = {
  getAllBlog,
  getSingleBlog,
  insertIntoDB,
  updateIntoDB,
  deleteFromDB,
};
