import React, { useState } from 'react';
import { nanoid } from 'nanoid'
import "./Search.css";
import { Stack, Input, Button, InputGroup, Center } from '@chakra-ui/react'
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
    MenuDivider, useDisclosure
} from '@chakra-ui/react'
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons'

import { useMediaQuery } from '@chakra-ui/react'


import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'


import { HiLocationMarker } from 'react-icons/hi';




export default function Search() {
    const services = ["Digital Technology Transformation",
        "Compliances Solution",
        "Asset Management",
        "Corporate Fraud & Forensic Investigation",
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
            services: ["People Services", "Compliance Services", "Asset Management"],
            link: ["/People Services", "/Compiances Solution", "/Asset Management"]
        },
        {
            location: "Chennai",
            services: ["People Services", "Asset Management"],
            link: ["/People Services", "/Asset Management"]
        },

        {
            location: "Pune",
            services: ["Facility Management"],
            link: ["/Facility Management"]
        },

        {
            location: "New Delhi",
            services: ["Facility Management", "Non - Technical Service"],
            link: ["/Facility Management", "/Non - Technical Service"]
        },

        {
            location: "Tirupati",
            services: ["Digital Technology Transformation",],
            link: ["/Digital Technology Transformation"]
        }
    ]


    const [serviceInput, setServiceInput] = useState("");
    const [selectedLocation, setSelectedLocation] = useState(0)
    const [selectedService, setService] = useState(0)
    const [currentServiceTypes, setCurrentServiceTypes] = useState()



    const [searchedValue, setSearchedValue] = useState(0)

    const [selectedServiceLink, setSelectedServiceLink] = useState()

    const handleSearch = () => {
        for (const item in availableServices[selectedLocation].services) {
            if (availableServices[selectedLocation].services[item] === serviceInput) {
                setSearchedValue(1)
                setSelectedServiceLink(availableServices[selectedLocation].link[item])
                break;
            }
            else {
                setSearchedValue(2)
            }
        }
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isLargerThan800] = useMediaQuery('(min-width: 730px)')
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')

    return (
        <div className='search-outer'>
            <img className='search-bgimg' src={Search_img1} />
            <div className='search-x'>
                <div className='search-inner'>
                    <div className='search-inner-content'>
                        <div className='search-title'>
                            Professional Service , On Demand
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


                                <MenuList width="fit-content">
                                    <MenuItem onClick={onOpen}><div className='menu-text'>Search Location</div></MenuItem>
                                    <Modal isOpen={isOpen} onClose={onClose}>
                                        <ModalOverlay />
                                        <ModalContent>
                                            <ModalHeader>Select Location</ModalHeader>
                                            <ModalCloseButton />
                                            <ModalBody width="100%" display="flex" flexDirection={isLargerThan600 ? "row" : "column"} justifyContent="center" paddingBottom="5%">

                                                <Button onClick={onClose} variant='ghost' rightIcon={<HiLocationMarker />}
                                                    _hover={{ backgroundColor: "none" }}>
                                                    Current Location
                                                </Button>
                                                <Button variant='ghost' rightIcon={<ChevronRightIcon />} color="purple.500" onClick={onClose}
                                                    _hover={{ backgroundColor: "none" }}>
                                                    Get Using GPS
                                                </Button>

                                            </ModalBody>

                                        </ModalContent>
                                    </Modal>
                                    {
                                        locations.map((loc, index) => {
                                            return <MenuItem onClick={(e) => setSelectedLocation(index)} key={nanoid()}><div className='menu-text'>{loc}</div></MenuItem>
                                        })
                                    }
                                </MenuList>
                            </Menu>
                            <Divider orientation='vertical' />
                            <div className='search-box'>
                                <div style={{ width: "90%" }}>
                                    <Input
                                        border="none"
                                        placeholder='Find services...'
                                        focusBorderColor="white"
                                        height="1rem"
                                        value={serviceInput}
                                        width="90%"
                                        _placeholder={{ fontSize: isLargerThan800 ? "1rem" : "0.3rem" }}
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
                                    onClick={handleSearch}
                                // width="fit-content" 
                                >
                                    <div className='search-btn-text'>
                                        Search
                                    </div>
                                </Button>
                            </div>
                        </InputGroup>


                        <div className='search-options'>
                            {
                                searchedValue === 0 ? <>
                                    <Link to="">
                                        <div className='search-option-text' onClick={(e) => setServiceInput("People Services")}>
                                            People Services
                                        </div>
                                    </Link>

                                    <Link to="">
                                        <div className='search-option-text' onClick={(e) => setServiceInput("Compliances Solution")}>
                                            Compliances Solution
                                        </div>
                                    </Link>

                                    <Link to="">
                                        <div className='search-option-text' onClick={(e) => setServiceInput("Facility Management")}>
                                            Facility Management
                                        </div>
                                    </Link>

                                    <Link to="">
                                        <div className='search-option-text' onClick={(e) => setServiceInput("Digital Technology Transformation")}>
                                            Digital Technology Transformation
                                        </div>
                                    </Link>
                                </> : searchedValue === 1 ? <Link to={selectedServiceLink}>
                                    <div className='search-option-text'>
                                        {serviceInput}
                                    </div>
                                </Link> : <div className='search-option-text' style={{ cursor: "pointer" }} onClick={(e) => setSearchedValue(0)}>
                                    This Service is not in the searched Locations
                                </div>

                            }

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


                            <MenuList width="fit-content">
                                <MenuItem onClick={onOpen}><div className='menu-text'>Search Location</div></MenuItem>
                                <Modal isOpen={isOpen} onClose={onClose}>
                                    <ModalOverlay />
                                    <ModalContent>
                                        <ModalHeader>Select Location</ModalHeader>
                                        <ModalCloseButton />
                                        <ModalBody width="100%" display="flex" justifyContent="center" paddingBottom="5%">

                                            <Button onClick={onClose} variant='ghost' rightIcon={<HiLocationMarker />}
                                                _hover={{ backgroundColor: "none" }}>
                                                Current Location
                                            </Button>
                                            <Button variant='ghost' rightIcon={<ChevronRightIcon />} color="purple.500" onClick={onClose}
                                                _hover={{ backgroundColor: "none" }}>
                                                Get Using GPS
                                            </Button>

                                        </ModalBody>

                                    </ModalContent>
                                </Modal>
                                {
                                    locations.map((loc, index) => {
                                        return <MenuItem onClick={(e) => setSelectedLocation(index)} key={nanoid()}><div className='menu-text'>{loc}</div></MenuItem>
                                    })
                                }
                            </MenuList>
                        </Menu>

                    </div>
                </div>
            </div >

        </div >
    )
}


