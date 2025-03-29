import React from "react";
import goto from "../assets/goto.svg"
import setting from "../assets/settings.svg"
import help from "../assets/help.svg"
import beta from "../assets/beta.svg"
import InfoCard from "./InfoCard";
import Toolbar from "./Toolbar"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const DashboardCard = ()=>{
    const navigate = useNavigate();
    const[toolbar, setToolbar] = useState(true);
    
    return(
        <>
       
        <div className="bg-white h-screen flex flex-col">
        <div className=" bg-amber-100 items-center h-12 mb-1 rounded-3xl">
                <nav className="flex flex-row-reverse items-center bg-green-100 shadow-xl shadow-top shadow-green-200">
                    <button className="bg-teal-500 hover:bg-teal-700 hover:cursor-pointer hover:duration-500  h-10 mt-1 mr-3 w-25 rounded-lg">Logout</button>
                    <h2 className="mr-310 w-46 h-12 flex items-center justify-center text-4xl font-bold text-green-600">Looofer...</h2>
                </nav>
            </div>
            <div className="flex h-screen">
               
        {/* <div id="left main div" className=" bg-gradient-to-r from-gray-50 to-gray-100 w-2/11 flex flex-col ">
        <div className="flex flex-col gap-4 text-xl mt-2 ">
            
            <div className="flex justify-center items-center cursor-pointer "><p className="width-30 px-1 text-2xl hover:font-semibold font-sans">About us</p>
            <img className="h-7" src={goto} alt="" />
            </div>
            <div className="flex justify-center items-center cursor-pointer "><p className="width-30 px-1 text-2xl hover:font-semibold font-sans">Privacy statement</p>
            <img className="h-7" src={goto} alt="" />
            </div>
            <div className="flex justify-center items-center cursor-pointer "><p className="width-30 px-1 text-2xl hover:font-semibold font-sans">Fund us</p>
            <img className="h-7" src={goto} alt="" />
            </div>
        </div>
        <div className=" mt-90 h-36 flex-col">
            <div className="flex items-center w-36  mt-8 hover:cursor-pointer">
            <img className="w-7 h-6" src={help} alt="" />
                <p className="  text-xl hover:font-semibold">Need help?</p>
            </div>
            <div className="flex items-center w-30 mt-2 cursor-pointer">
            <img className="w-7 h-6" src={beta} alt="" />
                <p className=" text-xl hover:font-semibold">Use beta</p>
            </div>
            <div className="flex items-center w-27 mt-2 cursor-pointer">
            <img className="w-7 h-6" src={setting} alt="" />
                <p className=" text-xl hover:font-semibold">Settings</p>
            </div>
        </div>
        </div> */}
        <Toolbar sex={toolbar}/>
        <div id="mid main div" className="bg-gradient-to-b from-white to-gray-200 w-8/11 h-full">
        <div className="ml-1 bg-amber-100 w-6" onClick={()=>setToolbar(!toolbar)}>
            <img className="w-6 h-5" src={setting} alt="" />
        </div>
        <div className="grid grid-cols-3 px-20 gap-6">
        <InfoCard/>
        <InfoCard/>
        <InfoCard/>

        </div>
        <div className="flex justify-center items-center mt-20 h-30">
            <button onClick={()=>navigate("/get")} className="bg-green-500 mr-15 w-70 h-14 rounded-2xl text-xl 
            hover:bg-green-700 hover:text-2xl hover:duration-400 duration-400 hover:cursor-pointer">Lend Money</button>
            <button className="bg-green-500 ml-15 w-70 h-14 rounded-2xl text-xl 
            hover:bg-green-700 hover:text-2xl hover:duration-400 duration-400 hover:cursor-pointer">Take Loan</button>
        </div>
        <div className="mt-16 items-center ml-2">Disclaimer: Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Excepturi, doloribus voluptatibus optio repellat accusamus error laborum deleniti fugit est, do
            loremque, aperiam sapiente quaerat tempore? Maiores vero quod id nemo hic emno geko brocode.</div>
        </div>
              
        <div id="right main div" className="bg-amber-900 w-3/11 h-full">right</div>
        </div>
        </div>
        </>
    )
}
export default DashboardCard;