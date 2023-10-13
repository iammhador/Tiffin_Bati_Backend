import { prisma } from "../../../shared/prisma";
import { IUsersData } from "./users.constance";

const getAllUsers = async () => {
  const result = await prisma.user.findFirst();
  return result;
};

const getSingleUser = async (id: string) => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const insertIntoDB = async (data: IUsersData): Promise<IUsersData> => {
  const result = await prisma.user.create({ data });
  return result;
};

const updateIntoDB = async (
  id: string,
  data: any
): Promise<Partial<IUsersData>> => {
  const result = await prisma.user.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

const deleteFromDB = async (id: string) => {
  const result = await prisma.user.delete({
    where: {
      id,
    },
  });
  return result;
};

export const UsersService = {
  getAllUsers,
  getSingleUser,
  insertIntoDB,
  updateIntoDB,
  deleteFromDB,
};
