import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { body } from "express-validator";
import db from "../models";
import generateToken from "../config/token.generate";
type UserAttribute = {
  id: number;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
};
export const registerValidator = () => {
  return [
    body("email", "Email must be in correct form").isEmail(),
    body("password", "password contain atleast 6 character").isLength({
      min: 6,
    }),
  ];
};

const saltround = 10;

const userController = () => {
  const register = async (req: Request, res: Response): Promise<void> => {
    const existingUser = await db.User.findOne({
      where: { email: req.body.email },
    });

    if (existingUser) {
      res.status(409).json({ message: "User Email Already Exists" });
    } else {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, async (err, hash) => {
          if (err) {
            res.status(500).json({ message: "Error hashing password" });
            return;
          }

          try {
            const newUser = await db.User.create({
              email: req.body.email,
              password: hash,
            });
            res.status(201).json({
              message: "User created Successfully",
              user: newUser,
            });
          } catch (error) {
            res.status(500).json({ message: "Error creating user" });
          }
        });
      });
    }
  };

  const login = (req: Request, res: Response) => {
    db.User.findOne({ where: { email: req.body.email } }).then(
      (user: UserAttribute) => {
        if (user === null) {
          res.status(401).json({
            message: "Invalid Credentials!",
          });
        } else {
          bcrypt.compare(
            req.body.password,
            user.password,
            (err: any, result: any) => {
              if (err) {
                res.status(500).send({
                  message: "failed",
                  data: err,
                });
              }

              if (result) {
                res.status(200).send({
                  token: generateToken(req.body.email),
                  emali: user.email,
                  id: user.id,
                });
              } else {
                res.status(500).json({
                  message: "Invalid Credential",
                });
              }
            }
          );
        }
      }
    );
  };

  const getUserList = (req: Request, res: Response) => {
    db.User.findAll().then((result: UserAttribute) => {
      console.log(result);
      res.status(200).json({
        data: result,
      });
    });
  };

  const findUserByEmail = async (req: Request, res: Response) => {
    const { email } = req.params;
    try {
      const user = await db.User.findOne({ where: { email } });
      if (user) {
        res.status(200).json({ user });
      } else {
        res.status(404).json({ message: "User Not Found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server error" });
    }
  };

  return {
    getUserList,
    register,
    login,
    findUserByEmail,
  };
};

export default userController;
