import { prisma } from "../../../shared/prisma";
import { IFeedbackData } from "./feedback.constance";

const getAllFeedback = async () => {
  const result = await prisma.feedback.findMany({
    include: {
      user: true,
    },
  });
  return result;
};

const getSingleFeedback = async (id: string) => {
  const result = await prisma.feedback.findUnique({
    where: {
      id,
    },
    include: {
      user: true,
    },
  });
  return result;
};

const insertIntoDB = async (data: IFeedbackData): Promise<IFeedbackData> => {
  const result = await prisma.feedback.create({ data });
  return result;
};

const updateIntoDB = async (
  id: string,
  data: any
): Promise<Partial<IFeedbackData>> => {
  const result = await prisma.feedback.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

const deleteFromDB = async (id: string) => {
  const result = await prisma.feedback.delete({
    where: {
      id,
    },
  });
  return result;
};

export const FeedbackService = {
  getAllFeedback,
  getSingleFeedback,
  insertIntoDB,
  updateIntoDB,
  deleteFromDB,
};
