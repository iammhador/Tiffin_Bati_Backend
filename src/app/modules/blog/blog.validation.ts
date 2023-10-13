import { z } from "zod";

const create = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
    }),
    description: z.string({ required_error: "Description is required" }),
    adminId: z.string({ required_error: "Admin ID is required" }),
  }),
});

const update = z.object({
  body: z.object({
    title: z
      .string({
        required_error: "Title is required",
      })
      .optional(),
    description: z
      .string({ required_error: "Description is required" })
      .optional(),
    adminId: z.string({ required_error: "Admin ID is required" }).optional(),
  }),
});

export const BlogValidation = {
  create,
  update,
};
