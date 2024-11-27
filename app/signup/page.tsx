import React from 'react'
import Link from 'next/link'

function signup() {
  return (
    <div className='bg-indigo-600 h-screen flex justify-center items-center'>
        <div className='bg-white w-96 p-6 rounded-2xl shadow-lg '>
            <h1 className='text-center font-bold text-3xl'>Sign Up</h1>
            <div className="mt-5 ">
              <div className='flex space-x-4'>
                <div className='flex-1'>
                  <label htmlFor="FirstName" className="block text-base mb-2 ">First Name</label>
                  <input type="text" id="FirstName"  className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-400" placeholder="Enter FirstName"/>
                </div>
                <div className='flex-1 '>
                  <label htmlFor="LastName" className="block text-base mb-2 ">Last Name</label>
                  <input type="text" id="LastName"  className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-400" placeholder="Enter LastName"/>
                </div>
              </div>
              <div className='mt-3'>
              <label htmlFor="Username" className="block text-base mb-2 ">Username</label>
              <input type="text" id="Username"  className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-400" placeholder="Enter Username"/>
              </div>
              <div className='mt-3'>
                <label htmlFor="Email" className="block text-base mb-2 ">Email</label>
                <input type="text" id="Email"  className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-400" placeholder="Enter Email"/>
              </div>
              <div className='mt-3'>
              <label htmlFor="Password" className="block text-base mb-2 ">Password</label>
              <input type="password" id="Password"  className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-400" placeholder="Enter Password"/>
              </div>
              <div className='mt-3'>
              <label htmlFor="confirmPassword" className="block text-base mb-2 ">Confirm Password</label>
              <input type="Password" id="confirmPassword"  className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-400" placeholder="Enter Confirm Password"/>
              </div>
              <div className='mt-5'>
                <button className='bg-indigo-600 w-full text-white text-center py-1 rounded-md shadow-lg border-2 border-indigo-600 hover:bg-white hover:text-indigo-600 '>Sign Up</button>
              </div>
              <div className='mt-3'>
                <h1 className='text-center text-gray-400'>Already have account <Link className='text-indigo-600 font-semibold text-sm hover:underline hover:decoration-indigo-600 ' href="\">Login In</Link> </h1>
              </div>
            
            
            
            </div>

        </div>
        
    </div>
  )
}

export default signup