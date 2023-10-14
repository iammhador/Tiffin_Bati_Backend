import { prisma } from "../../../shared/prisma";
import { IAdminData } from "./admin.constance";
import config from "../../../config";
import bcrypt from "bcrypt";

const getAllAdmins = async () => {
  const result = await prisma.admin.findMany();
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
  const { password, ...others } = data;
  const hashedPassword = await bcrypt.hash(
    password,
    Number(config.bcrypt_salt_rounds)
  );

  const result = await prisma.admin.create({
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
): Promise<Partial<IAdminData>> => {
  const { password, ...others } = data;

  if (password) {
    const hashedPassword = await bcrypt.hash(
      password,
      Number(config.bcrypt_salt_rounds)
    );
    const result = await prisma.admin.update({
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
    const result = await prisma.admin.update({
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
  const result = await prisma.admin.delete({
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

export const AdminService = {
  getAllAdmins,
  getSingleAdmins,
  insertIntoDB,
  updateIntoDB,
  deleteFromDB,
};
