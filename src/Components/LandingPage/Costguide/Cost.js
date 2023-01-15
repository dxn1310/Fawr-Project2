import React from 'react'
import "./Cost.css"

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider, Button, Input
} from '@chakra-ui/react'

import { ChevronDownIcon, Search2Icon } from '@chakra-ui/icons'

import { NavLink as Link } from 'react-router-dom'

import { useMediaQuery } from '@chakra-ui/react'

export default function Cost() {
    const serviceDetails = [

        //Digital technology Transformation
        {
            name: "Cyber Security",
            link: "/Digital Technology Transformation"
        },
        {
            name: "Cloud Storage Solutions",
            link: "/Digital Technology Transformation"
        },
        {
            name: "Content Management",
            link: "/Digital Technology Transformation"
        },
        {
            name: "Artifical Intelligence",
            link: "/Digital Technology Transformation"
        },
        {
            name: "Telecom Network Service",
            link: "/Digital Technology Transformation"
        },


        //Compliance Service
        {
            name: "Legal Centre of excellence",
            link: "/Compiances Solution"
        },
        {
            name: "Evidence tracking & real-time updation.",
            link: "/Compiances Solution"
        },
        {
            name: "Predictive control & risk score",
            link: "/Compiances Solution"
        },
        {
            name: "Cost saving & high quality",
            link: "/Compiances Solution"
        },
        {
            name: "Collaborative & internal checklists",
            link: "/Compiances Solution"
        },




        //Asset Management
        {
            name: "Real- Time Incident Tracking",
            link: "/Asset Management"
        },
        {
            name: "Peformance Audits",
            link: "/Asset Management"
        },
        {
            name: "Regular AMC",
            link: "/Asset Management"
        },
        {
            name: "Breakdown request & maintenance",
            link: "/Asset Management"
        },
        {
            name: " Maintenace checklist & MIS",
            link: "/Asset Management"
        },



        //Corporate Fraud & Forensic Investigation
        {
            name: "Forensic Diagnostic",
            link: "/Corporate Fraud & Forensic Investigation"
        },
        {
            name: "Market Intelligence",
            link: "/Corporate Fraud & Forensic Investigation"
        },
        {
            name: "Fraud Risk Management",
            link: "/Corporate Fraud & Forensic Investigation"
        },
        {
            name: "Whistleblower Hotline",
            link: "/Corporate Fraud & Forensic Investigation"
        },
        {
            name: "Employee Fraud Investigation",
            link: "/Corporate Fraud & Forensic Investigation"
        },
        {
            name: "Disk Imaging and Review",
            link: "/Corporate Fraud & Forensic Investigation"
        },
        {
            name: "WSenior Management Due Diligence",
            link: "/Corporate Fraud & Forensic Investigation"
        },



        //Facility Management
        {
            name: "Integrated facility Management",
            link: "/Facility Management"
        },
        {
            name: "Product installation & servicing solution",
            link: "/Facility Management"
        },



        //People Services
        {
            name: "Home salon",
            link: "/People Services"
        },
        {
            name: "Interior Designing",
            link: "/People Services"
        },
        {
            name: "Electronic appliance Repair",
            link: "/People Services"
        },
        {
            name: "Cleaning & Pest Control",
            link: "/People Services"
        },
        {
            name: "Painting",
            link: "/People Services"
        },
        {
            name: "Electronics & Carpenter Service",
            link: "/People Services"
        },



        //Anti- Counterfeiting Solution
        {
            name: "Litigation Support",
            link: "/Anti - Counterfeiting Solution"
        },
        {
            name: "Tactical Publicity campaigns",
            link: "/Anti - Counterfeiting Solution"
        },
        {
            name: "Jurisdictional Raid Action",
            link: "/Anti - Counterfeiting Solution"
        },
        {
            name: "Post Raid Activity",
            link: "/Anti - Counterfeiting Solution"
        },
        {
            name: "EIPR",
            link: "/Anti - Counterfeiting Solution"
        },
        {
            name: "Market Surveys",
            link: "/Anti - Counterfeiting Solution"
        },
        {
            name: "IPR Investigations",
            link: "/Anti - Counterfeiting Solution"
        },
        {
            name: "Grey Market Evaluation",
            link: "/Anti - Counterfeiting Solution"
        },
        {
            name: "Permanent Monitoring",
            link: "/Anti - Counterfeiting Solution"
        },



        //Non- Technical Service
        {
            name: "Health Care",
            link: "/Non - Technical Service"
        },
        {
            name: "Food Service",
            link: "/Non - Technical Service"
        },
        {
            name: "Aviation",
            link: "/Non - Technical Service"
        },
        {
            name: "Payroll",
            link: "/Non - Technical Service"
        },
        {
            name: "Security Service",
            link: "/Non - Technical Service"
        },




        //Background Check Service
        {
            name: "Data-Base Verification",
            link: "/Background Check Service"
        },
        {
            name: "Criminal Record Verification",
            link: "/Background Check Service"
        },
        {
            name: "Education Certificate Verificaton",
            link: "/Background Check Service"
        },
        {
            name: "Drug Test",
            link: "/Background Check Service"
        },
        {
            name: "Professional Reference Verification",
            link: "/Background Check Service"
        },
        {
            name: "Physical Address Verification",
            link: "/Background Check Service"
        },
        {
            name: "Court Record Verification",
            link: "/Background Check Service"
        },
        {
            name: "Virtual Address Verification",
            link: "/Background Check Service"
        },
        {
            name: "Psychometric Test",
            link: "/Background Check Service"
        },
        {
            name: "Company Business / Financial Check",
            link: "/Background Check Service"
        },
        {
            name: "Exit Management",
            link: "/Background Check Service"
        },
        {
            name: "Medical Evaluations",
            link: "/Background Check Service"
        },



        //Private Security Guarding
        {
            name: "Security Risk Analysis",
            link: "/Private Security Guarding"
        },
        {
            name: "Beat Patrols / Quicks Reaction Team",
            link: "/Private Security Guarding"
        },
        {
            name: "Security for event management",
            link: "/Private Security Guarding"
        },
        {
            name: "Regular Security Advisories",
            link: "/Private Security Guarding"
        },


    ]

    // const [isLargerThan1300] = useMediaQuery('(min-width: 1300px)')
    const [isLargerThan1000] = useMediaQuery('(min-width: 600px)')
    return (
        <div className='cost-outer'>
            <div className='cost-title'>
                Vide Range of Services Available
            </div>
            <div className='cost-text'>
                Use our service guide to get a better look at the services
            </div>
            <Menu style={{ width: "100%" }}>
                <MenuButton as={Button} rightIcon={<Search2Icon />}
                    marginTop="3%"
                    width={isLargerThan1000 ? "30rem" : "15rem"}
                    backgroundColor="white"
                    borderColor="blackAlpha.500"
                    borderWidth="0.2rem"
                    padding='1.5%'
                    display="flex"
                    justifyContent="left"
                    _hover={{ backgroundColor: "white" }}
                >
                    Search a service
                </MenuButton>
                <MenuList style={{ width: isLargerThan1000 ? "30rem" : "15rem", overflowY: "scroll", height: isLargerThan1000 ? "20rem" : "15rem" }}>
                    {
                        serviceDetails.map((service, index) => {
                            return <Link to={service.link}>
                                <MenuItem fontWeight="400" >{service.name}</MenuItem>
                            </Link>
                        })
                    }
                </MenuList>

            </Menu>
        </div >
    )
}
