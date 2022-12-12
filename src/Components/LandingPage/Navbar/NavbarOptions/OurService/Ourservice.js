import React from 'react'
import "./Ourservice.css"

import {
    Stack, Text
} from '@chakra-ui/react';

import { NavLink as Link } from 'react-router-dom';

export default function Ourservice({ onClose }) {
    return (
        <div className='ourservice-outer'>
            <Text fontSize="2rem" fontWeight="600">Our Services</Text>
            <div className='ourservice-row'>
                <Stack direction="column" width="25%">
                    <Link to="/Digital Technology Transformation">
                        <Text fontSize="1rem" fontWeight="500" color="rgba(43, 127, 255, 1)" onClick={onClose}>
                            Digital Technology Transformation
                        </Text>
                    </Link>
                    <Text>Cyber Security</Text>
                    <Text>Cloud Storage Solutions</Text>
                    <Text>Content Management</Text>
                    <Text>Artifical Intelligence</Text>
                </Stack>

                <Stack direction="column" width="25%">
                    <Link to="/Compiances Solution">
                        <Text fontSize="1rem" fontWeight="500" color="rgba(43, 127, 255, 1)" onClick={onClose}>
                            Compiances Solution
                        </Text>
                    </Link>
                    <Text>Legal Centre of excellence</Text>
                    <Text>Evidence tracking & real-time updation.</Text>
                    <Text>Predictive control & risk score</Text>
                    <Text>Cost saving & high quality</Text>
                </Stack>
                <Stack direction="column" width="25%">
                    <Link to="/Asset Management">
                        <Text fontSize="1rem" fontWeight="500" color="rgba(43, 127, 255, 1)" onClick={onClose}>
                            Asset Management
                        </Text>
                    </Link>
                    <Text>Real- Time Incident Tracking</Text>
                    <Text>Peformance Audits</Text>
                    <Text>Regular AMC</Text>
                    <Text>Breakdown  request  & maintenance</Text>
                </Stack>

                <Stack direction="column" width="25%">
                    <Link to="/Corporate Fraud & Forensic Investigation">
                        <Text fontSize="1rem" fontWeight="500" color="rgba(43, 127, 255, 1)" onClick={onClose}>
                            Corporate Fraud & Forensic Investigation
                        </Text>
                    </Link>
                    <Text>Forensic Diagnostic</Text>
                    <Text>Market Intelligence</Text>
                    <Text>Fraud Risk Management</Text>
                    <Text>Whistleblower Hotline</Text>
                </Stack>
            </div>

            <div className='ourservice-row'>
                <Stack direction="column" width="20%">
                    <Link to="/Tax Solution">
                        <Text fontSize="1rem" fontWeight="500" color="rgba(43, 127, 255, 1)" onClick={onClose}>
                            Tax Solution
                        </Text>
                    </Link>
                    <Text>Tax Policy & controversy</Text>
                    <Text>Clear Finace Cloud</Text>
                    <Text>ITR Filling</Text>
                    <Text>Tax  Consultants</Text>
                </Stack>

                <Stack direction="column" width="20%">
                    <Link to="/Facility Management">
                        <Text fontSize="1rem" fontWeight="500" color="rgba(43, 127, 255, 1)" onClick={onClose}>
                            Facility Management
                        </Text>
                    </Link>
                    <Text>Integrated facility Management</Text>
                    <Text>Product installation & servicing solution</Text>
                </Stack>

                <Stack direction="column" width="20%">
                    <Link to="/People Services">
                        <Text fontSize="1rem" fontWeight="500" color="rgba(43, 127, 255, 1)" onClick={onClose}>
                            People Services
                        </Text>
                    </Link>
                    <Text>Home salon</Text>
                    <Text>Interior Designing</Text>
                    <Text>Electronic appliance Repair</Text>
                    <Text>Cleaning & Pest Control</Text>
                </Stack>

                <Stack direction="column" width="20%">
                    <Link to="/Anti - Counterfeiting Solution">
                        <Text fontSize="1rem" fontWeight="500" color="rgba(43, 127, 255, 1)" onClick={onClose}>
                            Anti - Counterfeiting Solution
                        </Text>
                    </Link>
                    <Text>Litigation Support </Text>
                    <Text>Tactical Publicity campaigns</Text>
                    <Text>Jurisdictional Raid Action</Text>
                    <Text>Post Raid Activity</Text>
                </Stack>

                <Stack direction="column" width="20%">
                    <Link to="/Non - Technical Service">
                        <Text fontSize="1rem" fontWeight="500" color="rgba(43, 127, 255, 1)" onClick={onClose}>
                            Non - Technical Service
                        </Text>
                    </Link>
                    <Text>Health Care </Text>
                    <Text>Food Service</Text>
                    <Text>Aviation</Text>
                    <Text>Payroll</Text>
                </Stack>
            </div>

            <div className='ourservice-row1'>
                <Stack direction="column" width="50%">
                    <Link to="/Background Check Service">
                        <Text fontSize="1rem" fontWeight="500" color="rgba(43, 127, 255, 1)" onClick={onClose}>
                            Background Check Service
                        </Text>
                    </Link>
                    <Text>Data-Base Verification</Text>
                    <Text>Criminal Record Verification</Text>
                    <Text>Education Certificate Verificaton</Text>
                    <Text>Drug Test</Text>
                </Stack>

                <Stack direction="column" width="50%">
                    <Link to="/Private Security Guarding">
                        <Text fontSize="1rem" fontWeight="500" color="rgba(43, 127, 255, 1)" onClick={onClose}>
                            Private Security Guarding
                        </Text>
                    </Link>
                    <Text>Security Risk Analysis</Text>
                    <Text>Beat Patrols / Quicks Reaction Team</Text>
                    <Text>Security for event management</Text>
                    <Text>Regular Security Advisories</Text>
                </Stack>
            </div>
        </div>
    )
}

