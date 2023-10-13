import { prisma } from "../../../shared/prisma";

const insertIntoDB = async (data: any) => {
  const result = await prisma.superAdmin.create({data});
  return result;
};

export const SuperAdminService = {
  insertIntoDB,
};
