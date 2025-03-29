import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import LoanCard from "./LoanCard";
axios.defaults.headers.common['authorization'] = `Bearer ${localStorage.getItem('token')}`;

const LoansPage = () => {
  const [loans, setLoans] = useState([]);  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:3000/api/v1/loan/get");
        setLoans(res.data.data);
        setLoading(false); 
      } catch (error) {
        setError(error.message);
        setLoading(false); 
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (<div className="bg-gradient-to-b from-white to-green-50">
    <div className=" bg-amber-100 items-center h-12 mb-1 rounded-3xl">
                <nav className="flex flex-row-reverse items-center bg-green-100 shadow-md shadow-top shadow-green-200">
                    <button className="bg-teal-500 hover:bg-teal-700 hover:cursor-pointer hover:duration-500  h-10 mt-1 mr-3 w-25 rounded-lg">Logout</button>
                    <h2 className="mr-310 w-46 h-12 flex items-center justify-center text-4xl font-bold text-green-600">Looofer...</h2>
                </nav>
            </div>
    <div className="grid grid-cols-5">
      {loans.length === 0 ? 
        <p>No loans available</p>
       : 
        loans.map((item, index) => (
          <div key={item.loanid}>
            <LoanCard item={item} /> 
          </div>
        )
      )}
    </div>
    </div>
  );
};

export default LoansPage;