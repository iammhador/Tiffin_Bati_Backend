import { prisma } from "../../../shared/prisma";
import { IExtraTodayFoodData } from "./extraTodayFood.constance";
const app = require("express")();
const http = require("http").createServer(app);

const getAllExtraTodayFood = async () => {
  const result = await prisma.todayFoodExtra.findMany();
  return result;
};

const getSingleExtraTodayFood = async (id: string) => {
  const result = await prisma.todayFoodExtra.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const insertIntoDB = async (
  data: IExtraTodayFoodData
): Promise<IExtraTodayFoodData> => {
  const result = await prisma.todayFoodExtra.create({ data });
  return result;
};

const updateIntoDB = async (
  id: string,
  data: any
): Promise<Partial<IExtraTodayFoodData>> => {
  const result = await prisma.todayFoodExtra.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

const deleteFromDB = async (id: string) => {
  const result = await prisma.todayFoodExtra.delete({
    where: {
      id,
    },
  });
  return result;
};

export const ExtraTodayFoodService = {
  getAllExtraTodayFood,
  getSingleExtraTodayFood,
  insertIntoDB,
  updateIntoDB,
  deleteFromDB,
};
