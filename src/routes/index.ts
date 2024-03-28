import { Router } from "express";
import userRouter from "./user.route";
import contactRouter from "./contact.route";
import JobRouter from "./job.route";
import jobApp from "./jobApp.route";
const routes=Router();

routes.use("/auth",userRouter)
routes.use("/",contactRouter)
routes.use("/",JobRouter)
routes.use("/",jobApp)
export default routes;