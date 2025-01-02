import { Label } from '@radix-ui/react-label'
import { Input } from '../ui/input'
import React from 'react'
import Navbar from '../shared/Navbar'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'

const Companiescreate = () => {
    const navigate = useNavigate();
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
                 />
                 <div className='flex items-center gap-2 my-10'>
                    <Button variant = "outline" className="bg-slate-300 text-black  hover:bg-gray-600" onClick={()=>navigate("/admin/companies")}>Cancel</Button>
                    <Button variant = "outline" className="bg-black text-white  hover:bg-gray-600">Continue</Button>
                 </div>
                 
            </div>
        </div>
    </div>
  )
}

export default Companiescreate