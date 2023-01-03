import { Stack } from '@chakra-ui/react'
import React from 'react'
import "./Newfooter.css"


import { GrLinkedinOption } from 'react-icons/gr';
import { BsTwitter } from 'react-icons/bs';
import { RiFacebookFill } from 'react-icons/ri';
import { BsInstagram } from 'react-icons/bs';
// import { GrLinkedinOption } from 'react-icons/gr';
// import { GrLinkedinOption } from 'react-icons/gr';


export default function Newfooter() {
    return (
        <div className='newfooter-outer'>
            <div className='newfooter-top'>
                <div className='newfooter-top-left'>

                    <div className='newfooter-fawr-content'>FAWR</div>
                </div>
                {/* <div className='newfooter-top-right'>
                    <div className="newfooter-ourservice" style={{ width: "100%", display: "flex", justifyContent: "center" }}>Solutions</div>
                    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                        <Stack direction="column" marginTop="1%" width="100%" spacing={8}>
                            <Stack direction="row" width="100%">
                                <div className='newfooter-solution-items'>Global Technology solution</div>
                                <div className='newfooter-solution-items'>Compliances solution</div>
                                <div className='newfooter-solution-items'>Non technical service</div>
                            </Stack>

                            <Stack direction="row" width="100%">
                                <div className='newfooter-solution-items'>Facility management</div>
                                <div className='newfooter-solution-items'>Asset management</div>
                                <div className='newfooter-solution-items'>Tax Solution</div>
                            </Stack>

                            <Stack direction="row" width="100%">
                                <div className='newfooter-solution-items'>Private security guaranting</div>
                                <div className='newfooter-solution-items'>Corporate fraud and forensic investigation</div>
                                <div className='newfooter-solution-items'>Background check service</div>
                            </Stack>

                            <Stack direction="row" width="100%">
                                <div className='newfooter-solution-items' style={{ width: "100%", display: "flex", justifyContent: "center" }}>People service</div>
                            </Stack>
                        </Stack>
                    </div>
                </div> */}

                <div className='newfooter-top-right'>
                    <div>
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
                    </div>


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
                        <GrLinkedinOption cursor="pointer" />
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
