import { COMPANY_API_END_POINT} from '@/components/utils/constant';
import { setCompanies } from '@/redux/companySlice';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAllCompany = () => {
   const dispatch = useDispatch();
   useEffect(()=>{
      const fetchAllCompany = async () =>{
        try {
            const res = await axios.get(`${COMPANY_API_END_POINT}/get`,{withCredentials:true});
            if(res.data.success){
                dispatch(setCompanies(res.data.companies));
            }
        } catch (error) {
            console.log(error);
        }
      }
      fetchAllCompany();
   },[])
}

export default useGetAllCompany