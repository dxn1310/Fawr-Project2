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


export default function Newfooter() {
    return (
        <div className='newfooter-outer'>
            <div className='newfooter-top'>
                <div className='newfooter-top-left'>
                    <div className='newfooter-fawr-content'>AGAMENNON</div>
                </div>
                <div className='newfooter-top-right'>
                    {/* <div>
                        <div className="newfooter-ourservice" style={{ width: "100%", display: "flex", justifyContent: "center", marginBottom: "2%" }}>Solutions</div>
                        <div className='newfooter-solution-items'>Global Technology solution</div>
                        <div className='newfooter-solution-items'>Compliances solution</div>
                        <div className='newfooter-solution-items'>Non technical service</div>
                        <div className='newfooter-solution-items'>Global Technology solution</div>
                        <div className='newfooter-solution-items'>Compliances solution</div>
                        <div className='newfooter-solution-items'>Non technical service</div>

                        <div className='newfooter-solution-items'>Facility management</div>
                        <div className='newfooter-solution-items'>Asset management</div>
                        <div className='newfooter-solution-items'>Tax Solution</div>

                        <div className='newfooter-solution-items'>Private security guaranting</div>
                        <div className='newfooter-solution-items'>Corporate fraud and forensic investigation</div>
                        <div className='newfooter-solution-items'>Background check service</div>

                        <div className='newfooter-solution-items'>People service</div>
                    </div> */}

                    <Stack direction="row" display="flex" alignItems="center" justifyContent="right" marginTop="5%" position="relative" top="50%">
                        {/* <Link to="">
                            <div> */}
                        <img className="newfooter-img" src={Googleplay} style={{ width: "15%", height: "8%", cursor: "pointer" }} />
                        {/* </div>
                        </Link>
                        <Link to="">
                            <div> */}
                        <img className="newfooter-img" src={Applestore} style={{ width: "13%", height: "6%", cursor: "pointer" }} />
                        {/* </div>
                        </Link> */}
                    </Stack>





                </div>
            </div>
            <div className='newfooter-bottom'>
                <div style={{ width: "100%", height: "0.1rem", backgroundColor: "white" }} />
                <div className='newfooter-bootom-inner'>
                    <Stack direction="row" spacing={10} marginTop="1%" marginLeft="2%">
                        <div className="newfooter-bottom-content">Contact us</div>
                        <div className="newfooter-bottom-content">Sustainability</div>
                        <div className="newfooter-bottom-content">About Us</div>
                        <div className="newfooter-bottom-content">Our Service</div>
                        <div className="newfooter-bottom-content">Terms & Conditions</div>
                        <div className="newfooter-bottom-content">Privacy</div>
                        <div className="newfooter-bottom-content">Cookie Policy</div>
                    </Stack>

                    <Stack direction="row" spacing={5} marginTop="1%" marginRight="2%">
                        <GrLinkedinOption cursor="pointer" iconSize="15%" />
                        <BsTwitter cursor="pointer" iconSize="15%" />
                        <RiFacebookFill cursor="pointer" iconSize="15%" />
                        <BsInstagram cursor="pointer" iconSize="15%" />
                    </Stack>

                </div>

                {/* <div>freerferf</div> */}
                {/* <div style={{ width: "100%", height: "0.1rem", backgroundColor: "white" }} /> */}
            </div>
        </div>
    )
}
