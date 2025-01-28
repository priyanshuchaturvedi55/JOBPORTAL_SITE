import { JOB_API_END_POINT } from '@/components/utils/constant';
import { setAllJobs } from '@/redux/jobSlice';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useGetAllJobs = () => {
   const dispatch = useDispatch();
   const {searchedQuery, selectedSalaryRange} = useSelector(store => store.job);
   useEffect(()=>{
      const fetchAllJobs = async () =>{
        try {
            console.log("Searched Query:", searchedQuery);
            console.log("Selected Salary Range:", selectedSalaryRange);
            const res = await axios.get(`${JOB_API_END_POINT}/get?keyword=${searchedQuery}&salaryRange=${selectedSalaryRange}`,{withCredentials:true});
            if(res.data.success){
                dispatch(setAllJobs(res.data.jobs));
            }
        } catch (error) {
            console.log(error);
        }
      }
     
        fetchAllJobs();
      
   },[])
}

export default useGetAllJobs