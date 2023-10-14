import { prisma } from "../../../shared/prisma";
import { ISubscriptionData } from "./subscription.constance";

const getAllSubscription = async () => {
  const result = await prisma.subscriptionModel.findMany();
  return result;
};

const getSingleSubscription = async (id: string) => {
  const result = await prisma.subscriptionModel.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const insertIntoDB = async (
  data: ISubscriptionData
): Promise<ISubscriptionData> => {
  const result = await prisma.subscriptionModel.create({ data });
  return result;
};

const updateIntoDB = async (
  id: string,
  data: any
): Promise<Partial<ISubscriptionData>> => {
  const result = await prisma.subscriptionModel.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

const deleteFromDB = async (id: string) => {
  const result = await prisma.subscriptionModel.delete({
    where: {
      id,
    },
  });
  return result;
};

export const SubscriptionService = {
  getAllSubscription,
  getSingleSubscription,
  insertIntoDB,
  updateIntoDB,
  deleteFromDB,
};
