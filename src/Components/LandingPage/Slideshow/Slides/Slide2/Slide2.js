import React from 'react';
import "./Slide2.css"
import { Button, Stack } from '@chakra-ui/react';
import Slide2_img1 from "../../../../Services/Facility/FacilityImages/Facility_img1.png"
import Slide2_img2 from "../SlideImages/Slide2_img2.png"
import Slide2_img3 from "../SlideImages/Slide2_img3.png"


import Slide_dot1 from "../SlideImages/Slide_dot1.png"
import Slide_dot2 from "../SlideImages/Slide_dot2.png"

import { NavLink as Link } from 'react-router-dom';



export default function slide2() {
  return (
    <div className='slide2-outer'>
      <div className='slide-inner'>
        <div className='slide2-top'>
          <div className='slide2-top-left'>
            <img className="slide2-img2" src={Slide2_img2} />
          </div>
          <div className='slide2-top-right'>
            <img className="slide2-img5" src={Slide2_img3} />
          </div>
        </div>
        <img className='slide2-dot2' src={Slide_dot2} />
      </div>
      <div className='slide2-bottom'>
        <Stack direction="column" spacing={5} width="40%" display="flex" justifyConent="left">
          <div className='slide2-title'>Facility Management</div>
          <Link to="/Facility Management">
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

        <img className="slide2-img1" src={Slide2_img1} />
      </div>
    </div >
  )
}
