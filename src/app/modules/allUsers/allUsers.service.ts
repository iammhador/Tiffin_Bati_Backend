import { Prisma } from "@prisma/client";
import { prisma } from "../../../shared/prisma";

const getAllUsers = async () => {
  const result = await prisma.allUsers.findMany({});
  return result;
};

const getSingleUserFromUsers = async (id: string) => {
  const result = await prisma.allUsers.findFirst({
    where: {
      userId: id,
    } as Prisma.AllUsersWhereUniqueInput,
  });
  return result;
};

const deleteSingleUserFromAllUsers = async (id: string) => {
  const result = await prisma.allUsers.delete({
    where: {
      id,
    },
  });
  return result;
};

export const AllUsersService = {
  getAllUsers,
  getSingleUserFromUsers,
  deleteSingleUserFromAllUsers,
};
