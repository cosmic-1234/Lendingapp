import React, { useEffect } from "react";
import profileimg  from "../assets/profileimg.svg"
import { useState } from "react";
import axios from "axios";
function LoanCard ({ item }){
   
    const[ID, setID] = useState();
    const [done, setDone] = useState(false);
    const test1 = async()=>{
       try {
        debugger;
        const request = {
            loanid: ID
        }
        const res = await axios.post("http://localhost:3000/api/v1/loan/borrow", request)
        console.log(res);
        setDone(true);
        window.location.reload()
       } catch (error) {
        
       }

    }
    useEffect(()=>{
        if(done === true)
            alert("Loan has been granted");
        
    },[done]);
    useEffect(()=>{
      setID(item.loanid);
    },[item])
   return (
    
    <div className="flex flex-col justify-center items-center bg-gray-200 rounded-xl w-60 h-70 mt-5 mr-5">
        <div>
            <img className="w-25 h-25 bg-gray-300 rounded-full" src={profileimg} alt="" />
        </div>
        <div className="flex ">
            <p>Name: {item.name} </p>
        </div>
        <div>
            <p>Amount:{item.amount}</p>
        </div>
        <div>
            <p>Duration: {item.duration}</p>
        </div>

      <div>
            <p>Interest: {item.interest}</p>
        </div>
        <div>
            <button onClick={test1} className="bg-green-600 mt-5 w-40 h-10 rounded-lg hover:cursor-pointer hover:bg-green-800 hover:duration-500 duration-500">Take Loan</button>
        </div>
    </div>

)
}
export default LoanCard;