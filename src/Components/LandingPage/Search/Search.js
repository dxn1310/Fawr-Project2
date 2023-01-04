import React, { useState } from 'react';
import { nanoid } from 'nanoid'
import "./Search.css";
import { Stack, Input, Button, InputGroup } from '@chakra-ui/react'
import Search_img1 from "./SearchImages/Search_img1.png"

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
                    link: "/People Services/Booking/OTP",
                    types: ["Home Salon", "Painting", "Interior Design"],
                },

                {

                    name: "Compliance Services",
                    link: "/People Services/Booking/OTP",
                    types: ["Predictive control & risk score", "Cost saving & high quality"],
                },
                {
                    name: "Asset Management",
                    link: "/People Services/Booking/OTP",
                    types: ["Real- Time Incident Tracking", "Peformance Audits", "Maintenace checklist & MIS", "Regular AMC"],
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
                },
            ]
        },

        {
            location: "New Delhi",
            services: [
                {
                    name: "Facility Management",
                    link: "/People Services/Booking/OTP",
                    types: ["Integrated facility Management"],
                },
                {
                    name: "Non- Technical Service",
                    link: "/People Services/Booking/OTP",
                    types: ["Health Care", "Food Service", "Aviation", "Payroll"],
                },
            ]
        },

        {
            location: "Tirupati",
            services: [
                {
                    name: "Facility Management",
                    link: "/People Services/Booking/OTP",
                    types: ["Integrated facility Management"],
                },
            ]
        }
    ]


    const [serviceInput, setServiceInput] = useState("");
    const [selectedLocation, setSelectedLocation] = useState(0)
    const [selectedService, setService] = useState(0)
    const [currentServiceTypes, setCurrentServiceTypes] = useState()


    return (
        <div className='search-outer'>
            <img className='search-bgimg' src={Search_img1} />
            <div className='search-x'>
                <div className='search-inner'>
                    <div className='search-inner-content'>
                        <div className='search-title'>
                            Create a recognition-rich culture with us.
                        </div>
                        <InputGroup width="60%"
                            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
                            borderRadius="0.5rem"
                            padding="0.5%"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            backgroundColor="white"
                            marginTop="5%">
                            <Menu>
                                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} width="20%"
                                    borderRadius="0.5rem"
                                    barderRight="black"
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    backgroundColor="white"
                                >
                                    {locations[selectedLocation]}
                                </MenuButton>


                                <MenuList>
                                    {
                                        locations.map((loc, index) => {
                                            return <MenuItem onClick={(e) => setSelectedLocation(index)} key={nanoid()}>{loc}</MenuItem>
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
                                        height="fit-content"
                                        width="90%"
                                        // paddingRight="1%"
                                        _placeholder={{ fontSize: "1rem" }}
                                        onChange={(e) => { setServiceInput(e.target.value) }}
                                    />
                                </div>

                                <Button
                                    backgroundColor="#407BFF"
                                    borderRadius="0.5rem"
                                    color="white"
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
                                    <div className='serach-available-services-inner'>
                                        {
                                            availableServices[selectedLocation].services[selectedService].types.map(type => <div className="search-service-type">{type}</div>)
                                        }
                                    </div>
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