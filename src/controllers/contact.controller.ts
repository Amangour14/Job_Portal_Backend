import { body } from "express-validator";
import db from "../models";
import { Request, Response } from "express";

interface ContactAttribute {
  name: string;
  email: string;
  message: string;
}

export const contactValidator = () => {
  return [
    body("name").isLength({ min: 2 }),
    body("email", "Email must be in correct form").isEmail(),
    body("message", "must not be empty"),
  ];
};

const contactController = () => {
  const postContact = async ( req: Request, res: Response) => {
    try {
      const newContact = await db.Contact.create({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
      });
       res.status(201).json({
        message: "Query Submitted Successfully",
        contact: newContact,
      });
    } catch (error:any) {
       res.status(500).json({ 
        message: "Something went wrong with contact form",
        error:error.message

     });
    }
  };

  return {
    postContact,
  };
};

export default contactController;
