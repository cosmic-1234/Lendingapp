import React, { useState } from 'react';
import logo from "../assets/react.svg"
import loan from "../assets/loan.svg"
function SignupCard() {
  return (
    <div className="grid grid-cols-2 h-screen">
        <div className='flex flex-col gap-6'>
            <div className='flex justify-center items-center mt-10'>
                <img className="w-20"src={logo} alt="" />
            </div>
        <div className='bg-white flex justify-center items-center'>
            
            <div>
                <form  action="">
                    <div className='flex flex-col bg-white gap-4 w-100 h-125 justify-center items-center rounded-4xl'>
                        <p className='text-black font-bold text-3xl'>Get started today</p>
                    <input className='w-95 h-9 rounded-sm px-3' type="text" placeholder='Name' />
                    <input className='w-95 h-9 rounded-sm px-3' type="text" placeholder='Password' />
                    <input className='w-95 h-9 rounded-sm px-3' type="text" placeholder='Email' />
                    <input className='w-95 h-9 rounded-sm px-3' type="text" placeholder='First Name'/>
                    <input className='w-95 h-9 rounded-sm px-3' type="text" placeholder='Last Name'/>
                    <input className='w-95 h-9 rounded-sm px-3' type="text" placeholder='Signup amount'/>
                    <button className='bg-blue-300 w-95 h-12 rounded-2xl my-4 hover:cursor-pointer'>Submit</button>
                    </div>
                </form>
            </div></div>
            </div>
        <div className='bg-gradient-to-r from-white to-green-100'>
{/* right */}
<div className='flex flex-wrap justify-center items-center'>
    <div className='w-full h-80 mt-7 flex justify-center'>
        {/* image */}
        <img className="w-60 h-60" src={loan} alt="" />
    </div>
<div className='w-full flex justify-center items-center'>
    {/* rest */}
<p className='text-5xl font-semibold'>We are waiting for you inside...</p>
</div>
</div>
        </div>
    </div>
  )
}
export default SignupCard;