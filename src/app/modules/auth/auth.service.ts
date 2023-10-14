import { prisma } from "../../../shared/prisma";
import bcrypt from "bcrypt";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import config from "../../../config";

type LoginData = { username: string; password: string };

const loginUser = async (payload: LoginData) => {
  const { username, password } = payload;

  const isUserExist = await prisma.allUsers.findFirst({
    where: {
      username: username,
    },
  });

  if (!isUserExist) {
    return "User Not Found!";
  }

  const isPasswordMatch = await bcrypt.compare(password, isUserExist.password);

  if (!isPasswordMatch) {
    return "Password Not Matched!";
  }

  const { role, userId, username: name } = isUserExist;

  const accessToken = jwt.sign(
    { userId, name, role },
    config.jwt_secret as Secret,
    {
      expiresIn: config.jwt_expires as string,
    }
  );

  const refreshToken = jwt.sign(
    { userId, name, role },
    config.jwt_secret as Secret,
    {
      expiresIn: config.jwt_expires as string,
    }
  );

  return {
    accessToken,
    refreshToken,
  };
};

const refreshToken = async (token: string) => {
  try {
    const verifiedToken = jwt.verify(
      token,
      config.jwt_secret as Secret
    ) as JwtPayload;

    const { userId, role, name } = verifiedToken;

    const newAccessToken = jwt.sign(
      { userId, name, role },
      config.jwt_secret as string,
      {
        expiresIn: config.jwt_expires as string,
      }
    );

    return {
      accessToken: newAccessToken,
    };
  } catch (error) {
    return "Invalid Token";
  }
};

export const AuthService = {
  loginUser,
  refreshToken,
};
