import React from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable.jsx'
import { useNavigate } from 'react-router-dom'
import useGetAllCompany from '@/hooks/useGetAllCompany'

const Companies = () => {
    useGetAllCompany();
    const navigate = useNavigate();
  return (
    <div>
        <Navbar/>
        <div className='max-w-6xl mx-auto my-10'>
            <div className='flex items-center justify-between'>
                <Input
                   className="w-fit placeholder:text-gray-400 placeholder:blur-sm"
                   placeholder="Filter by name"
                />
                <Button onClick ={ () => navigate("/admin/companies/create")} className="bg-black text-white bg-gray-600 hover:bg-gray-900 ">New Company</Button>
            </div>
            <div className='my-5'>
              <CompaniesTable className="my-15"/>
            </div>
            

        </div>
    </div>
  )
}

export default Companies