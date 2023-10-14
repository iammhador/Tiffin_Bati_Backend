import { prisma } from "../../../shared/prisma";

const getAllUsers = async () => {
  const result = await prisma.allUsers.findMany({});
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
  deleteSingleUserFromAllUsers,
};
