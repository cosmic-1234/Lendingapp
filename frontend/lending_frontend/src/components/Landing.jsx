import React from "react";
import bank  from "../assets/bank.svg"
import { Navigate, useNavigate } from "react-router-dom";
 function Landing() {
    const navigate = useNavigate();
    return(
<div className="bg-gradient-to-r from-white to-green-100 w-full h-screen">
<div className="bg-gradient-to-r from-white to-green-100">
    <nav className="flex justify-end items-center"> 
        <div className="w-full font-bold h-full text-5xl text-green-500">Looofer...</div>
        <div className="flex gap-3 h-10 ">
            <button onClick={()=>navigate("/signup")} className="bg-blue-200 w-27 p-1 rounded-lg hover:bg-blue-700 hover:duration-500 hover:cursor-pointer">Sign Up</button>
            <button onClick={()=>navigate("/signin")} className="bg-blue-200 w-27 p-1 rounded-lg hover:bg-blue-700 hover:duration-500 hover:cursor-pointer">Sign In</button>
        </div>
    </nav>
</div>
<div className="flex-row">
<div className=" w-full h-130 overflow-hidden bg-gradient-to-r from-white to-green-100 ">
    <img className="w-full h-130" src={bank} alt="" />
</div>
<div className="flex justify-center items-center text-green-500 font-extrabold text-5xl">Welcome to the world's best lending app</div>
</div>
</div>
)
 }
 export default Landing