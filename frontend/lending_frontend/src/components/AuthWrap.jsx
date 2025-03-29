import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
const AuthWrap = ()=>{
    const[flag, setFlag] = useState(null);
    const func1 = async()=>{
    try {
        axios.defaults.headers.common['authorization'] = `Bearer ${localStorage.getItem('token')}`;
        debugger;
        const res = await axios("http://localhost:3000/api/v1/loan/top")
        setFlag(true);
    } catch (error) {
       setFlag(false);
    }
        
    }
   
    useEffect(()=>{
        func1()
    },[])
    debugger;
    if(flag===null)
        return <h1>Loading...</h1>
    if(flag===true){
        debugger;
        return <Outlet/>
    }
    else{
        return <Navigate to="/signin"/>
    }
}
export default AuthWrap