import './App.css';
import { Route, Routes, useNavigate } from "react-router-dom";
import Personal_Recuisition from './pages/HR_Tabs/Personal_Recuisition';
import Yearly_Plan from './pages/HR_Tabs/YearlyPlans';
import QAPortal from './pages/QA_Panel/QAPortal.js';
import Signin from './pages/signin/Signin';
import Tech_PersonalRecuision from './pages/Tech_Panel/Tech_Pages/Tech_PersonalRecuision';
import Measuringdevice from './pages/Tech_Panel/Tech_Pages/Measuring_Device'
import Machinary from './pages/Tech_Panel/Tech_Pages/Machinary';
import YearlyPlan from './pages/Tech_Panel/Tech_Pages/Yearly';
import { useEffect } from 'react';
// require('dotenv').config()


function App() {
  const navigate = useNavigate()
  useEffect(()=>{
    navigate('/app/login')
  },[])
  return (
    <div className="App">
      <Routes>
        <Route path="/app/login" element={<Signin />} />
        <Route path="/app/hr/personal_recuisition" element={<Personal_Recuisition />} />
        <Route path="/app/hr/yearly_plan" element={<Yearly_Plan />} />
        <Route path="/app/qa/personal_recuisition" element={<QAPortal />} />
        <Route path="/app/tech/personal_recuisition" element={<Tech_PersonalRecuision />} />
        <Route path="/app/tech/Machinery" element={< Machinary/>} />
        <Route path="/app/tech/Measuringdevice" element={<Measuringdevice/>} />
        <Route path="/app/tech/yearly" element={<YearlyPlan/>} />
      </Routes>
    </div>
  );
}

export default App;
