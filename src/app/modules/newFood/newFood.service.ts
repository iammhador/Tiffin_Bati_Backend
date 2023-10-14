import { prisma } from "../../../shared/prisma";
import { INewFoodData } from "./newFood.constance";

const getAllNewFoods = async () => {
  const result = await prisma.newFood.findMany();
  return result;
};

const getSingleFood = async (id: string) => {
  const result = await prisma.newFood.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const insertIntoDB = async (data: INewFoodData): Promise<INewFoodData> => {
  const result = await prisma.newFood.create({ data });
  return result;
};

const updateIntoDB = async (
  id: string,
  data: any
): Promise<Partial<INewFoodData>> => {
  const result = await prisma.newFood.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

const deleteFromDB = async (id: string) => {
  const result = await prisma.newFood.delete({
    where: {
      id,
    },
  });
  return result;
};

export const MenuService = {
  getAllNewFoods,
  getSingleFood,
  insertIntoDB,
  updateIntoDB,
  deleteFromDB,
};
