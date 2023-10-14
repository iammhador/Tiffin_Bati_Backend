import { prisma } from "../../../shared/prisma";
import { IReviewAndRatingData } from "./reviewAndRating.constance";

const getAllReviewAndRating = async () => {
  const result = await prisma.reviewAndRating.findMany();
  return result;
};

const getSingleReviewAndRating = async (id: string) => {
  const result = await prisma.reviewAndRating.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const insertIntoDB = async (
  data: IReviewAndRatingData
): Promise<IReviewAndRatingData> => {
  const result = await prisma.reviewAndRating.create({ data });
  return result;
};

const updateIntoDB = async (
  id: string,
  data: any
): Promise<Partial<IReviewAndRatingData>> => {
  const result = await prisma.reviewAndRating.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

const deleteFromDB = async (id: string) => {
  const result = await prisma.reviewAndRating.delete({
    where: {
      id,
    },
  });
  return result;
};

export const ReviewAndRatingService = {
  getAllReviewAndRating,
  getSingleReviewAndRating,
  insertIntoDB,
  updateIntoDB,
  deleteFromDB,
};
