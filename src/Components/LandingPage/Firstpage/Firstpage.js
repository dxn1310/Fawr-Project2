import React from 'react';
import "./Firstpage.css"
import { Button } from '@chakra-ui/react';
// import Firstpage_img2 from "./FirstpageImages/Firstpage_img2.png";
import First_img1 from "./FirstpageImages/First_img1.png"
import First_img2 from "./FirstpageImages/First_img2.png"
import First_img3 from "./FirstpageImages/First_img3.png"
import First_img4 from "./FirstpageImages/First_img4.png"
import First_img5 from "./FirstpageImages/First_img5.png"
import First_img6 from "./FirstpageImages/First_img6.png"
import First_img7 from "./FirstpageImages/First_img7.png"

export default function Firstpage() {
    return (
        <div className='firstpage-outer'>
            <img className="y" src={First_img1} />
            <div className='x'>
                <div className='firstpage-inner'>
                    <div className='firstpage-text'>
                        <label >A Place  That Help<br /> Growth of your work</label>
                    </div>
                    <div>
                        <Button backgroundColor="rgba(43, 127, 255, 1)"
                            borderRadius="1.25rem" color="white"
                            fontWeight="400"
                            padding="5%"
                            width="35%">
                            <div className='firstpage-btn-text'>
                                Get Started
                            </div>
                        </Button>
                    </div>
                </div>
                <div className='firstpage-imgs'>
                    <img className="firstpage-img2" src={First_img7} />
                    <img className="firstpage-img1" src={First_img6} />
                    <img className="firstpage-img3" src={First_img5} />
                    <img className="firstpage-img4" src={First_img3} />
                    <img className="firstpage-img5" src={First_img4} />
                    <img className="firstpage-img6" src={First_img2} />
                </div>
            </div>

        </div>
    )
}
