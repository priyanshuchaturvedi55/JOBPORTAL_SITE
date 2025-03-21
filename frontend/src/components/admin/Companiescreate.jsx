import { Label } from '@radix-ui/react-label'
import { Input } from '../ui/input'
import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { COMPANY_API_END_POINT } from '../utils/constant'
import { toast } from 'sonner'
import { useDispatch } from 'react-redux'
import { setSingleCompany } from '@/redux/companySlice'

const Companiescreate = () => {
    const navigate = useNavigate();
    const [companyName, setCompanyName] = useState();
    const dispatch = useDispatch();

    const registerNewCompany = async () => {
        try {
            const res = await axios.post(`${COMPANY_API_END_POINT}/register`, {companyName},
                {headers:{
                    'Content-Type':'application/json'
                },
                withCredentials:true
            });
            if(res?.data?.success){
                dispatch(setSingleCompany(res.data.company));
                toast.success(res.data.message);
                const companyId = res?.data?.company?._id;
                navigate(`/admin/companies/${companyId}`);
            }
        } catch (error) {
            
        }
    }
  return (
    <div>
        <div>
            <Navbar/>
            <div className='max-w-4xl mx-auto'>
                 <div>
                    <h1>Your Company Name</h1>
                    <p>What would you like to give your company name? you can change this later</p>
                 </div>
                 <Label>Company Name</Label>
                 <Input
                   type='text'
                   className= "my-2 placeholder:text-gray-400 placeholder:blur-sm"
                   placeholder= "cluster, mycto..."
                   onChange={(e) => setCompanyName(e.target.value)}
                 />
                 <div className='flex items-center gap-2 my-10'>
                    <Button variant = "outline" className="bg-slate-300 text-black  hover:bg-gray-600" onClick={()=>navigate("/admin/companies")}>Cancel</Button>
                    <Button variant = "outline" onClick = {registerNewCompany} className="bg-black text-white  hover:bg-gray-600">Continue</Button>
                 </div>
                 
            </div>
        </div>
    </div>
  )
}

export default Companiescreate