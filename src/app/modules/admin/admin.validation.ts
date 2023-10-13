import { z } from "zod";

const create = z.object({
  body: z.object({
    email: z.string({ required_error: "Email is required." }),
    username: z.string({ required_error: "Username is required." }),
    password: z.string({ required_error: "Password is required." }),
    gender: z.string({ required_error: "Gender is required." }),
    dateOfBirth: z.string({ required_error: "Date of Birth is required." }),
    contactNo: z.string({ required_error: "Contact No is required." }),
    address: z.string({ required_error: "Address is required." }),
    profileImage: z
      .string({ required_error: "Profile Image is required." })
      .optional(),
  }),
});

const update = z.object({
  body: z.object({
    email: z.string({ required_error: "Email is required." }).optional(),
    username: z.string({ required_error: "Username is required." }).optional(),
    password: z.string({ required_error: "Password is required." }).optional(),
    gender: z.string({ required_error: "Gender is required." }).optional(),
    dateOfBirth: z
      .string({ required_error: "Date of Birth is required." })
      .optional(),
    contactNo: z
      .string({ required_error: "Contact No is required." })
      .optional(),
    address: z.string({ required_error: "Address is required." }).optional(),
    profileImage: z
      .string({ required_error: "Profile Image is required." })
      .optional(),
  }),
});

export const AdminValidation = {
  create,
  update,
};
