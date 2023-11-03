import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import config from "../../config";

interface CustomRequest extends Request {
  user?: JwtPayload;
}

const auth =
  (...roles: string[]) =>
  (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        return res
          .status(httpStatus.UNAUTHORIZED)
          .send("You are not authorized");
      }

      let verifiedUser: JwtPayload | string = "";
      verifiedUser = jwt.verify(token, config.jwt_secret as Secret);

      if (typeof verifiedUser === "string") {
        return res
          .status(httpStatus.UNAUTHORIZED)
          .send("You are not authorized");
      }

      req.user = verifiedUser;
      if (roles.length && !roles.includes(verifiedUser.role as string)) {
        return res.status(httpStatus.FORBIDDEN).send("Forbidden");
      }
      next();
    } catch (error) {
      next(error);
    }
  };

export default auth;
