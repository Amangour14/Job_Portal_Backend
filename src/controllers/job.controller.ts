import db from "../models";
import { Request, Response } from "express";
import { JobAttributes } from "../models/jobs";
const JobController=()=>{

    const postJob=async(req:Request,res:Response):Promise<void>=>{
        const Job={
            jobTitle:req.body.jobTitle,
            job_description:req.body.job_description,
            remote_or_onsite:req.body.remote_or_onsite,
            location:req.body.location,
            fulltime_or_Internship:req.body.fulltime_or_Internship,
            salary:req.body.salary,
            job_responsibility:req.body.job_responsibility,
            educational_requirement:req.body. educational_requirement,
            experiences:req.body.experiences,        
        }
       try{
          const job= await db.Jobs.create(Job)
        res.status(201).json({
        message: "Job post Successfully",
        contact: job,
      });
    } catch (error:any) {
       res.status(500).json({ 
        message: "Something went wrong with job form",
        error:error.message

     });
    }
    }

    const getJobs=async(req:Request,res:Response)=>{
        await db.Jobs.findAll().then((result:JobAttributes)=>{
                res.status(200).send(result)    
        })
      }

    const getJobById=async(req:Request,res:Response)=>{
        const jobId=req.params.jobId;
       await db.Jobs.findByPk(jobId)
       .then((result:JobAttributes)=>{
        res.status(200).send(result);
       })
    }
    return{
      postJob,
      getJobs,
      getJobById
    }
}

export default JobController;