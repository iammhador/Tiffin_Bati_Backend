import { prisma } from "../../../shared/prisma";
import { ISuperAdminData } from "./superAdmin.constance";
import config from "../../../config";
import bcrypt from "bcrypt";

const getAllSuperAdmin = async () => {
  const result = await prisma.superAdmin.findMany();
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
  const { password, ...others } = data;
  const hashedPassword = await bcrypt.hash(
    password,
    Number(config.bcrypt_salt_rounds)
  );

  const result = await prisma.superAdmin.create({
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
): Promise<Partial<ISuperAdminData>> => {
  const { password, ...others } = data;

  if (password) {
    const hashedPassword = await bcrypt.hash(
      password,
      Number(config.bcrypt_salt_rounds)
    );

    const result = await prisma.superAdmin.update({
      where: {
        id,
      },
      data: { ...others, password: hashedPassword },
    });

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

    return result;
  } else {
    const result = await prisma.superAdmin.update({
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
  const result = await prisma.superAdmin.delete({
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

export const SuperAdminService = {
  getAllSuperAdmin,
  getSingleSuperAdmin,
  insertIntoDB,
  updateIntoDB,
  deleteFromDB,
};
