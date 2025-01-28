import React, { useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Jobs = () => {
  const { allJobs, searchedQuery, selectedSalaryRange  } = useSelector((store) => store.job);
  const [FilterJobs, setFilterJobs] = useState(allJobs);

  useEffect(() => {
    if (searchedQuery) {
      let filteredJobs = allJobs.filter((job) => {
        return (
          job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchedQuery.toLowerCase())

        );
      } 
    );
    if (selectedSalaryRange) {
      const salaryRange = selectedSalaryRange.split("-").map((val) => parseInt(val.replace(/[^\d]/g, ""), 10));
      if (salaryRange.length === 2) {
        filteredJobs = filteredJobs.filter((job) => {
          const jobSalary = parseInt((job.salary || "").toString().replace(/[^\d]/g, ""), 10);
          return jobSalary >= salaryRange[0] && jobSalary <= salaryRange[1];
        });
      }
    }
      setFilterJobs(filteredJobs);
    } else {
      setFilterJobs(allJobs);
    }
  }, [allJobs, searchedQuery, selectedSalaryRange]);
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-20%">
            <FilterCard />
          </div>
          {FilterJobs.length <= 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4">
                {FilterJobs.map((job) => (
                  // Log the job props

                  <motion.div
                    intital={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    key={job?._id}
                  >
                    <Job job={job} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
