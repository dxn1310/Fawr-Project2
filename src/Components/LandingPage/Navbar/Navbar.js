import React from 'react';
import "./Navbar.css";
import { TfiWorld } from "react-icons/tfi";
import { FiHome } from "react-icons/fi";

import {
    Popover,
    Portal,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow, useDisclosure, Button, Box, Text, PopoverCloseButton
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
                <div className='navbar-bottom-content'>
                    <Link to="/">
                        <label><FiHome size={45} cursor="pointer" /></label>
                    </Link>

                    <Popover trigger="hover" closeOnBlur={false} openDelay="500ms" arrowSize="15" closeDelay="500ms" width="100%" backgroundColor="white">
                        {({ isOpen, onClose }) => (
                            <>
                                <PopoverTrigger>
                                    <Button value="2" backgroundColor='transparent' width='8.3125rem' fontWeight='400' height='2.1875rem' fontSize='1.875rem' _hover={{ bg: 'transparent' }}>
                                        <Text fontSize="2rem" fontWeight="500">Our Service</Text>
                                    </Button>
                                </PopoverTrigger>
                                <Portal width="100%">
                                    <PopoverContent style={{ transition: '0.2s', width: "fit-content", height: 'fit-content' }}>

                                        <PopoverArrow />
                                        <PopoverCloseButton size={20} padding="2%" />
                                        <Box p="2rem" color='black' bg='white' width="100%">
                                            {
                                                <Ourservice onClose={onClose} />
                                                // <Corporate_dropdown  />
                                            }
                                        </Box>
                                    </PopoverContent>
                                </Portal>
                            </>
                        )
                        }
                    </Popover >
                    <Link to="Sustainability">
                        <Button value="2" backgroundColor='transparent' width='8.3125rem' fontWeight='400' height='2.1875rem' fontSize='1.875rem' _hover={{ bg: 'transparent' }}>
                            <Text fontSize="2rem" fontWeight="500">Sustainability</Text>
                        </Button>
                    </Link>

                    <Link to="/Careers Main">
                        <Button value="2" backgroundColor='transparent' width='8.3125rem' fontWeight='400' height='2.1875rem' fontSize='1.875rem' _hover={{ bg: 'transparent' }}>
                            <Text fontSize="2rem" fontWeight="500">Careers</Text>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

