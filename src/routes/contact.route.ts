import { Router } from "express";
import contactController,{contactValidator} from "../controllers/contact.controller";
import authenticate from "../middleware/authCheck";

const contactRouter=Router();

contactRouter.post("/postContact",authenticate,contactController().postContact)

export default contactRouter;