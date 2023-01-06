import React from 'react'
import "./Thank.css"
import Thank_img1 from "./ThankImages/Thank_img2.png"
import { Stack } from '@chakra-ui/react'
import { NavLink as Link } from 'react-router-dom'

export default function Thank() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    return (
        <div className='thank-outer'>
            <img className='thank-bgimg' src={Thank_img1} />
            <div className='thank-content'>
                <Stack direction="column" spacing={1}>
                    <div className='thank-content-text'>
                        Your Order has been placed.
                    </div>
                    <div className='thank-content-text'>
                        Order ID- R673001488
                    </div>
                </Stack>
                <div className='thank-text'>
                    To return to the home page,<Link to="/"><div style={{ color: "#2B7FFF" }}>click here</div></Link>
                </div>
                <div className='thank-text'>
                    To Track Order,<Link to="/People Services/Booking/Tracking"><div style={{ color: "#2B7FFF" }}>click here</div></Link>
                </div>
            </div>
        </div>
    )
}
