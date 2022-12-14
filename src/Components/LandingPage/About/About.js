import React from 'react';
import "./About.css";
import About_img1 from "./AboutImages/About_img1.png";
import About_img2 from "./AboutImages/About_img2.png";
import { Button } from '@chakra-ui/react'

export default function About() {
    return (
        <div className='about-outer'>
            <img className='about-bgimg' src={About_img1} />
            <div className='about-x'>
                <div className='about-top-outer'>
                    <div className='about-top'>
                        <label>ABOUT <label className='about-top-content'>FAWR</label></label>
                        <img className="about-img" src={About_img2} />
                    </div>
                </div>
                <div className='about-bottom-outer'>
                    <div className='about-bottom'>
                        <label className='about-bottom-content'>
                            Fawr provides facilities management, corporate fraud and investigations, tax solutions, competency solutions, private security assurance, and housekeeping services that are essential to the functioning of a vibrant and healthy economy. We have earned the trust of leaders in this business segment both in India and the rest of Asia.<br />

                            Our goal is not just to meet your goals, but to exceed your expectations. Our focus is on solving the challenges of our customers who value a combination of our expertise, customer service and timely response.
                        </label>

                        <Button backgroundColor="#407BFF"
                            borderRadius="0.5rem"
                            color="white"
                            height="fit-content"
                            padding="1%"
                            // paddingLeft="2%"
                            // paddingRight="2%"
                            >
                            <div className='about-btn-text'>
                                Read More
                            </div>

                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
