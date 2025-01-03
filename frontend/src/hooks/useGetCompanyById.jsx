import { COMPANY_API_END_POINT} from '@/components/utils/constant';
import { setSingleCompany } from '@/redux/companySlice';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAllJobs = (companyId) => {
   const dispatch = useDispatch();
   useEffect(()=>{
      const fetchAllCompany = async () =>{
        try {
            const res = await axios.get(`${COMPANY_API_END_POINT}/get/companyId`,{withCredentials:true});
            if(res.data.success){
                dispatch(setSingleCompany(res.data.company));
            }
        } catch (error) {
            console.log(error);
        }
      }
      fetchAllCompany();
   },[companyId, dispatch])
}

export default useGetAllJobs