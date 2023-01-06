import React from 'react'
import "./Careersmain.css"
import { Button, ButtonGroup, Stack } from '@chakra-ui/react'
import Careersmain_img2 from "./CareersMainImages/Careersmain_img2.png"
import Careersmain_img3 from "./CareersMainImages/Careersmain_img3.png"
import Careersmain_img4 from "./CareersMainImages/Careersmain_img4.png"
import Careersmain_img5 from "./CareersMainImages/Careersmain_img5.png"
import Careersmain_img6 from "./CareersMainImages/Careersmain_img6.png"
import Careersmain_img7 from "./CareersMainImages/Careersmain_img7.png"
import Careersmain_img8 from "./CareersMainImages/Careersmain_img8.png"
import Careersmain_img9 from "./CareersMainImages/Careersmain_img9.png"
import Careersmain_img10 from "./CareersMainImages/Careersmain_img10.png"
import Careersmain_img11 from "./CareersMainImages/Careersmain_img11.png"
import Careersmain_img12 from "./CareersMainImages/Careersmain_img12.png"



import { NavLink as Link } from 'react-router-dom'

export default function Careersmain() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    return (
        <div className='careersmain-outer'>
            <div className='careersmain-inner1'>
                <Stack direction='row' spacing={4} width="25%" marginTop="30%" marginLeft="10%">
                    <Button width="50%" borderRadius="0.5rem" fontSize="65%" height="fit-content" padding="3%" backgroundColor='#2B7FFF' color="white" borderWidth="0.1rem">
                        Find Job
                    </Button>
                    <Button width="50%" borderRadius="0.5rem" fontSize="65%" height="fit-content" padding="3%" borderColor='rgba(0, 0, 0, 0.65);' color="rgba(0, 0, 0, 0.65);" borderWidth="0.1rem">
                        I’m Hiring
                    </Button>
                </Stack>
            </div>
            <div className='careersmain-inner2-outer'>
                <div className='careersmain-inner2-title'>
                    <label>Explore top companies <label className='careersmain-top-content'>job opening India</label></label>
                    <img src={Careersmain_img2} />
                </div>
                <div className='careersmain-inner2'>
                    <img src={Careersmain_img3} />
                    <img src={Careersmain_img4} />
                    <img src={Careersmain_img5} />
                    <img src={Careersmain_img6} />
                </div>
            </div>

            <div className='careersmain-inner3-outer'>
                <div className='careersmain-inner3-title'>
                    Trending
                </div>
                <div className='careersmain-grid'>
                    <Link to="/Careers Main/Careers Advice 1">
                        <img src={Careersmain_img10} />
                    </Link>
                    <Link to="/Careers Main/Careers Advice 2">
                        <img src={Careersmain_img11} />
                    </Link>
                    <Link to="/Careers Main/Careers Advice 3">
                        <img src={Careersmain_img12} />
                    </Link>
                </div>
            </div>
        </div>
    )
}
