
import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import AdminJobsTable from './AdminJobsTable'
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs'
import { setSearchJobByText } from '@/redux/jobSlice'

const AdminJobs = () => {
    useGetAllAdminJobs();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
  
    useEffect(() =>{
      dispatch(setSearchJobByText(search));
    },[search]);

    // make a filter by this code

  return (
    <div>
        <Navbar/>
        <div className='max-w-6xl mx-auto my-10'>
            <div className='flex items-center justify-between'>
                <Input
                   className="w-fit placeholder:text-gray-400 placeholder:blur-sm"
                   placeholder="Filter by name, role"
                   value={search} // Bind the value to search state
                  onChange={(e) => setSearch(e.target.value)} // Update the search state
                />
                <Button onClick ={ () => navigate("/admin/jobs/create")} className="bg-black text-white bg-gray-600 hover:bg-gray-900 ">New Jobs</Button>
            </div>
            <div className='my-5'>
              <AdminJobsTable className="my-15"/>
            </div>
            

        </div>
    </div>
  )
}

export default AdminJobs