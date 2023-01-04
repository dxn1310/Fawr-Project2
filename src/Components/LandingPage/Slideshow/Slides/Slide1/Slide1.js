import React from 'react';
import "./Slide1.css"
import { Button, Stack } from '@chakra-ui/react';
import Slide1_img1 from "../../../../Services/Asset/AssetImages/Asset_img1.png"
import Slide1_img2 from "../SlideImages/Slide1_img2.png"
import Slide1_img3 from "../SlideImages/Slide1_img3.png"
import Slide1_img4 from "../SlideImages/Slide1_img4.png"
import Slide1_img5 from "../SlideImages/Slide1_img5.png"
import Slide1_img6 from "../SlideImages/Slide1_img6.png"

import Slide_dot1 from "../SlideImages/Slide_dot1.png"
import Slide_dot2 from "../SlideImages/Slide_dot2.png"

import { NavLink as Link } from 'react-router-dom';



export default function slide1() {
    return (
        <div className='slide1-outer'>
            <div className='slide-inner'>
                <div className='slide1-top'>
                    <div className='slide1-top-left'>
                        <img className="slide1-img2" src={Slide1_img2} />
                        <img className="slide1-img3" src={Slide1_img3} />
                        <img className="slide1-img4" src={Slide1_img4} />
                    </div>
                    <div className='slide1-top-right'>
                        <img className="slide1-img5" src={Slide1_img5} />
                        <img className="slide1-img6" src={Slide1_img6} />
                    </div>
                </div>
                <img className='slide1-dot2' src={Slide_dot2} />
            </div>
            <div className='slide1-bottom'>
                <Stack direction="column" spacing={5} width="40%" display="flex" justifyConent="left">
                    <div className='slide1-title'>Asset Management</div>
                    <Link to="/Asset Management">
                        <Button backgroundColor="rgba(43, 127, 255, 1)"
                            borderRadius="0.5rem" color="white"
                            fontWeight="400"
                            width="fit-content"
                            padding="2%"
                        >
                            <div className='firstpage-btn-text'>
                                Know More
                            </div>
                        </Button>
                    </Link>
                </Stack>

                <img className="slide1-img1" src={Slide1_img1} />
            </div>
        </div >
    )
}
