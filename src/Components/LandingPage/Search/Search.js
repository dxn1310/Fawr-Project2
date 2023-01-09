import React, { useState } from 'react';
import { nanoid } from 'nanoid'
import "./Search.css";
import { Stack, Input, Button, InputGroup } from '@chakra-ui/react'
import Search_img1 from "./SearchImages/Search_img1.png"

import Homesalon_img from "./SearchImages/Homesalon_img.png"
import Painting_img from "./SearchImages/Painting_img.png"
import Interiordesign_img from './SearchImages/Interiordesign_img.png';

import Predictive_img from './SearchImages/Predictive_img.png';
import Cost_img from './SearchImages/Cost_img.png';

import Real_img from "./SearchImages/Real_img.png"
import Performance_img from "./SearchImages/Performance_img.png"
import Maintainence_img from "./SearchImages/Maintainence_img.png"
import Regular_img from "./SearchImages/Regular_img.png"

import Integrated_img from "./SearchImages/Integrated_img.png"

import Health_img from "./SearchImages/Health_img.png"
import Food_img from "./SearchImages/Food_img.png"
import Aviation_img from "./SearchImages/Aviation_img.png"
import Payrol_img from "./SearchImages/Payrol_img.png"

import Cyber_img from "./SearchImages/Cyber_img.png"
import Ai_img from "./SearchImages/Ai_img.png"


