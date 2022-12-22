import React from 'react';
import "./Navbar.css";
import { TfiWorld } from "react-icons/tfi";
import { FiHome } from "react-icons/fi";

import {
    Popover,
    Portal,
    PopoverTrigger,
    PopoverContent, Center,
    PopoverArrow, useDisclosure, Button, Box, PopoverCloseButton
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons'

import { NavLink as Link } from 'react-router-dom';

import Ourservice from './NavbarOptions/OurService/Ourservice.js';

export default function Navbar() {
    return (
        <div className='navbar-outer'>
            <div className='navbar-top'>
                <div className='navbar-top-content'>
                    <div className='navbar-top-content-left'>
                        <label>REACH US</label>
                    </div>
                    <div className='navbar-top-content-right'>
                        <div className='navbar-top-content-right-content'>
                            <TfiWorld />
                            <label>GlOBAL | ENGLISH</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='navbar-bottom'>
                <div className='navbar-bottom-left'>
                    <Link to="/People Services/Work As Expert">
                        <div className='navbar-bottom-left-text'>Register As Professional</div>
                    </Link>
                   
                </div>
                <div className='navbar-bottom-right'>
                    <div className='navbar-bottom-content'>
                        <Link to="/">
                            <div >
                                <FiHome cursor="pointer" />
                            </div>

                        </Link>
                        <div className='navbar-bottom-content-item'>
                            <Popover trigger="hover" closeOnBlur={false} openDelay="500ms" PopoverArrow="none" closeDelay="500ms" width="100%" backgroundColor="white">
                                {({ isOpen, onClose }) => (
                                    <>
                                        <PopoverTrigger>
                                            <Button value="2" backgroundColor='transparent' _hover={{ bg: 'transparent' }}>
                                                <div className="navbar-btn-text" >Our Service</div >
                                            </Button>
                                        </PopoverTrigger>

                                        <Center>
                                            <PopoverContent style={{ transition: '0.2s', width: "100%", height: 'fit-content', borderTopColor: "white", }}>


                                                <PopoverCloseButton padding="5%" />
                                                <Box p="2rem" color='black' bg='white' width="100%">
                                                    {
                                                        <Ourservice onClose={onClose} />

                                                    }
                                                </Box>
                                            </PopoverContent>
                                        </Center>

                                    </>
                                )
                                }
                            </Popover >
                        </div>
                        <div className='navbar-bottom-content-item'>
                            <Link to="Sustainability">
                                <Button value="2" backgroundColor='transparent' _hover={{ bg: 'transparent' }}>
                                    <div className="navbar-btn-text" >Sustainability</div>
                                </Button>
                            </Link>
                        </div>

                        <div className='navbar-bottom-content-item'>
                            <Link to="/Careers Main">
                                <Button value="2" backgroundColor='transparent' _hover={{ bg: 'transparent' }}>
                                    <div className="navbar-btn-text" >Careers</div>
                                </Button>
                            </Link>
                        </div>

                        <div className='navbar-bottom-content-item'>
                            <Link to="/Careers Main/Log In">
                                <Button  borderColor='#2B7FFF' color="#2B7FFF" borderWidth="0.1rem">
                                    Log-In
                                </Button>
                            </Link>
                        </div>

                        <div className='navbar-bottom-content-item'>
                            <Link to="/Careers Main/Sign Up">
                                <Button  backgroundColor='#2B7FFF' color="white">
                                    Sign-Up
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

