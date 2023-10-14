import { prisma } from "../../../shared/prisma";
import { IBlogData } from "./blog.constance";

const getAllBlog = async () => {
  const result = await prisma.blog.findMany();
  return result;
};

const getSingleBlog = async (id: string) => {
  const result = await prisma.blog.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const insertIntoDB = async (data: IBlogData): Promise<IBlogData> => {
  const result = await prisma.blog.create({ data });
  return result;
};

const updateIntoDB = async (
  id: string,
  data: any
): Promise<Partial<IBlogData>> => {
  const result = await prisma.blog.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

const deleteFromDB = async (id: string) => {
  const result = await prisma.blog.delete({
    where: {
      id,
    },
  });
  return result;
};

export const BlogService = {
  getAllBlog,
  getSingleBlog,
  insertIntoDB,
  updateIntoDB,
  deleteFromDB,
};
