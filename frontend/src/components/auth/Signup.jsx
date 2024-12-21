import React from 'react'
import Navbar from '../shared/Navbar'

const Signup = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex items-center justify-center '>
            <form action="" className='w-'>
                <h1 className='font-bold text-xl mb-5 '>Sign Up</h1>
                <div className='my-2'>
                    <label >Full Name</label>
                    <input type="text" placeholder='priyanshu' />
                </div>
            </form>
        </div>




    </div>
  )
}

export default Signup