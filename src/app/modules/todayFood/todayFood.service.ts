import { prisma } from "../../../shared/prisma";
import { ITodayFoodData } from "./todayFood.constance";

const getAllTodayFood = async () => {
  const result = await prisma.todayFood.findFirst();
  return result;
};

const getSingleTodayFood = async (id: string) => {
  const result = await prisma.todayFood.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const insertIntoDB = async (data: ITodayFoodData): Promise<ITodayFoodData> => {
  const result = await prisma.todayFood.create({ data });
  return result;
};

const updateIntoDB = async (
  id: string,
  data: any
): Promise<Partial<ITodayFoodData>> => {
  const result = await prisma.todayFood.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

const deleteFromDB = async (id: string) => {
  const result = await prisma.todayFood.delete({
    where: {
      id,
    },
  });
  return result;
};

export const TodayFoodService = {
  getAllTodayFood,
  getSingleTodayFood,
  insertIntoDB,
  updateIntoDB,
  deleteFromDB,
};
