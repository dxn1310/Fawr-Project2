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
                    <div className='ECselection-content-title'>Select Service</div>
                    <Stack direction="row" spacing={5} marginTop="5%" width="100%" display="flex" justifyContent="center">
                        <Button width="45%"
                            height="fit-content"
                            fontWeight="400"
                            color="white"
                            backgroundColor="#2B7FFF"
                            borderRadius="1rem"
                            padding="2%"><Link to="/People Services/Electronics and Carpenter Service/Electronic"><div className="ECselection-btn-text">Electronics</div></Link></Button>
                        <Button width="45%"
                            height="fit-content"
                            fontWeight="400"
                            color="white"
                            backgroundColor="#2B7FFF"
                            borderRadius="1rem"
                            padding="2%"><Link to="/People Services/Electronics and Carpenter Service/Carpenter"><div className="ECselection-btn-text">Carpenter</div></Link></Button>
                    </Stack>
                </div>

            </div>

        </div>
    )
}
