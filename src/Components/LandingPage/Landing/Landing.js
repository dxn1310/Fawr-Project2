import React from 'react';
import "./Landing.css"

import Navbar from '../Navbar/Navbar.js';
import Firstpage from '../Firstpage/Firstpage.js';
import Search from '../Search/Search.js';
import About from '../About/About.js';
import Leading from '../Leading/Leading.js';
import Trust from '../Trust/Trust.js';
// import Reach from '../Reach/Reach.js';
import Footer from '../Footer/Footer.js';

import Digital from '../../Services/DigitalTechnology/Digital.js';
import Nontechnical from "../../Services/NonTechnical/Nontechnical.js";
import Compiance from "../../Services/Compiance/Compiance.js"
import Facility from '../../Services/Facility/Facility.js';
import Private from '../../Services/PrivateSecurity/Private.js';
import Tax from '../../Services/Tax/Tax.js';
import Asset from '../../Services/Asset/Asset.js';
import Background from '../../Services/Background/Background.js';
import Anti from '../../Services/Anti/Anti.js';
import Corporate from '../../Services/Corporate/Corporate.js';
import Reachus from '../../Services/ReachUs/Reachus.js';
import Reach from '../Reach/Reach.js';

import { Stack } from '@chakra-ui/react'

export default function Landing() {
    return (
        <div className='landing-outer'>
            <Firstpage />
            <div className='landing-inner'>
                <Search />
            </div>
            <div className='landing-inner'>
                <About />
            </div>
            <div className='landing-inner'>
                <Leading />
            </div>
            <div className='landing-inner'>
                <Trust />
            </div>
            <Reach />
        </div>
    )
}
