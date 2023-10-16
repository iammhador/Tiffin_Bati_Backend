import { prisma } from "../../../shared/prisma";
import { IMenuData } from "./menu.constance";

const getAllMenus = async (
  page: any,
  pageSize: any,
  searchTerm: any,
  sortBy: any,
  sortOrder: any
) => {
  const parsedPage = parseInt(page, 10);
  const offset = parsedPage * pageSize;
  const parsedPageSize = parseInt(pageSize, 10);

  let where = {};
  if (searchTerm) {
    where = {
      OR: [
        {
          title: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
        {
          category: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
      ],
    };
  }

  let orderBy = {};
  if (sortBy && sortOrder) {
    orderBy = {
      [sortBy]: sortOrder.toLowerCase() === "asc" ? "asc" : "desc",
    };
  }

  const [data, total] = await Promise.all([
    prisma.menu.findMany({
      where,
      orderBy,
      skip: offset,
      take: parsedPageSize,
    }),
    prisma.menu.count({
      where,
    }),
  ]);

  return {
    meta: {
      total,
      page: parsedPage,
      limit: parsedPageSize,
    },
    data,
  };
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
