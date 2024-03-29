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

import Slide1 from '../Slideshow/Slides/Slide1/Slide1';
import Slide2 from '../Slideshow/Slides/Slide2/Slide2';
import Slide3 from '../Slideshow/Slides/Slide3/Slide3';
import Slide4 from '../Slideshow/Slides/Slide4/Silde4';
import Slide5 from '../Slideshow/Slides/Slide5/Slide5';
import { Stack } from '@chakra-ui/react'

import ReachNew from '../Reach/Reachnew/ReachNew';
import Grow from '../Grow/Grow';

import Find from '../FindExpert/Find';

import Slideshow from '../Slideshow/Slideshow';
import Browse from '../Browse/Browse';
import Multiplatform from '../Multiplatform/Multiplatform';
export default function Landing() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    return (
        <div className='landing-outer'>
            {/* <Firstpage /> */}
            <Slideshow />
            <div className='landing-inner'>
                <Search />
            </div>
            <div className='landing-inner'>
                <About />
            </div>
            <div className='landing-inner'>
                <Multiplatform />
            </div>
            <div className='landing-inner'>
                {/* <Leading /> */}
                <Browse />
            </div>
            <div className='landing-inner'>
                {/* <Leading /> */}
                <Find />
            </div>
            <div className='landing-inner'>
                <Trust />
            </div>
            <Grow />
            {/* <ReachNew /> */}
        </div>
    )
}
