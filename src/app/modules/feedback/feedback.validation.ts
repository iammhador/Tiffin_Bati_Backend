import { z } from "zod";

const create = z.object({
  body: z.object({
    subject: z.string({
      required_error: "Subject is required",
    }),
    message: z.string({ required_error: "Message is required" }),
    userId: z.string({ required_error: "User ID is required" }),
  }),
});

const update = z.object({
  body: z.object({
    subject: z
      .string({
        required_error: "Review is required",
      })
      .optional(),
    message: z.string({ required_error: "Message is required" }).optional(),
    userId: z.string({ required_error: "User ID is required" }).optional(),
  }),
});
export const FeedbackValidation = {
  create,
  update,
};
