import React from 'react'
import "./ECselection.css"

import {
    Stack,
    Button
} from '@chakra-ui/react'

import { NavLink as Link } from 'react-router-dom'

export default function ECselection() {
    return (
        <div className='ECselection-outer'>
            <div className='ECselection-inner'>
                <div className='ECselection-content'>
                    <div>Select Service</div>
                    <Stack direction="row" spacing={5} marginTop="5%" width="100%" display="flex" justifyContent="center">
                        <Button width="40%"
                            fontSize="100%"
                            fontWeight="400"
                            color="white"
                            backgroundColor="#2B7FFF"
                            borderRadius="1rem"
                            padding="4%"><Link to="/People Services/Electronics and Carpenter Service/Electronic">Electronics </Link></Button>
                        <Button width="40%"
                            fontSize="100%"
                            fontWeight="400"
                            color="white"
                            backgroundColor="#2B7FFF"
                            borderRadius="1rem"
                            padding="4%"><Link to="/People Services/Electronics and Carpenter Service/Carpenter">Carpenter</Link></Button>
                    </Stack>
                </div>

            </div>

        </div>
    )
}
