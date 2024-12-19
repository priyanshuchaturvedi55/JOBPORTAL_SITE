import { Application } from "../models/application.models";
import { Job } from "../models/job.models";

export const applyJob = async(req, res) =>{
    try {
        const userId = req.id;
        const jobId = req.params.id;
        if(!jobId){
            return res.status(400).json({
                message:"Job id is required",
                success:false
            })
        }
        //// check if the user has already applied for the job
        const existingApplication = await Application.findOne({job:jobId, applicant:userId});
        if(existingApplication){
            return res.status(400).json({
                message:"You have already applied for this job",
                success:false
            })
        }
        ////////////// check if job exist or not 
        const job = await Job.findById(jobId);
        if(!job){
            return res.status(404).json({
                message: "Job not found",
                success: false
            })
        }
        /////////////////// create a new application
        const newApplication = await Application.create({
            job:jobId,
            applicant: userId,
        });
        job.applications.push(newApplication._id);
        await job.save();
        return res.status(201).json({
            message:"Job applied successfully.",
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}