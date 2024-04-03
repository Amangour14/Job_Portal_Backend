import { Request, Response } from "express";
import db from "../models";
import extractUserIdFromToken from "../config/extractId";

const JobApplication=()=>{

    const applyJob=async(req:Request,res:Response)=>{
        // console.log(req.body.jobApplication.emai)
        const jwtToken:any=req.headers.authorization
        console.log(jwtToken)
    const userEmail:any=extractUserIdFromToken(jwtToken);
    const data:any= await db.User.findOne({where:{email:userEmail}});
    console.log(data)
        const apply={     
            fullname:req.body.jobApplication.fullName,
            email:req.body.jobApplication.email,
            resume:req.body.jobApplication.resume,
            experience:req.body.jobApplication.experience,
            JobJobId:req.body.JobJobId.jobId,
            UserId:data.id       
        }
         try{
            const jobApp= await db.JobApplication.create(apply)
          res.status(201).json({
          message: "Your Application for Job apply Successfully",
          contact: jobApp,
        });
      } catch (error:any) {
        console.log(error.message)
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