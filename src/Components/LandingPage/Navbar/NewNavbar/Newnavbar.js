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
    PopoverAnchor, Portal
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
import { AiOutlineMenu } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { AiFillCaretRight } from 'react-icons/ai';



export default function Newnavbar() {

    const { isOpen, onOpen, onClose } = useDisclosure()
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
                                <Link to="/People Services/Work As Expert"><div style={{ cursor: "pointer" }}>Register As Professional</div></Link>
                                <div style={{ width: "0.1rem", backgroundColor: "white" }} />
                                <div style={{ cursor: "pointer" }}>Contact</div>
                            </Stack>
                        </div>
                        <div>


                            <Popover closeOnBlur={false} placement='bottom-start' trigger='hover' cursor="pointer">
                                {({ isOpen, onClose }) => (
                                    <>
                                        <PopoverTrigger>
                                            <div _hover={{ backgroundColor: "transparent" }}>
                                                <Stack direction="row" spacing={1} display="flex" alignItems="center" justifyContent="right" padding="2%" cursor="pointer">
                                                    {langImg === "world" ? <TfiWorld size={22} /> : <img src={langImg} />}
                                                    <div className='x-language'>{langName} <label style={{ color: "white", cursor: "pointer" }}>({lang})</label></div>
                                                    <MdKeyboardArrowDown size="5%" />
                                                </Stack>
                                            </div>
                                        </PopoverTrigger>
                                        <Portal>
                                            <PopoverContent border="1px solid black" color="black" width="fit-content">
                                                {/* <PopoverArrow /> */}
                                                <PopoverCloseButton size={10} margin="5%" />
                                                <Navlang onClose={onClose} lang={lang} langImg={langImg} langName={langName} setLang={setLang} setLangImg={setLangImg} setLangName={setLangName} />
                                            </PopoverContent>

                                        </Portal>
                                    </>
                                )}
                            </Popover>
                        </div>
                    </div>
                </div>
                <div className='x-inner-bottom'>
                    <div className='x-inner-bottom-content'>
                        <div className="x-inner-bottom-content-left">
                            <div>
                                <AiOutlineMenu size="35%" cursor="pointer" ref={btnRef} onClick={onOpen} />
                                <Drawer
                                    isOpen={isOpen}
                                    placement='left'
                                    onClose={onClose}
                                    finalFocusRef={btnRef}
                                    size="xs"

                                >
                                    <DrawerOverlay />
                                    <DrawerContent>
                                        <DrawerCloseButton focusBorderColor="white" _hover={{ backgroundColor: "white" }} size={5} padding="5%" />
                                        <DrawerHeader marginTop="10%" display="flex" justifyContent="left"><div className="x-drawer-title">AGAMEMNON</div></DrawerHeader>
                                        <DrawerBody>
                                            <Stack direction="column" spacing={5} display="flex" width="100%" justifyContent="center" paddingLeft="5%">
                                                <div style={{ display: "flex", alignItems: "center", width: "70%" }}>
                                                    <div className='x-drawer-items'>Industries</div>
                                                    <AiFillCaretRight style={{ marginLeft: "20%" }} />
                                                </div>

                                                <div style={{ display: "flex", alignItems: "center", width: "70%" }}>
                                                    <div className='x-drawer-items'>Solutions</div>
                                                    <AiFillCaretRight style={{ marginLeft: "20%" }} />
                                                </div>

                                                <div style={{ display: "flex", alignItems: "center", width: "70%" }}>
                                                    <div className='x-drawer-items'>Our Services</div>
                                                    <AiFillCaretRight style={{ marginLeft: "20%" }} />
                                                </div>

                                                <div style={{ display: "flex", alignItems: "center", width: "70%" }}>
                                                    <div className='x-drawer-items'>Careers</div>
                                                    <AiFillCaretRight style={{ marginLeft: "20%" }} />
                                                </div>
                                            </Stack>

                                            <div style={{ width: "100%", height: "0.05rem", backgroundColor: "grey", marginTop: "10%" }} />

                                            <Stack direction="column" spacing={5} display="flex" width="100%" justifyContent="center" paddingLeft="5%" marginTop="5%">
                                                <div style={{ display: "flex", alignItems: "center", width: "70%", justifyContent: "space-between" }}>
                                                    <div className='x-drawer-items'>Where to find us</div>
                                                    <AiFillCaretRight />
                                                </div>

                                                <div style={{ display: "flex", alignItems: "center", width: "70%" }}>
                                                    <div className='x-drawer-items'>Partners</div>
                                                    <AiFillCaretRight style={{ marginLeft: "20%" }} />
                                                </div>

                                                <div style={{ display: "flex", alignItems: "center", width: "70%" }}>
                                                    <div className='x-drawer-items'>Offers</div>
                                                    <AiFillCaretRight style={{ marginLeft: "20%" }} />
                                                </div>

                                                <div style={{ display: "flex", alignItems: "center", width: "70%" }}>
                                                    <div className='x-drawer-items'>Policies</div>
                                                    <AiFillCaretRight style={{ marginLeft: "20%" }} />
                                                </div>

                                                <div style={{ display: "flex", alignItems: "center", width: "70%" }}>
                                                    <div className='x-drawer-items'>Contact</div>
                                                    <AiFillCaretRight style={{ marginLeft: "20%" }} />
                                                </div>

                                                <div style={{ width: "100%", height: "0.05rem", backgroundColor: "grey", marginTop: "10%" }} />


                                            </Stack>
                                        </DrawerBody>

                                    </DrawerContent>
                                </Drawer>


                            </div>
                            <Link to="/">
                                <div className='x-inner-bottom-content-title'>AGAMEMNON</div>
                            </Link>
                        </div>
                        <div className="x-inner-bottom-content-right">

                            <Popover style={{ width: "100%" }} focusBorderColor="black" trigger="hover" placement='bottom-start'>
                                <PopoverTrigger>
                                    <Stack direction="row" display="flex" alignItems="center">
                                        <div className='x-inner-bottom-content-right-text'>Industries</div>
                                        <ChevronDownIcon boxSize={5} />
                                    </Stack>
                                </PopoverTrigger>
                                <PopoverContent style={{ padding: "3%" }} focusBorderColor="black">
                                    <PopoverArrow />
                                    <PopoverCloseButton _hover={{ backgroundColor: "transparent" }} paddingTop="2%" paddingRight="4%" />
                                    <Link to="/People Services/Home Salon"><div className='x-inner-bottom-menu-text'>Home Salon</div></Link>
                                    <Link to="/People Services/Interior Designing"><div className='x-inner-bottom-menu-text'>Interior Designing</div></Link>
                                    <Link to="/People Services/Electronic Appliances Repair"> <div className='x-inner-bottom-menu-text'>Electronic appliance Repair</div></Link>
                                    <Link to="/People Services/Cleaning & Pest Control"> <div className='x-inner-bottom-menu-text'>Cleaning & Pest Control</div></Link>
                                    <Link to="/People Services/Painting"> <div className='x-inner-bottom-menu-text'>Painting</div></Link>
                                    <Link to="/People Services/Electronics and Carpenter Service">  <div className='x-inner-bottom-menu-text'>Electronics & Carpenter Service</div></Link>

                                </PopoverContent>
                            </Popover>





                            <Popover closeOnBlur={false} placement='bottom' trigger='hover'>
                                {({ isOpen, onClose }) => (
                                    <>
                                        <PopoverTrigger>
                                            <Stack direction="row" display="flex" alignItems="center">
                                                <div className='x-inner-bottom-content-right-text'>Solutions</div>
                                                <ChevronDownIcon boxSize={5} />
                                            </Stack>
                                        </PopoverTrigger>
                                        <Portal>
                                            <PopoverContent style={{ width: "fit-content", padding: "2%" }} focusBorderColor="black">
                                                <PopoverArrow />
                                                <PopoverCloseButton _hover={{ backgroundColor: "transparent" }} paddingTop="2%" paddingRight="4%" />
                                                <Ourservice onClose={onClose} />
                                            </PopoverContent>
                                        </Portal>
                                    </>
                                )}
                            </Popover>




                            {/* <Menu>
                                <MenuButton backgroundColor="transparent" _hover={{ backgroundColor: "white" }}>
                                    <Stack direction="row" display="flex" alignItems="center">
                                        <div className='x-inner-bottom-content-right-text'>Our Services</div>
                                        <ChevronDownIcon boxSize={5} />
                                    </Stack>
                                </MenuButton>
                                <MenuList width="50%">
                                    <Link to="/People Services/Home Salon"><MenuItem width="fit-content"> <div className='x-inner-bottom-menu-text'>Home Salon</div></MenuItem></Link>
                                    <Link to="/People Services/Interior Designing"><MenuItem width="fit-content" > <div className='x-inner-bottom-menu-text'>Interior Designing</div></MenuItem></Link>
                                    <Link to="/People Services/Electronic Appliances Repair"> <MenuItem width="fit-content"> <div className='x-inner-bottom-menu-text'>Electronic appliance Repair</div></MenuItem></Link>
                                    <Link to="/People Services/Cleaning & Pest Control"> <MenuItem width="fit-content"> <div className='x-inner-bottom-menu-text'>Cleaning & Pest Control</div></MenuItem></Link>
                                    <Link to="/People Services/Painting"><MenuItem width="fit-content"> <div className='x-inner-bottom-menu-text'>Painting</div></MenuItem></Link>
                                    <Link to="/People Services/Electronics and Carpenter Service"> <MenuItem width="fit-content"> <div className='x-inner-bottom-menu-text'>Electronics & Carpenter Service</div></MenuItem></Link>
                                </MenuList>
                            </Menu> */}



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
