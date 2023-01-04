import React from 'react';
import "./Slide3.css"
import { Button, Stack } from '@chakra-ui/react';
import Slide3_img1 from "../../../../Services/PrivateSecurity/PrivateImages/Private_img1.png"
import Slide3_img2 from "../SlideImages/Slide3_img2.png"
import Slide3_img3 from "../SlideImages/Slide3_img3.png"
import Slide3_img4 from "../SlideImages/Slide3_img4.png"
import Slide3_img5 from "../SlideImages/Slide3_img5.png"


import Slide_dot1 from "../SlideImages/Slide_dot1.png"
import Slide_dot2 from "../SlideImages/Slide_dot2.png"

import { NavLink as Link } from 'react-router-dom';



export default function Slide3() {
  return (
    <div className='slide3-outer'>
      <div className='slide-inner'>
        <div className='slide3-top'>
          <div className='slide3-top-left'>
            <img className="slide3-img2" src={Slide3_img2} />
            <img className="slide3-img3" src={Slide3_img3} />
          </div>
          <div className='slide3-top-right'>
            <img className="slide3-img5" src={Slide3_img4} />
            <img className="slide3-img6" src={Slide3_img5} />
          </div>
        </div>
        <img className='slide3-dot2' src={Slide_dot2} />
      </div>
      <div className='slide3-bottom'>
        <Stack direction="column" spacing={5} width="40%" display="flex" justifyConent="left">
          <div className='slide3-title'>Private Security Guarding</div>
          <Link to="/Private Security Guarding">
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

        <img className="slide3-img1" src={Slide3_img1} />
      </div>
    </div >
  )
}
