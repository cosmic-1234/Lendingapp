import axios from "axios";
import React, { useState } from "react";

const Giveloan = ()=>{
    axios.defaults.headers.common['authorization'] = `Bearer ${localStorage.getItem('token')}`;
    const[amount, setAmount] = useState();
    const[duration, setDuration] = useState();
    const[interest, setInterest] = useState();
    const SubmitResquest = async()=>{
        const loan = {
         lendamount:amount,
         interest:interest,
         duration:duration
 
         }
         try {
            debugger;
            console.log(loan);
           const res = await axios.put("http://localhost:3000/api/v1/loan/lend", loan);
           debugger;
            console.log(res);
           alert(res.data.message);
         } catch (e) {
            debugger;
             console.log(e);
         }
     }

    return (
    <>
    <div className="bg-green-300 h-screen flex justify-center items-center">
   <div className="w-90 h-120 bg-white opacity-85 rounded-2xl flex flex-col justify-center">
      <form className="flex flex-col justify-center items-center gap-3" action={SubmitResquest}>
        <label className="text-xl font-semibold" htmlFor="Amount"> Amount </label>
        <input onChange={e=>{setAmount(e.target.value)}} name="Amount" id="Amount" className="bg-yellow-100 w-60 h-10 rounded-2xl text-2xl" required type="text" />
        <label  className="text-xl font-semibold" htmlFor="Interest"> Interest </label>
        <input onChange={e=>{setInterest(e.target.value)}} name="Interest" id="Interest" className="bg-yellow-100 w-60 h-10 rounded-2xl text-2xl" required type="text" />
        <label  className="text-xl font-semibold" htmlFor="Duration"> Duration </label>
        <input onChange={e=>{setDuration(e.target.value)}} on name="duration" id="duration" className="bg-yellow-100 w-60 h-10 rounded-2xl text-2xl" required type="text" />
              <button className="bg-green-600  w-50 mt-20 h-12 rounded-2xl hover:bg-green-900 hover:duration-500 hover:cursor-pointer">Submit</button>
        
        </form>        
   </div>
    </div>
    </>

    )
}

export default Giveloan;