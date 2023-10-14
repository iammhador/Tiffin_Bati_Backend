import { prisma } from "../../../shared/prisma";
import { IPriceAndPlanData } from "./priceAndPlan.constance";

const getAllPriceAndPlan = async () => {
  const result = await prisma.priceAndPlan.findMany();
  return result;
};

const getSinglePriceAndPlan = async (id: string) => {
  const result = await prisma.priceAndPlan.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const insertIntoDB = async (
  data: IPriceAndPlanData
): Promise<IPriceAndPlanData> => {
  const result = await prisma.priceAndPlan.create({ data });
  return result;
};

const updateIntoDB = async (
  id: string,
  data: any
): Promise<Partial<IPriceAndPlanData>> => {
  const result = await prisma.priceAndPlan.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

const deleteFromDB = async (id: string) => {
  const result = await prisma.priceAndPlan.delete({
    where: {
      id,
    },
  });
  return result;
};

export const PriceAndPlanService = {
  getAllPriceAndPlan,
  getSinglePriceAndPlan,
  insertIntoDB,
  updateIntoDB,
  deleteFromDB,
};
