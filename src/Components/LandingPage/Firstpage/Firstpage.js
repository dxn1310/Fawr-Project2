import React from 'react';
import "./Firstpage.css"
import { Button } from '@chakra-ui/react';
// import Firstpage_img2 from "./FirstpageImages/Firstpage_img2.png";

export default function Firstpage() {
    return (
        <div className='firstpage-outer'>
            <div className='firstpage-inner'>
                <div className='firstpage-text'>
                    <label >A Place  That Help<br />Growth of your work</label>
                </div>
                <div>
                    <Button backgroundColor="rgba(43, 127, 255, 1)"
                        borderRadius="1.25rem" color="white"
                        fontWeight="400" fontSize="2rem"
                        width="15rem" height="4rem">
                        Get Started</Button>
                </div>
            </div>
        </div>
    )
}
