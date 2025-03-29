import {BrowserRouter, Routes, Route} from "react-router-dom"
import Landing from "./components/Landing"
import SignupCard from "./components/Signup"
import SigninCard from "./components/Signin"
import DashboardCard from "./components/Dashboard"
import LoansPage from "./components/LoansPage"
import Giveloan from "./components/Giveloan"
import AuthWrap from "./components/AuthWrap"
function App() {
  
  return (
    <>
      <BrowserRouter>
     <Routes>
      <Route path="/signup" element={<SignupCard/>}/>
      <Route path="/" element={<Landing/>}/>
      <Route path="/signin" element={<SigninCard/>}/>
      <Route element={<AuthWrap/>}>
      <Route path="/dashboard" element={<DashboardCard/>}/>
      <Route path="/get" element={<LoansPage/>}/>
      <Route path="/lend" element={<Giveloan/>}/>
      </Route>
     </Routes>
     </BrowserRouter> 
      
    </>
  )
}

export default App
