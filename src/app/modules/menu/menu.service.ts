import { prisma } from "../../../shared/prisma";
import { IMenuData } from "./menu.constance";

const getAllMenus = async () => {
  const result = await prisma.menu.findFirst();
  return result;
};

const getSingleMenu = async (id: string) => {
  const result = await prisma.menu.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const insertIntoDB = async (data: IMenuData): Promise<IMenuData> => {
  const result = await prisma.menu.create({ data });
  return result;
};

const updateIntoDB = async (
  id: string,
  data: any
): Promise<Partial<IMenuData>> => {
  const result = await prisma.menu.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

const deleteFromDB = async (id: string) => {
  const result = await prisma.menu.delete({
    where: {
      id,
    },
  });
  return result;
};

export const MenuService = {
  getAllMenus,
  getSingleMenu,
  insertIntoDB,
  updateIntoDB,
  deleteFromDB,
};
