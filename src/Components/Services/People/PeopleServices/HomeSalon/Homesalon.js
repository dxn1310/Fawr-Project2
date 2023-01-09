import React from 'react'
import "./Homesalon.css"

import {
    Stack,
    Button
} from '@chakra-ui/react'

import { NavLink as Link } from 'react-router-dom'

export default function Homesalon() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    return (
        <div className='homesalon-outer'>
            <div className='homesalon-inner'>
                <div className='homesalon-content'>
                    <div className='homesalon-content-title'>Select Gender</div>
                    <Stack direction="row" spacing={5} marginTop="5%" width="100%" display="flex" justifyContent="center">
                        <Button
                        width="30%"
                            height="fit-content"
                            fontWeight="400"
                            color="white"
                            backgroundColor="#2B7FFF"
                            borderRadius="0.5rem"
                            padding="2%"><Link to="/People Services/Home Salon/Male"><div className="homesalon-btn-text">Male</div></Link></Button>
                        <Button
                        width="30%"
                            height="fit-content"
                            fontWeight="400"
                            color="white"
                            backgroundColor="#2B7FFF"
                            borderRadius="0.5rem"
                            padding="2%"><Link to="/People Services/Home Salon/Female"><div className="homesalon-btn-text">Female</div></Link></Button>
                    </Stack>
                </div>

            </div>

        </div>
    )
}
