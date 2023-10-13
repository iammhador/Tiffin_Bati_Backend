import { prisma } from "../../../shared/prisma";
import { ISuperAdminData } from "./superAdmin.constance";

const getAllSuperAdmin = async () => {
  const result = await prisma.superAdmin.findFirst();
  return result;
};

const getSingleSuperAdmin = async (id: string) => {
  const result = await prisma.superAdmin.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const insertIntoDB = async (
  data: ISuperAdminData
): Promise<ISuperAdminData> => {
  const result = await prisma.superAdmin.create({ data });
  return result;
};

const updateIntoDB = async (
  id: string,
  data: any
): Promise<Partial<ISuperAdminData>> => {
  const result = await prisma.superAdmin.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

const deleteFromDB = async (id: string) => {
  const result = await prisma.superAdmin.delete({
    where: {
      id,
    },
  });
  return result;
};

export const SuperAdminService = {
  getAllSuperAdmin,
  getSingleSuperAdmin,
  insertIntoDB,
  updateIntoDB,
  deleteFromDB,
};
