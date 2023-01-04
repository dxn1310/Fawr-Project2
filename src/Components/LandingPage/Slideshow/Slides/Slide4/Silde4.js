import React from 'react';
import "./Slide4.css"
import { Button, Stack } from '@chakra-ui/react';
import Slide4_img1 from "../../../../Services/Background/BackgroundImages/Background_img1.png"
import Slide4_img2 from "../SlideImages/Slide4_img2.png"
import Slide4_img3 from "../SlideImages/Slide4_img3.png"
import Slide4_img4 from "../SlideImages/Slide4_img4.png"
import Slide4_img5 from "../SlideImages/Slide4_img5.png"
import Slide4_img6 from "../SlideImages/Slide4_img6.png"
import Slide4_img7 from "../SlideImages/Slide4_img7.png"

import Slide_dot1 from "../SlideImages/Slide_dot1.png"
import Slide_dot2 from "../SlideImages/Slide_dot2.png"

import { NavLink as Link } from 'react-router-dom';



export default function Slide4() {
  return (
    <div className='slide4-outer'>
      <div className='slide-inner'>
        <div className='slide4-top'>
          <div className='slide4-top-left'>
            <img className="slide4-img2" src={Slide4_img2} />
            <img className="slide4-img3" src={Slide4_img3} />
          </div>
          <div className='slide4-top-right'>
            <img className="slide4-img4" src={Slide4_img4} />
            <img className="slide4-img5" src={Slide4_img5} />
          </div>
          <div className='slide4-top-right'>
            <img className="slide4-img6" src={Slide4_img6} />
            <img className="slide4-img7" src={Slide4_img7} />
          </div>
        </div>
        <img className='slide4-dot2' src={Slide_dot2} />
      </div>
      <div className='slide4-bottom'>
        <Stack direction="column" spacing={5} width="40%" display="flex" justifyConent="left">
          <div className='slide4-title'>Background Check Service</div>
          <Link to="/Background Check Service">
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

        <img className="slide4-img1" src={Slide4_img1} />
      </div>
    </div >
  )
}
