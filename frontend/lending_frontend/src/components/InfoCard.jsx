import React from "react";
import profileimg  from "../assets/profileimg.svg"
const InfoCard = ()=>{
 return (
    <>
    <div className="bg-gray-200 w-60 h-77 flex flex-col items-center gap-2 rounded-2xl shadow-lg">
        <div className="w-2/5 h-30 flex justify-center items-center mt-6 rounded-full">
           <img className="bg-gray-300 w-full h-30 flex rounded-full" src={profileimg} alt="IMG HERE" />
        </div>
      <div className="flex flex-col justify-center items-center gap-3">
     <div className="text-xl font-semibold">Sarvesh Bahadarpurkar</div>
     <div className="flex justify-center items-center">
        <label className="text-mg font-semibold" htmlFor="balance">Loan Amount:</label>
        <p id="balance" className="font-medium">AMOUNT</p>
     </div>
     <div className="flex justify-center items-center">
        <label className="text-mg font-semibold" htmlFor="balance">Loan Duration:</label>
        <p id="balance" className="font-medium">DURATION</p>
     </div>
     <div className="flex justify-center items-center">
        <label className="text-mg font-semibold" htmlFor="balance">Interest:</label>
        <p id="balance" className="font-medium">INTEREST %</p>
     </div>
      </div>
    </div>
    </>
 )

}
export default InfoCard