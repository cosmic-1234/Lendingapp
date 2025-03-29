import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/react.svg";
import loan from "../assets/loan.svg";
import axios from 'axios';
import eyesclose from "../assets/eyesopen.svg"
import eyesopen from "../assets/eyesclose.svg"
function SignupCard() {
   const navigate = useNavigate();
    const visiblefunc = ()=>{
      Setvisible(!visible);
      if(visible)
        return "text";
    else
    return "password";

    }
    const SubmitRequest = async()=>{
        debugger;
       const SubmitData = 
       { username:username,
        password:password,
        email:email,
        firstname:firstname,
        lastname:lastname,
        amount:signamount
       }
       await axios.post("http://localhost:3000/api/v1/user/signup",  SubmitData).then(async res=>{
         if(res.status === 411){
            debugger;
            console.log("Signup unsuccessful");
         }
         else{
            localStorage.setItem("token", res.data.token);
         }


       })
    }
    const[username, Setusername] = useState();
    const[password, Setpassword] = useState();
    const[email, Setemail] = useState();
    const[firstname, Setfirstname] = useState();
    const[lastname, Setlastname] = useState();
    const[signamount, Setsignamount] = useState();
    const[visible, Setvisible] = useState(false);
  return (
    <div className="grid grid-cols-2 h-screen">
        <div className='flex flex-col gap-6'>
            <div className='flex justify-center items-center mt-10'>
                <img className="w-20"src={logo} alt="" />
            </div>
        <div className='bg-white flex justify-center items-center'>
            
            <div>
                <form  action={SubmitRequest}>
                    <div className='flex flex-col bg-white gap-4 w-100 h-125 justify-center items-center rounded-4xl'>
                        <p className='text-black font-bold text-3xl'>Get started today</p>
                    <input onChange={e=>{Setusername(e.target.value)}} className='w-95 h-9 rounded-sm px-3 outline-none' type="text" required placeholder='Userame' />
                    <div className='flex  items-center justify-center'>
                    <input onChange={e=>{Setpassword(e.target.value)}} className='w-95 h-9 rounded-sm px-3 ml-2 outline-none' type={visible? "text" : "password"} required placeholder='Password' 
                     />
                     <img className='w-20 h-6' onClick={visiblefunc} src={visible?eyesclose:eyesopen} alt="" />
                     </div>
                    <input onChange={e=>{Setemail(e.target.value)}} className='w-95 h-9 rounded-sm px-3  outline-none' type="text" required placeholder='Email' />
                    <input onChange={e=>{Setfirstname(e.target.value)}} className='w-95 h-9 rounded-sm px-3  outline-none' type="text" required placeholder='First Name'/>
                    <input onChange={e=>{Setlastname(e.target.value)}} className='w-95 h-9 rounded-sm px-3  outline-none' type="text" required placeholder='Last Name'/>
                    <input onChange={e=>{Setsignamount(e.target.value)}} className='w-95 h-9 rounded-sm px-3  outline-none' type="text" required placeholder='Signup amount'inputMode="numeric"pattern="[0-9\s]{1,7}"
  
/>
                    <button className='bg-blue-300 w-95 h-12 rounded-2xl my-4 hover:cursor-pointer font-semibold hover:bg-blue-400 hover:duration-500'>Submit</button>
                    <div className='flex justify-center items-center gap-2'>
                       <p>Already a User? </p>
                       
                       <button onClick={()=>navigate("/signin")} className='text-blue-500 hover:cursor-pointer hover:text-blue-700'> Login</button>
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
export default SignupCard;







