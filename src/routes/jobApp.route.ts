import { Router } from "express";
import JobApplication from "../controllers/jobApp.controller";
const jobApp=Router();

jobApp.post("/apply",JobApplication().applyJob)

export default jobApp;