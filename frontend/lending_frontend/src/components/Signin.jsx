import React, { useState } from 'react';
import logo from "../assets/react.svg"
import loan from "../assets/loan.svg"
import axios from 'axios';
import eyesclose from "../assets/eyesopen.svg";
import eyesopen from "../assets/eyesclose.svg";
import { useNavigate } from 'react-router-dom';
function SigninCard() {
    const navigate = useNavigate()
    const visiblefunc = ()=>{
        Setvisible(!visible);
        if(visible)
          return "text";
      else
      return "password";
  
      }
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
    
    const [username, Setusername] = useState();
    const[password, Setpassword] = useState();
    const[visible, Setvisible] = useState(false);
    const SubmitRequest = async ()=>{
        console.log("reached function")
        const SubmitData = {
            username: username,
            password: password
        }
        try {
            await axios.post("http://localhost:3000/api/v1/user/signin",  SubmitData ).then(res=>{
               
                   localStorage.setItem("token", res.data.token);
                   console.log(res.data);
                   navigate("/dashboard");
                
               })
        } catch (error) {
        
                alert("Login Unsuccesfull please check your username and password")
             
        }
        
        
    }
  return (
    <div className="grid grid-cols-2 h-screen">
        <div className='flex flex-col gap-6'>
            <div className='flex justify-center items-center mt-10'>
                <img className="w-20"src={logo} alt="" />
            </div>
        <div className='bg-white flex justify-center items-center'>
            
            <div>
                <form  action={SubmitRequest} method='get'>
                    <div className='flex flex-col bg-white gap-4 w-100 h-125 justify-center items-center rounded-4xl'>
                        <p className='text-black font-bold text-3xl'>Get started today</p>
                    <input id='username'  onChange={e=>{Setusername(e.target.value)}} className='w-95 h-9 rounded-sm px-3 outline-none' type="text" required placeholder='Userame' />
                    {/* <input id='password'  onChange={e=>{Setpassword(e.target.value)}} className='w-95 h-9 rounded-sm px-3' type="text" required placeholder='Password' /> */}
                    <div className='flex  items-center justify-center'>
                                        <input onChange={e=>{Setpassword(e.target.value)}} className='w-95 h-9 rounded-sm px-3 ml-2 outline-none' type={visible? "text" : "password"} required placeholder='Password' 
                                         />
                                         <img className='w-20 h-6' onClick={visiblefunc} src={visible?eyesclose:eyesopen} alt="" />
                                         </div>
                    <button className='bg-blue-300 w-95 h-12 rounded-2xl my-4 hover:cursor-pointer font-semibold hover:bg-blue-400 hover:duration-500'>Submit</button>
                    <div className='flex justify-center items-center gap-2'>
                       <p>Not registered yet? </p>
                       <button onClick={()=>navigate("/signup")} className='text-blue-500 hover:cursor-pointer hover:text-blue-700'> Signup</button>
                    </div>
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
export default SigninCard;