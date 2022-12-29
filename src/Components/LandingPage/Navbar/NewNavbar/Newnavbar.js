import React, { useState } from 'react'
import "./Newnavbar.css"
import Ourservice from '../NavbarOptions/OurService/Ourservice'
import { Stack, Button, Box, useDisclosure, Input } from '@chakra-ui/react'
import { HamburgerIcon, ArrowForwardIcon, ChevronDownIcon } from '@chakra-ui/icons'

import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
} from '@chakra-ui/react'

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'

import { NavLink as Link } from 'react-router-dom'

import Navlang from './NavbarLanguages/Navlang'
import { TfiWorld } from "react-icons/tfi";

export default function Newnavbar() {
    const { isOpen1, onToggle } = useDisclosure()
    const { isOpen2, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const [langImg, setLangImg] = useState("world")
    const [langName, setLangName] = useState("Global")
    const [lang, setLang] = useState("English")

    return (
        <div className='x-outer'>
            <div className='x-inner'>
                <div className='x-inner-top'>
                    <div className='x-inner-top-content'>
                        <div>
                            <Stack direction="row" spacing={3}>
                                {/* <div style={{ width: "0.1rem", backgroundColor: "white" }} /> */}
                                <Link to="/People Services/Work As Expert"><div style={{ cursor: "pointer" }}>Register As Professional</div></Link>
                                <div style={{ width: "0.1rem", backgroundColor: "white" }} />
                                <div style={{ cursor: "pointer" }}>Contact</div>
                            </Stack>
                        </div>
                        <div>
                            {/* <Stack direction="row" spacing={10} width="100%"> */}
                            <Popover placement='bottom-end'>
                                <PopoverTrigger>
                                    <Button onClick={onToggle}
                                        color="white"
                                        backgroundColor="transparent"
                                        _hover={{ backgroundColor: "transparent" }}>
                                        <Stack direction="row" spacing={1}>
                                            <Stack direction="row" spacing={2} display="flex" alignItems="center">
                                                {langImg === "world" ? <TfiWorld /> : <img src={langImg} />}
                                                <div className='navlang-language'>{langName} <label style={{ color: "white" }}>({lang})</label></div>
                                            </Stack>
                                            <ChevronDownIcon boxSize={5} />
                                        </Stack>
                                    </Button>
                                </PopoverTrigger>

                                <PopoverContent border="1px solid black" color="black" width="70rem">
                                    <PopoverCloseButton size={10} margin="5%" />
                                    <Navlang lang={lang} langImg={langImg} langName={langName} setLang={setLang} setLangImg={setLangImg} setLangName={setLangName} />
                                </PopoverContent>
                            </Popover>
                            {/* </Stack> */}
                        </div>
                    </div>
                </div>
                <div className='x-inner-bottom'>
                    <div className='x-inner-bottom-content'>
                        <div className="x-inner-bottom-content-left">
                            <div>
                                <HamburgerIcon ref={btnRef} onClick={onOpen} boxSize={10} _hover={{ transform: "scale(1.05)", transition: "1ms", cursor: "pointer" }} />
                                <Drawer
                                    isOpen={isOpen2}
                                    placement='left'
                                    onClose={onClose}
                                    finalFocusRef={btnRef}
                                >
                                    <DrawerOverlay />
                                    <DrawerContent>
                                        <DrawerCloseButton size={5} padding="5%" />
                                        <DrawerHeader marginTop="10%" display="flex" justifyContent="center"><div className="x-drawer-title">FAWR</div></DrawerHeader>

                                        <DrawerBody>
                                            <Stack direction="column" spacing={5} display="flex" justifyContent="center" width="100%">

                                                <Stack direction="row" display="flex" alignItems="center">
                                                    <div className='x-drawer-items'>Industries</div>
                                                    <ArrowForwardIcon w={5} h={5} color="black" display="flex" alignItems="center" />
                                                </Stack>
                                                <Stack direction="row" display="flex" alignItems="center">
                                                    <div className='x-drawer-items'>Solutions</div>
                                                    <ArrowForwardIcon w={5} h={5} color="black" display="flex" alignItems="center" />
                                                </Stack>
                                                <Stack direction="row" display="flex" alignItems="center">
                                                    <div className='x-drawer-items'>Our Services</div>
                                                    <ArrowForwardIcon w={5} h={5} color="black" display="flex" alignItems="center" />
                                                </Stack>
                                                <Stack direction="row" display="flex" alignItems="center">
                                                    <div className='x-drawer-items'>Careers</div>
                                                    <ArrowForwardIcon w={5} h={5} color="black" display="flex" alignItems="center" />
                                                </Stack>

                                                <div style={{ width: "100%", height: "0.1%", backgroundColor: "black" }} />
                                            </Stack>
                                        </DrawerBody>

                                    </DrawerContent>
                                </Drawer>
                            </div>
                            <Link to="/">
                                <div className='x-inner-bottom-content-title'>FAWR</div>
                            </Link>
                        </div>
                        <div className="x-inner-bottom-content-right">

                            <Stack direction="row" display="flex" alignItems="center">
                                <div className='x-inner-bottom-content-right-text'>Industries</div>
                                <ChevronDownIcon boxSize={5} />
                            </Stack>



                            <Popover style={{ width: "100%" }} trigger="hover" placement='bottom'>
                                <PopoverTrigger>
                                    <Stack direction="row" display="flex" alignItems="center">
                                        <div className='x-inner-bottom-content-right-text'>Solutions</div>
                                        <ChevronDownIcon boxSize={5} />
                                    </Stack>
                                </PopoverTrigger>
                                <PopoverContent style={{ width: "80rem", height: "38rem" }}>
                                    <PopoverArrow />
                                    <PopoverCloseButton size={5} _hover={{ backgroundColor: "transparent" }} paddingTop="2%" paddingRight="4%" />
                                    <PopoverBody>
                                        <Ourservice onClose={onClose} />
                                    </PopoverBody>
                                </PopoverContent>
                            </Popover>




                            <Menu>
                                <MenuButton backgroundColor="transparent" _hover={{ backgroundColor: "white" }}>
                                    <Stack direction="row" display="flex" alignItems="center">
                                        <div className='x-inner-bottom-content-right-text'>Our Services</div>
                                        <ChevronDownIcon boxSize={5} />
                                    </Stack>
                                </MenuButton>
                                <MenuList width="50%">
                                    <Link to="/People Services/Home Salon"><MenuItem>Home Salon</MenuItem></Link>
                                    <Link to="/People Services/Interior Designing"><MenuItem>Interior Designing</MenuItem></Link>
                                    <Link to="/People Services/Electronic Appliances Repair"> <MenuItem>Electronic appliance Repair</MenuItem></Link>
                                    <Link to="/People Services/Cleaning & Pest Control"> <MenuItem>Cleaning & Pest Control</MenuItem></Link>
                                    <Link to="/People Services/Painting"><MenuItem>Painting</MenuItem></Link>
                                    <Link to="/People Services/Electronics and Carpenter Service"> <MenuItem>Electronics & Carpenter Service</MenuItem></Link>
                                </MenuList>
                            </Menu>



                            <Link to="Sustainability">
                                <div className='x-inner-bottom-content-right-text'>Sustainability</div>
                            </Link>

                            <Link to="/Careers Main">
                                <div className='x-inner-bottom-content-right-text'>Careers</div>
                            </Link>

                            <Link to="/Careers Main/Log In">
                                <div className='x-inner-bottom-content-right-text'>Log In</div>
                            </Link>

                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}
