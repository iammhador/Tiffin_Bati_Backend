import { Request, Response } from "express";
import { SuperAdminService } from "./superAdmin.service";

const insertIntoDB = async (req: Request, res: Response) => {
  const result = await SuperAdminService.insertIntoDB(req.body);
  res.send(result);
};

export const SuperAdminController = {
  insertIntoDB,
};
