import { prisma } from "../../../shared/prisma";
import { IFAQData } from "./faq.constance";

const getAllFAQ = async () => {
  const result = await prisma.fAQ.findMany();
  return result;
};

const getSingleFAQ = async (id: string) => {
  const result = await prisma.fAQ.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const insertIntoDB = async (data: IFAQData): Promise<IFAQData> => {
  const result = await prisma.fAQ.create({ data });
  return result;
};

const updateIntoDB = async (
  id: string,
  data: any
): Promise<Partial<IFAQData>> => {
  const result = await prisma.fAQ.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

const deleteFromDB = async (id: string) => {
  const result = await prisma.fAQ.delete({
    where: {
      id,
    },
  });
  return result;
};

export const FAQService = {
  getAllFAQ,
  getSingleFAQ,
  insertIntoDB,
  updateIntoDB,
  deleteFromDB,
};
