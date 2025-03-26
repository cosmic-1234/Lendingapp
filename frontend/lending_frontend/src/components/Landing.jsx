import React from "react";
import bank  from "../assets/bank.svg"
 function Landing() {
    return(
<div className="bg-gradient-to-r from-yellow-100 to-green-100 w-full h-screen">
<div className="bg-gradient-to-r from-yellow-100 to-green-100">
    <nav className="flex justify-end items-center"> 
        <div className="w-full font-bold h-full text-5xl text-amber-700">Looofer...</div>
        <div className="flex gap-3 h-10 ">
            <button className="bg-blue-200 w-27 p-1 rounded-lg hover:bg-blue-300 hover:duration-500">Sign Up</button>
            <button className="bg-blue-200 w-27 p-1 rounded-lg hover:bg-blue-300 hover:duration-500">Sign In</button>
        </div>
    </nav>
</div>
<div className="flex-row">
<div className=" w-full h-130 overflow-hidden bg-gradient-to-r from-yellow-100 to-green-100 ">
    <img className="w-full h-130" src={bank} alt="" />
</div>
<div className="flex justify-center items-center text-amber-700 font-extrabold text-5xl uppercase">Welcome to the worlds best lending app</div>
</div>
</div>
)
 }
 export default Landing