import { Request, Response, NextFunction } from "express";
import Jwt from "jsonwebtoken";

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    res.send({
      success: false,
      statusCode: 401,
      message: "no token found or invalid token",
    });
  } else {
    const tokenSecret = "secret";
    Jwt.verify(token.split(" ")[1], tokenSecret, (err: any, values: any) => {
      if (err) {
        res.send({
          success: false,
          statusCode: 401,
          message: "invalid Token!",
        });
      } else {
        (<any>req).user = values.data;
        console.log((<any>req).user);
        next();
      }
    });
  }
};

export default authenticate;
