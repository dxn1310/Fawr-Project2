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

function App() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
  return (
    <ChakraProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Digital Technology Transformation" element={<Digital />} />
        <Route path="/Compiances Solution" element={<Compiance />} />
        <Route path="/Asset Management" element={<Asset />} />
        <Route path="/Corporate Fraud & Forensic Investigation" element={<Corporate />} />
        <Route path="/Tax Solution" element={<Tax />} />
        <Route path="/Facility Management" element={<Facility />} />
        <Route path="/People Services" element={<People />} />
        <Route path="/Anti - Counterfeiting Solution" element={<Anti />} />
        <Route path="/Non - Technical Service" element={<Nontechnical />} />
        <Route path="/Background Check Service" element={<Background />} />
        <Route path="/Private Security Guarding" element={<Private />} />

        <Route path="/Sustainability" element={<Sustainability />} />
      </Routes>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
