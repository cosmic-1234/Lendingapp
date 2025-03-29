import {BrowserRouter, Routes, Route} from "react-router-dom"
import Landing from "./components/Landing"
import SignupCard from "./components/Signup"
import SigninCard from "./components/Signin"
import DashboardCard from "./components/Dashboard"
import InfoCard from "./components/InfoCard"
import LoanCard from "./components/LoanCard"
import LoansPage from "./components/LoansPage"
function App() {
  
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/signup" element={<SignupCard/>}/>
      <Route path="/" element={<Landing/>}/>
      <Route path="/signin" element={<SigninCard/>}/>
      <Route path="/dashboard" element={<DashboardCard/>}/>
      <Route path="/get" element={<LoansPage/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
