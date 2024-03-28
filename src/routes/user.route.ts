import { Router } from "express";
import userController,{ registerValidator } from "../controllers/user.controller";

const userRouter = Router();
userRouter.post("/create-user",registerValidator(),userController().register );
userRouter.post("/login",userController().login );
userRouter.get("/users",userController().getUserList)
userRouter.get("/user/:email",userController().findUserByEmail)
export default userRouter;