import { NavLink as Link } from 'react-router-dom';
import {
    Menu, Divider,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

import { useMediaQuery } from '@chakra-ui/react'

export default function Search() {
    const services = ["Digital Technology Transformation",
        "Compliances Solution",
        "Asset Management",
        "Corporate Fraud & Forensic Investigation",
        "Tax Solution",
        "Facility Management",
        "People Services",
        "Anti- Counterfeiting Solution",
        "Non- Technical Service",
        "Background Check Service",
        "Private Security Guarding",
        "We dont provide this service"]

    const locations = [
        "Bangalore",
        "Chennai",
        "Pune",
        "New Delhi",
        "Tirupati"
    ]

    const availableServices = [

        {
            location: "Bangalore",
            services: [
                {
                    name: "People Services",
                    link: "/People Services",
                    types: ["Home Salon", "Painting", "Interior Design"],
                    typeIcons: [Homesalon_img, Painting_img, Interiordesign_img,]
                },

                {

                    name: "Compliance Services",
                    link: "/Compiances Solution",
                    types: ["Predictive control & risk score", "Cost saving & high quality"],
                    typeIcons: [Predictive_img, Cost_img,]
                },
                {
                    name: "Asset Management",
                    link: "/Asset Management",
                    types: ["Real- Time Incident Tracking", "Peformance Audits", "Maintenace checklist & MIS", "Regular AMC"],
                    typeIcons: [Real_img, Performance_img, Maintainence_img, Regular_img]
                },


            ]
        },

        {
            location: "Chennai",
            services: [
                {
                    name: "People Services",
                    link: "/People Services",
                    types: ["Home Salon", "Painting", "Interior Design"],
                    typeIcons: [Homesalon_img, Painting_img, Interiordesign_img,]
                },

                // {
                //     name: "Compliance Services",
                //     link: "/People Services/Booking/OTP",
                //     types: ["Predictive control & risk score", "Cost saving & high quality"],
                //     typeIcons: [Predictive_img, Cost_img,]
                // },
                {
                    name: "Asset Management",
                    link: "/People Services/Booking/OTP",
                    types: ["Real- Time Incident Tracking", "Peformance Audits", "Maintenace checklist & MIS", "Regular AMC"],
                    typeIcons: [Real_img, Performance_img, Maintainence_img, Regular_img]
                },


            ]
        },

        {
            location: "Pune",
            services: [
                {
                    name: "Facility Management",
                    link: "/People Services/Booking/OTP",
                    types: ["Integrated facility Management"],
                    typeIcons: [Integrated_img]
                },
            ]
        },

        {
            location: "New Delhi",
            services: [
                {
                    name: "Facility Management",
                    link: "/Facility Management",
                    types: ["Integrated facility Management"],
                    typeIcons: [Integrated_img]
                },
                {
                    name: "Non - Technical Service",
                    link: "/Non - Technical Service",
                    types: ["Health Care", "Food Service", "Aviation", "Payroll"],
                    typeIcons: [Health_img, Food_img, Aviation_img, Payrol_img]
                },
            ]
        },

        {
            location: "Tirupati",
            services: [
                {
                    name: "Digital Technology Transformation",
                    link: "/Digital Technology Transformation",
                    types: ["Cyber Security", "Artifical Intelligence"],
                    typeIcons: [Cyber_img, Ai_img,]
                },
            ]
        }
    ]


    const [serviceInput, setServiceInput] = useState("");
    const [selectedLocation, setSelectedLocation] = useState(0)
    const [selectedService, setService] = useState(0)
    const [currentServiceTypes, setCurrentServiceTypes] = useState()

    const [isLargerThan800] = useMediaQuery('(min-width: 730px)')
    return (
        <div className='search-outer'>
            <img className='search-bgimg' src={Search_img1} />
            <div className='search-x'>
                <div className='search-inner'>
                    <div className='search-inner-content'>
                        <div className='search-title'>
                            Create a recognition-rich culture with us.
                        </div>
                        <InputGroup
                            width={isLargerThan800 ? "60%" : "50%"}
                            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
                            borderRadius="0.5rem"
                            padding={isLargerThan800 ? "0.5%" : "0%"}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            backgroundColor="white"
                            marginTop="2%"
                            height={isLargerThan800 ? "fit-content" : "1rem"}
                        >
                            <Menu >
                                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} width="30%"
                                    display={isLargerThan800 ? "flex" : "none"}
                                    borderRadius="0.5rem"
                                    barderRight="black"
                                    // display="flex"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    backgroundColor="white"
                                    height="fit-content"
                                    _hover={{ backgroundColor: "white" }}
                                    _focus={{ backgroundColor: "white" }}
                                    padding="1%"
                                >

                                    <div className='menu-text'>
                                        {locations[selectedLocation]}
                                    </div>
                                </MenuButton>


                                <MenuList>
                                    {
                                        locations.map((loc, index) => {
                                            return <MenuItem onClick={(e) => setSelectedLocation(index)} key={nanoid()}><div className='menu-text'>{loc}</div></MenuItem>
                                        })
                                    }
                                </MenuList>
                            </Menu>
                            {/* <div style={{ width: "2rem", height: "100%", backgroundColor: "black" }}>rgr</div> */}
                            <Divider orientation='vertical' />
                            <div className='search-box'>
                                <div style={{ width: "90%" }}>
                                    <Input
                                        border="none"
                                        placeholder='Find services...'
                                        focusBorderColor="white"
                                        height="1rem"

                                        width="90%"
                                        // paddingRight="1%"
                                        _placeholder={{ fontSize: isLargerThan800 ? "0.8rem" : "0.5rem" }}
                                        onChange={(e) => { setServiceInput(e.target.value) }}
                                    />
                                </div>

                                <Button
                                    backgroundColor="#407BFF"
                                    borderRadius="0.5rem"
                                    color="white"
                                    height="fit-content"
                                    marginRight="1%"
                                    padding="1%"
                                // width="fit-content"
                                >
                                    <div className='search-btn-text'>
                                        Search
                                    </div>
                                </Button>
                            </div>
                        </InputGroup>

                        <div className='search-options'>
                            <Link to="">
                                <div className='search-option-text'>
                                    People Services
                                </div>
                            </Link>

                            <Link to="">
                                <div className='search-option-text'>
                                    Compliances Solution
                                </div>
                            </Link>

                            <Link to="">
                                <div className='search-option-text'>
                                    Facility Management
                                </div>
                            </Link>

                            <Link to="">
                                <div className='search-option-text'>
                                    Digital Technology Transformation
                                </div>
                            </Link>
                        </div>


                        <Menu >
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} width="30%"
                                display={isLargerThan800 ? "none" : "flex"}
                                borderRadius="0.5rem"
                                barderRight="black"
                                justifyContent="space-between"
                                alignItems="center"
                                backgroundColor="white"
                                height="fit-content"
                                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
                                marginTop="1%"
                            >

                                <div className='menu-text'>
                                    {locations[selectedLocation]}
                                </div>
                            </MenuButton>


                            <MenuList>
                                {
                                    locations.map((loc, index) => {
                                        return <MenuItem onClick={(e) => setSelectedLocation(index)} key={nanoid()}><div className='menu-text'>{loc}</div></MenuItem>
                                    })
                                }
                            </MenuList>
                        </Menu>
                        {
                            <div className='search-available-outer'>
                                <div className='search-available-text'>
                                    Available Services in {locations[selectedLocation]} :
                                </div>
                                <div className='search-available-inner'>
                                    {
                                        availableServices[selectedLocation].services
                                            .map((service, index) => (
                                                <div className='search-available-service-name' onClick={(e) => setService(index)}>
                                                    {service.name}
                                                </div>
                                            ))
                                    }
                                </div>

                                <div className='search-services-available'>
                                    <Stack direction="row" spacing={2} width="90%">
                                        <div className='serach-available-services-inner'>
                                            {
                                                availableServices[selectedLocation].services[selectedService].typeIcons.map((icon, index) => <Link to={availableServices[selectedLocation].services[selectedService].link}>
                                                    <>
                                                        <div style={{ display: "flex", justifyContent: "center" }}><img className="search-icon" src={icon} /></div>
                                                        <div className="search-service-type">
                                                            {availableServices[selectedLocation].services[selectedService].types[index]}
                                                        </div>
                                                    </>
                                                </Link>)
                                            }
                                        </div>
                                    </Stack>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div >

        </div >
    )
}


{/* <div className='search-options'>
    {
        availableServices[selectedLocation].services
            .map((service, index) => (
                <div className='search-option-text' onClick={(e) => setService(index)}>
                    {service.name}
                </div>
            ))

    }
</div> */}