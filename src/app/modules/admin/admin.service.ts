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

const updateIntoDB = async (id: string, data: any) => {
  let result = null;
  const findAdmin = await prisma.admin.findUnique({
    where: {
      id,
    },
  });

  if (findAdmin && data?.role === "user") {
    await prisma.admin.delete({
      where: {
        id,
      },
    });

    const admin = await prisma.allUsers.findFirst({
      where: {
        userId: id,
      },
    });

    if (admin) {
      const adminId = admin.id;
      await prisma.allUsers.delete({
        where: {
          id: adminId,
        },
      });
    }

    await prisma.user.create({
      data: {
        username: findAdmin.username,
        email: findAdmin.email,
        password: findAdmin?.password,
        role: "user",
        address: "",
        contactNo: "",
        dateOfBirth: "",
        gender: "",
        profileImage: "",
      },
    });

    result = await prisma.allUsers.create({
      data: {
        userId: findAdmin.id,
        username: findAdmin.username,
        email: findAdmin.email,
        password: findAdmin?.password,
        role: "user",
      },
    });
  } else {
    const result = await prisma.admin.update({
      where: {
        id,
      },
      data,
    });
    await prisma.allUsers.updateMany({
      where: {
        userId: result.id,
      },
      data: {
        userId: result.id,
        username: result.username,
        email: result.email,
        role: result.role,
      },
    });
  }

  return result;
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
