import { z } from "zod";

const create = z.object({
  body: z.object({
    title: z.string({ required_error: "Title is required" }),
    category: z.string({ required_error: "Category is required" }),
    image: z.string({ required_error: "Image is required" }),
    adminId: z.string({ required_error: "Admin ID is required" }),
  }),
});

const update = z.object({
  body: z.object({
    title: z.string({ required_error: "Title is required" }).optional(),
    category: z.string({ required_error: "Category is required" }).optional(),
    image: z.string({ required_error: "Image is required" }).optional(),
    adminId: z.string({ required_error: "Admin ID is required" }).optional(),
  }),
});

export const NewFoodValidation = {
  create,
  update,
};
