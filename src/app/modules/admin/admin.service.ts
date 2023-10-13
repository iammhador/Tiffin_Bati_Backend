import { prisma } from "../../../shared/prisma";
import { IAdminData } from "./admin.constance";

const getAllAdmins = async () => {
  const result = await prisma.admin.findFirst();
  return result;
};

const getSingleAdmins = async (id: string) => {
  const result = await prisma.admin.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const insertIntoDB = async (data: IAdminData): Promise<IAdminData> => {
  const result = await prisma.admin.create({ data });
  return result;
};

const updateIntoDB = async (
  id: string,
  data: any
): Promise<Partial<IAdminData>> => {
  const result = await prisma.admin.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

const deleteFromDB = async (id: string) => {
  const result = await prisma.admin.delete({
    where: {
      id,
    },
  });
  return result;
};

export const AdminService = {
  getAllAdmins,
  getSingleAdmins,
  insertIntoDB,
  updateIntoDB,
  deleteFromDB,
};
