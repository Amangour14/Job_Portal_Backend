import { Request, Response } from "express";
import db from "../models";

const JobApplication=()=>{

    const applyJob=async(req:Request,res:Response)=>{
        // console.log(req.body.jobApplication.emai)
        const apply={     
            fullname:req.body.jobApplication.fullName,
            email:req.body.jobApplication.email,
            resume:req.body.jobApplication.resume,
            experience:req.body.jobApplication.experience,
            userId:req.body.userId,
            jobId:req.body.jobId,
        }
         try{
            const jobApp= await db.JobApplication.create(apply)
          res.status(201).json({
          message: "Your Application for Job apply Successfully",
          contact: jobApp,
        });
      } catch (error:any) {
         res.status(500).json({ 
          message: "Something went wrong with job form",
          error:error.message
  
       });
      }
    }

    return{
        applyJob
    } ;
}
export default  JobApplication;