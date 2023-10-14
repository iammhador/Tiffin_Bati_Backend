import { prisma } from "../../../shared/prisma";
import { IUsersData } from "./users.constance";
import config from "../../../config";
import bcrypt from "bcrypt";

const getAllUsers = async () => {
  const result = await prisma.user.findMany();
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
  const { password, ...others } = data;
  const hashedPassword = await bcrypt.hash(
    password,
    Number(config.bcrypt_salt_rounds)
  );

  const result = await prisma.user.create({
    data: { ...others, password: hashedPassword },
  });

  if (!!result) {
    await prisma.allUsers.create({
      data: {
        userId: result.id,
        username: result.username,
        email: result.email,
        password: hashedPassword,
        role: result.role,
      },
    });
  }

  return result;
};

const updateIntoDB = async (
  id: string,
  data: any
): Promise<Partial<IUsersData>> => {
  const { password, ...others } = data;

  if (password) {
    const hashedPassword = await bcrypt.hash(
      password,
      Number(config.bcrypt_salt_rounds)
    );
    const result = await prisma.user.update({
      where: {
        id,
      },
      data: { ...others, password: hashedPassword },
    });

    if (!!result) {
      await prisma.allUsers.updateMany({
        where: {
          userId: result.id,
        },
        data: {
          userId: result.id,
          username: result.username,
          email: result.email,
          password: hashedPassword,
          role: result.role,
        },
      });
    }

    return result;
  } else {
    const result = await prisma.user.update({
      where: {
        id,
      },
      data: others,
    });

    if (!!result) {
      await prisma.allUsers.updateMany({
        where: {
          userId: result.id,
        },
        data: {
          userId: result.id,
          username: result.username,
          email: result.email,
          password: result.password,
          role: result.role,
        },
      });
    }

    return result;
  }
};

const deleteFromDB = async (id: string) => {
  const result = await prisma.user.delete({
    where: {
      id,
    },
  });

  if (!!result) {
    await prisma.allUsers.deleteMany({
      where: {
        userId: result.id,
      },
    });
  }
  return result;
};

export const UsersService = {
  getAllUsers,
  getSingleUser,
  insertIntoDB,
  updateIntoDB,
  deleteFromDB,
};
