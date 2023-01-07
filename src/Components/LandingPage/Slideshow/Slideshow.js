import React from 'react'
import "./Slideshow.css"

import Firstpage from '../../LandingPage/Firstpage/Firstpage'
import Slide1 from './Slides/Slide1/Slide1'
// import Slide2 from './Slides/Slide2/Slide2'
import Slide2 from './Slides/Slide2/Slide2'
import Slide3 from './Slides/Slide3/Slide3'
import Slide4 from './Slides/Slide4/Silde4'
import Slide5 from './Slides/Slide5/Slide5'

import 'react-slideshow-image/dist/styles.css'
import { Slide, Fade } from 'react-slideshow-image';

export default function Slideshow() {

    const slides = [
        {
            url: Firstpage
        },
        {
            url: Slide1
        },
        {
            url: Slide2
        },
        {
            url: Slide3
        },
        {
            url: Slide4
        },
        {
            url: Slide5
        },
    ];

    const zoomOutProperties = {
        duration: 1000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        // scale: 0.4,
        arrows: true,
    };
    return (
        <div className="slide-container">
            <Fade {...zoomOutProperties}>
                {slides.map((slide, index) => (
                    <div className="each-fade" key={index}>
                        <slide.url />
                    </div>
                ))}
            </Fade>
        </div>
    )
}
