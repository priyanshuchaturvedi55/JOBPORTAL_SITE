import React from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'

const HeroSection = () => {
  return (
    <div className='text-center'>
        <div className='flex flex-col gap-5 my-10'>
        <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[red]'>No. 1 Job Hunt Website</span>
        <h1 className='text-5xl font-bold'>"Don’t just search – <br />make your career <span className='text-[#6A38C2]'>dreams come true."</span> </h1>
        <p>"Explore endless opportunities, apply with confidence, and achieve the career of your dreams!."</p>
        <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
            <input type="text" placeholder='Find your dream jobs...'  className='outline-none border-none w-full'/>
            <Button className='rounded-r-full bg-[#6A38C2]'>
                <Search className='h-5 w-5 text-[white]'/>
            </Button>
        </div>
        </div>
    </div>
  )
}

export default HeroSection