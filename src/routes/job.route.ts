import { Router } from "express";
import JobController from "../controllers/job.controller";
const JobRouter=Router();

JobRouter.post("/Job",JobController().postJob);
JobRouter.get("/allJobs",JobController().getJobs);
JobRouter.get("/job/:jobId",JobController().getJobById)

export default JobRouter;