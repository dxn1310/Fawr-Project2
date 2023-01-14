import React from 'react'
import "./Ourservice.css"

import {
    Stack,
} from '@chakra-ui/react';

import { NavLink as Link } from 'react-router-dom';
import { useMediaQuery } from '@chakra-ui/react'

export default function Ourservice({ onClose }) {
    const [isLargerThan750] = useMediaQuery('(min-width: 730px)')

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    return (
        <div className='ourservice-outer' style={{ padding: isLargerThan750 ? "2%" : "5%" }}>
            <div className="ourservice-title">Our Services</div>

            <Stack direction="column" spacing={5}>
                <div className='ourservice-row'>
                    <Stack direction="column" width="100%">
                        <Link to="/Digital Technology Transformation">
                            <div className="ourservice-grid-title" onClick={onClose}>
                                Digital Technology Transformation
                            </div>
                        </Link>
                        <div style={{ paddingLeft: "10%" }}>
                            <div className='ourservices-grid-content'>Cyber Security</div>
                            <div className='ourservices-grid-content'>Cloud Storage Solutions</div>
                            <div className='ourservices-grid-content'>Content Management</div>
                            <div className='ourservices-grid-content'>Artifical Intelligence</div>
                        </div>
                    </Stack>

                    <Stack direction="column" width="100%">
                        <Link to="/Compiances Solution">
                            <div className="ourservice-grid-title" onClick={onClose}>
                                Compliances Solution
                            </div>
                        </Link>
                        <div style={{ paddingLeft: "10%" }}>
                            <div className='ourservices-grid-content'>Legal Centre of excellence</div>
                            <div className='ourservices-grid-content'>Evidence tracking & real-time updation.</div>
                            <div className='ourservices-grid-content'>Predictive control & risk score</div>
                            <div className='ourservices-grid-content'>Cost saving & high quality</div>
                        </div>
                    </Stack>


                    <Stack direction="column" width="100%">
                        <Link to="/Asset Management">
                            <div className='ourservice-grid-title' onClick={onClose}>
                                Asset Management
                            </div>
                        </Link>
                        <div style={{ paddingLeft: "10%" }}>
                            <div className='ourservices-grid-content'>Real- Time Incident Tracking</div>
                            <div className='ourservices-grid-content'>Peformance Audits</div>
                            <div className='ourservices-grid-content'>Regular AMC</div>
                            <div className='ourservices-grid-content'>Breakdown  request  & maintenance</div>
                        </div>
                    </Stack>

                    <Stack direction="column" width="100%">
                        <Link to="/Corporate Fraud & Forensic Investigation">
                            <div className='ourservice-grid-title' onClick={onClose}>
                                Corporate Fraud & Forensic Investigation
                            </div>
                        </Link>
                        <div style={{ paddingLeft: "10%" }}>
                            <div className='ourservices-grid-content'>Forensic Diagnostic</div>
                            <div className='ourservices-grid-content'>Market Intelligence</div>
                            <div className='ourservices-grid-content'>Fraud Risk Management</div>
                            <div className='ourservices-grid-content'>Whistleblower Hotline</div>
                        </div>
                    </Stack>


                    {/* <Stack direction="column" width="100%">
                        <Link to="/Tax Solution">
                            <div className='ourservice-grid-title' onClick={onClose}>
                                Tax Solution
                            </div>
                        </Link>
                        <div className='ourservices-grid-content'>Tax Policy & controversy</div>
                        <div className='ourservices-grid-content'>Clear Finace Cloud</div>
                        <div className='ourservices-grid-content'>ITR Filling</div>
                        <div className='ourservices-grid-content'>Tax  Consultants</div>
                    </Stack> */}
                </div>


                <div className='ourservice-row'>

                    <Stack direction="column" width="100%">
                        <Link to="/Facility Management">
                            <div className='ourservice-grid-title' onClick={onClose}>
                                Facility Management
                            </div>
                        </Link>
                        <div style={{ paddingLeft: "10%" }}>
                            <div className='ourservices-grid-content'>Integrated facility Management</div>
                            <div className='ourservices-grid-content'>Product installation & servicing solution</div>
                        </div>
                    </Stack>


                    <Stack direction="column" width="100%">
                        <Link to="/People Services">
                            <div className='ourservice-grid-title' onClick={onClose}>
                                People Services
                            </div>
                        </Link>
                        <div style={{ paddingLeft: "10%" }}>
                            <div className='ourservices-grid-content'>Home salon</div>
                            <div className='ourservices-grid-content'>Interior Designing</div>
                            <div className='ourservices-grid-content'>Electronic appliance Repair</div>
                            <div className='ourservices-grid-content'>Cleaning & Pest Control</div>
                        </div>
                    </Stack>

                    <Stack direction="column" width="100%">
                        <Link to="/Anti - Counterfeiting Solution">
                            <div className='ourservice-grid-title' onClick={onClose}>
                                Anti - Counterfeiting Solution
                            </div>
                        </Link>
                        <div style={{ paddingLeft: "10%" }}>
                            <div className='ourservices-grid-content'>Litigation Support </div>
                            <div className='ourservices-grid-content'>Tactical Publicity campaigns</div>
                            <div className='ourservices-grid-content'>Jurisdictional Raid Action</div>
                            <div className='ourservices-grid-content'>Post Raid Activity</div>
                        </div>
                    </Stack>

                    <Stack direction="column" width="100%">
                        <Link to="/Non - Technical Service">
                            <div className='ourservice-grid-title' onClick={onClose}>
                                Non - Technical Service
                            </div>
                        </Link>
                        <div style={{ paddingLeft: "10%" }}>
                            <div className='ourservices-grid-content'>Health Care </div>
                            <div className='ourservices-grid-content'>Food Service</div>
                            <div className='ourservices-grid-content'>Aviation</div>
                            <div className='ourservices-grid-content'>Payroll</div>
                        </div>
                    </Stack>


                </div>
                <div style={{ width: "50%", display: "flex", justifyContent: "space-between" }}>
                    {/* <Stack direction="column" width="100%" display="flex" justifyContent="center">
                        <Link to="/Private Security Guarding">
                            <div className='ourservice-grid-title' onClick={onClose}>
                                Private Security Guarding
                            </div>
                        </Link>
                        <div className='ourservices-grid-content'>Security Risk Analysis</div>
                        <div className='ourservices-grid-content'>Beat Patrols / Quicks Reaction Team</div>
                        <div className='ourservices-grid-content'>Security for event management</div>
                        <div className='ourservices-grid-content'>Regular Security Advisories</div>
                    </Stack> */}

                    <Stack direction="column" width="100%">
                        <Link to="/Background Check Service">
                            <div className='ourservice-grid-title' onClick={onClose}>
                                Background Check Service
                            </div>
                        </Link>
                        <div style={{ paddingLeft: "10%" }}>
                            <div className='ourservices-grid-content'>Data-Base Verification</div>
                            <div className='ourservices-grid-content'>Criminal Record Verification</div>
                            <div className='ourservices-grid-content'>Education Certificate Verificaton</div>
                            <div className='ourservices-grid-content'>Drug Test</div>
                        </div>
                    </Stack>

                    <Stack direction="column" width="100%" display="flex" justifyContent="center">
                        <Link to="/Private Security Guarding">
                            <div className='ourservice-grid-title' onClick={onClose}>
                                Private Security Guarding
                            </div>
                        </Link>
                        <div style={{ paddingLeft: "10%" }}>
                            <div className='ourservices-grid-content'>Security Risk Analysis</div>
                            <div className='ourservices-grid-content'>Beat Patrols / Quicks Reaction Team</div>
                            <div className='ourservices-grid-content'>Security for event management</div>
                            <div className='ourservices-grid-content'>Regular Security Advisories</div>
                        </div>
                    </Stack>
                </div>
            </Stack >
            {/* <div className='ourservice-row'
                
    </div>*/}
        </div >
    )
}

