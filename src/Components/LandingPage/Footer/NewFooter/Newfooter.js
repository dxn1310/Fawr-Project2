import { Stack } from '@chakra-ui/react'
import React from 'react'
import "./Newfooter.css"


import { GrLinkedinOption } from 'react-icons/gr';
import { BsTwitter } from 'react-icons/bs';
import { RiFacebookFill } from 'react-icons/ri';
import { BsInstagram } from 'react-icons/bs';

import Googleplay from "./NewfooterImages/Googleplay.png"
import Applestore from "./NewfooterImages/Applestore.png"

import { Navlink as Link } from 'react-router-dom'

import { useMediaQuery } from '@chakra-ui/react'


export default function Newfooter() {
    const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
    // const [isLargerThan] = useMediaQuery('(min-width: 1000px)')
    return (
        <div className='newfooter-outer'>
            <div className='newfooter-top'>
                <div className='newfooter-top-left'>
                    <div className='newfooter-fawr-content'>AGAMEMNON</div>
                </div>
                <div className='newfooter-top-right'>

                    <Stack direction="row" display="flex" alignItems="center" justifyContent="right" marginTop={isLargerThan1000 ? "5%" : "0%"} position="relative" top="50%">
                        {/* <Link to="">
                            <div> */}
                        <img className="newfooter-img1" src={Googleplay} style={{  cursor: "pointer" }} />
                        {/* </div>
                        </Link>
                        <Link to="">
                            <div> */}
                        <img className="newfooter-img2" src={Applestore} style={{ cursor: "pointer" }} />
                        {/* </div>
                        </Link> */}
                    </Stack>





                </div>
            </div>
            <div className='newfooter-bottom'>
                <div style={{ width: "100%", height: "0.1rem", backgroundColor: "white" }} />
                <div className='newfooter-bootom-inner'>
                    <Stack direction={isLargerThan1000 ? "row" : "column"} spacing={isLargerThan1000 ? "10" : "2"} marginTop={isLargerThan1000 ? "1%" : "4%"} marginLeft="2%">
                        <div className="newfooter-bottom-content">Contact us</div>
                        <div className="newfooter-bottom-content">Sustainability</div>
                        <div className="newfooter-bottom-content">About Us</div>
                        <div className="newfooter-bottom-content">Our Service</div>
                        <div className="newfooter-bottom-content">Terms & Conditions</div>
                        <div className="newfooter-bottom-content">Privacy</div>
                        <div className="newfooter-bottom-content">Cookie Policy</div>
                        {/* <Link to=""><div className="newfooter-bottom-content">Contact us</div></Link>
                        <Link to="/Sustainability"><div className="newfooter-bottom-content">Sustainability</div></Link>
                        <Link to=""><div className="newfooter-bottom-content">About Us</div></Link>
                        <Link to=""><div className="newfooter-bottom-content">Our Service</div></Link>
                        <Link to="/Terms and Conditions"><div className="newfooter-bottom-content">Terms & Conditions</div></Link>
                        <Link to=""><div className="newfooter-bottom-content">Privacy</div></Link>
                        <Link to=""><div className="newfooter-bottom-content">Cookie Policy</div></Link> */}
                    </Stack>

                    <Stack direction="row" spacing={5} marginTop={isLargerThan1000 ? "1%" : "4%"} marginRight="2%">
                        <GrLinkedinOption cursor="pointer" iconSize="20%"/>
                        <BsTwitter cursor="pointer" />
                        <RiFacebookFill cursor="pointer" />
                        <BsInstagram cursor="pointer" />
                    </Stack>

                </div>

                {/* <div>freerferf</div> */}
                {/* <div style={{ width: "100%", height: "0.1rem", backgroundColor: "white" }} /> */}
            </div>
        </div>
    )
}
