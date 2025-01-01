import React, { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from "./utils/constant";
import { useParams } from "react-router-dom";
import axios from "axios";
import { setSingleJob } from "@/redux/jobSlice"; // Corrected import
import { toast } from "sonner";

const JobDescription = () => {
  const params = useParams();
  const Id = params.id;
  const { singleJob } = useSelector(store => store.job);
  const { user } = useSelector(store => store.auth); // Corrected state access
  const dispatch = useDispatch();
  const isApplied = singleJob?.applications?.some(application=>application.applicant == user?._id)||false;

  const applyJObHandler = async () =>{
    try {
      const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${Id}`, { withCredentials: true });
      console.log(res.data);
      if(res.data.success){
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message);
    }
  }

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${Id}`, { withCredentials: true });
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job)); // Correct action dispatch
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleJob();
  }, [Id, dispatch, user?._id]);

  // If job data isn't available yet, show loading message
  if (!singleJob) {
    return <div>Loading...</div>;
  }

  // Log jobId when available
  console.log("Job _id:", singleJob?._id);

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">{singleJob?.title}</h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge className={"text-blue-700 font-bold"} variant="ghost">
              {singleJob?.position} Position
            </Badge>
            <Badge className={"text-blue-700 font-bold"} variant="ghost">
              {singleJob?.jobType}
            </Badge>
            <Badge className={"text-blue-700 font-bold"} variant="ghost">
              {singleJob?.salary}LPA
            </Badge>
          </div>
        </div>
        <Button
          onClick={isApplied? null : applyJObHandler}
          diabled = {isApplied}
          variant="outline"
          className={`bg-black rounded-lg text-white ${isApplied ? 'bg-gray-600 hover:bg-gray-900 cursor-not-allowed' : 'bg-[#7209b7] hover:bg-[#7209b7]-900'}`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>
      <h1 className="border-b-2 border-b-gray-300 font-medium py-4">Job Description</h1>
      <div>
        <h1 className="font-bold my-1">Role: <span className="pl-4 font-normal text-gray-800">{singleJob?.title}</span></h1>
        <h1 className="font-bold my-1">Location: <span className="pl-4 font-normal text-gray-800">{singleJob?.location}</span></h1>
        <h1 className="font-bold my-1">Description: <span className="pl-4 font-normal text-gray-800"> {singleJob?.description}</span></h1>
        <h1 className="font-bold my-1">Experience: <span className="pl-4 font-normal text-gray-800">{singleJob?.experienceLevel} yrs</span></h1>
        <h1 className="font-bold my-1">Salary: <span className="pl-4 font-normal text-gray-800">{singleJob?.salary}LPA</span></h1>
        <h1 className="font-bold my-1">Total Applicants: <span className="pl-4 font-normal text-gray-800">{singleJob?.applications?.length}</span></h1>
        <h1 className="font-bold my-1">Posted Date: <span className="pl-4 font-normal text-gray-800">{singleJob?.createdAt.split("T")[0]}</span></h1>
      </div>
    </div>
  );
};

export default JobDescription;
