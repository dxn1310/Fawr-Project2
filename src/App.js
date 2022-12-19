import React, { useState } from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';



import Landing from './Components/LandingPage/Landing/Landing.js';
import Navbar from './Components/LandingPage/Navbar/Navbar.js'
import Footer from './Components/LandingPage/Footer/Footer.js';

import Digital from './Components/Services/DigitalTechnology/Digital.js';
import Compiance from './Components/Services/Compiance/Compiance.js';
import Asset from './Components/Services/Asset/Asset.js';
import Corporate from './Components/Services/Corporate/Corporate.js';
import Tax from './Components/Services/Tax/Tax.js';
import Facility from './Components/Services/Facility/Facility.js';
import People from './Components/Services/People/People.js';
import Anti from './Components/Services/Anti/Anti.js';
import Nontechnical from './Components/Services/NonTechnical/Nontechnical.js';
import Background from './Components/Services/Background/Background.js';
import Private from './Components/Services/PrivateSecurity/Private.js';

import Sustainability from './Components/Sustainability/Sustainability';

import Careersmain from './Components/Careers/CareersMain/Careersmain.js';
import Careeradvice1 from './Components/Careers/CareersMain/CareerAdvice1/Careeradvice1';
import Careeradvice2 from './Components/Careers/CareersMain/CareerAdvice2/Careeradvice2';
import Careeradvice3 from "./Components/Careers/CareersMain/CareerAdvice3/Careeradvice3.js"
import Signup from './Components/Careers/SignUp/Signup';
import Login from "./Components/Careers/LogIn/Login.js"
import Adminlogin from './Components/Careers/AdminLogin/Adminlogin';


import Cleaning from './Components/Services/People/PeopleServices/Cleaning/Cleaning';
import Expert from './Components/Services/People/PeopleServices/Expert/Expert';
import Adisclamer from './Components/Services/People/AntiDisclamer/Adisclamer';
import Interior from './Components/Services/People/PeopleServices/Interior/Interior';
import Painting from './Components/Services/People/PeopleServices/Painting/Painting';
import Electronic from './Components/Services/People/PeopleServices/Electronic/Electronic';
import Homesalon from './Components/Services/People/PeopleServices/HomeSalon/Homesalon';
import Male from './Components/Services/People/PeopleServices/HomeSalon/Male/Male';
import Female from './Components/Services/People/PeopleServices/HomeSalon/Female/Female';

// const showAccordion = () => {
//   if (window.location.pathname === "/") {
//     return <Cleaning />
//   }
// }

function App() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });

  const [option, setOption] = useState("none");
  console.log(option)
  return (
    <ChakraProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/" element={<Electronic />} /> */}
        <Route path="/Digital Technology Transformation" element={<Digital />} />
        <Route path="/Compiances Solution" element={<Compiance />} />
        <Route path="/Asset Management" element={<Asset />} />
        <Route path="/Corporate Fraud & Forensic Investigation" element={<Corporate />} />
        <Route path="/Tax Solution" element={<Tax />} />
        <Route path="/Facility Management" element={<Facility />} />
        <Route path="/People Services" element={<People option={option} setOption={setOption} />} />
        <Route path="/Anti - Counterfeiting Solution" element={<Anti />} />
        <Route path="/Non - Technical Service" element={<Nontechnical />} />
        <Route path="/Background Check Service" element={<Background />} />
        <Route path="/Private Security Guarding" element={<Private />} />

        <Route path="/Sustainability" element={<Sustainability />} />

        <Route path="/Careers Main" element={<Careersmain />} />
        <Route path="/Careers Main/Careers Advice 1" element={<Careeradvice1 />} />
        <Route path="/Careers Main/Careers Advice 2" element={<Careeradvice2 />} />
        <Route path="/Careers Main/Careers Advice 3" element={<Careeradvice3 />} />
        <Route path="/Careers Main/Sign Up" element={<Signup />} />
        <Route path="/Careers Main/Log In" element={<Login />} />
        <Route path="/Careers Main/Log In/Admin Log In" element={<Adminlogin />} />

        <Route path="/People Services/Cleaning & Pest Control" element={<Cleaning />} />
        <Route path="/People Services/Work As Expert" element={<Expert />} />
        <Route path="/People Services/Anti Disclaimer Policy" element={<Adisclamer />} />
        <Route path="/People Services/Interior Designing" element={<Interior />} />
        <Route path="/People Services/Painting" element={<Painting />} />
        <Route path="/People Services/Electronic Appliances Repair" element={<Electronic />} />
        <Route path="/People Services/Home Salon" element={<Homesalon />} />
        <Route path="/People Services/Home Salon/Male" element={<Male />} />
        <Route path="/People Services/Home Salon/Female" element={<Female />} />
      </Routes>
      <Footer />
    </ChakraProvider>
  );
}

export default App;