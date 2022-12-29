import React, { useState } from 'react'
import "./Ourservices.css"
import { Stack } from '@chakra-ui/react'
import { ChevronRightIcon, ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { NavLink as Link } from 'react-router-dom'

import Ourservices_img1 from "./OurservicesImages/Ourservices_img1.png"
import Ourservices_img2 from "./OurservicesImages/Ourservices_img2.png"
import Ourservices_img3 from "./OurservicesImages/Ourservices_img3.png"
import Ourservices_img4 from "./OurservicesImages/Ourservices_img4.png"
import Ourservices_img5 from "./OurservicesImages/Ourservices_img5.png"

import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
} from '@chakra-ui/react'

export default function Ourservices() {
    const title = ["Analytics & Insights", "Consultancy", "Design & Creative", "Development", "Digital Marketing"]
    const img = [Ourservices_img1, Ourservices_img2, Ourservices_img3, Ourservices_img4, Ourservices_img5]
    const subTitle = ["Are you having a hard time understanding your data?",
        "Together we can showcase, inspire and transform your business.",
        "Creativity is important and when you need it, we're here to help.",
        "Development services for your innovative ideas",
        "Fuel your untapped potential through our digital marketing solutions"]
    const data = ["Transform your data into insights that promote superior performance, growth, and greatness in business.",
        "We can assist you whether you're having issues with internal procedures or corporate culture, or you need a new business plan to match your desired future.",
        "Our creative design services serve as a convenient pit stop for any creative design requirements. Say goodbye to free internet designs or templates and maintain your uniqueness.",
        "We offer a wide variety of development services for startups, agencies, and enterprises. All at scale with the best quality.",
        "Digital marketing services including SEO, social media, paid advertising and more. We help you capture your audience and make the most of your budget to get you better results. "]
    const linkData = [
        ["Business Intelligence", "Customer Segmentation", "Predective Analytics", "Research Intelligence", "Speech & text Analytics"],
        ["Financial Advisory", "Legal Consultant", "Management Consultant", "Operational Consultant", "Strategy Consultant"],
        ["Animations", "Graphic Design", "Social Media Design", "UX/UI Design", "Video Editing"],
        ["App Development", "Blockchain Development", "Cloud Storage & Management", "DevOps", "Web Development"],
        ["Email Marketing", "Marketing Automation", "Mobile Marketing", "Search Engine Marketing", "Social Media Marketing"]
    ]

    const linkURLS = [
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""]
    ]
    const [optionValue, setOptionvalue] = useState(0)

    const handleDownClick = () => {
        setOptionvalue(optionValue + 1)
    }

    const handleUpClick = () => {
        setOptionvalue(optionValue - 1)
    }
    return (
        <div className='ourservices-outer'>
            <div className='ourservices-title'>
                {title[optionValue]}
            </div>
            <div className='ourservices-inner'>
                <div className='ourservices-inner-left'>
                    <div className='ourservices-inner-left-top'>
                        <div className='ourservices-inner-left-top-left'>
                            <Slider value={optionValue === 0 ? 95 :
                                optionValue === 1 ? 70 :
                                    optionValue === 2 ? 50 :
                                        optionValue === 3 ? 30 :
                                            optionValue === 4 ? 0 : 0}
                                min={0}
                                max={100}
                                orientation='vertical'
                                transition="1ms">
                                {/* <SliderMark value={0} marginLeft="100%" color="white" width="100%" display="flex" justifyContent="right">
                                    25%
                                </SliderMark>
                                <SliderMark value={20} marginLeft="100%" color="white" width="100%" display="flex" justifyContent="right">
                                    25%
                                </SliderMark>
                                <SliderMark value={40} marginLeft="100%" color="white" width="100%" display="flex" justifyContent="right">
                                    25%
                                </SliderMark>
                                <SliderMark value={60} marginLeft="100%" color="white" width="100%" display="flex" justifyContent="right">
                                    25%
                                </SliderMark>
                                <SliderMark value={80} marginLeft="100%" color="white" width="100%" display="flex" justifyContent="right">
                                    {title[0 ]}
                                </SliderMark> */}
                                <SliderTrack width="1rem" borderRadius="0.5rem" backgroundColor="#BC312E">
                                    <SliderFilledTrack backgroundColor="#2A2A2A" />
                                </SliderTrack>
                                <SliderThumb boxSize="6" />
                            </Slider>
                            <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                <div style={{ fontSize: "1rem", fontWeight: "500", color: "#7E7E7E", textAlign: "center", width: "100%", display: "flex", justifyContent: "center" }}>
                                    {title[0]}
                                </div>

                                <div style={{ fontSize: "1rem", fontWeight: "500", color: "#7E7E7E", textAlign: "center", width: "100%", display: "flex", justifyContent: "center" }}>
                                    {title[1]}
                                </div>

                                <div style={{ fontSize: "1rem", fontWeight: "500", color: "#7E7E7E", textAlign: "center", width: "100%", display: "flex", justifyContent: "center" }}>
                                    {title[2]}
                                </div>

                                <div style={{ fontSize: "1rem", fontWeight: "500", color: "#7E7E7E", textAlign: "center", width: "100%", display: "flex", justifyContent: "center" }}>
                                    {title[3]}
                                </div>

                                <div style={{ fontSize: "1rem", fontWeight: "500", color: "#7E7E7E", textAlign: "center", width: "100%", display: "flex", justifyContent: "center" }}>
                                    {title[4]}
                                </div>
                            </div>
                        </div>

                        <div className='ourservices-inner-left-top-right'>
                            <img className='ourservices-inner-left-top-img' src={img[optionValue]} />
                        </div>
                    </div>

                    <div className='ourservices-inner-left-bottom'>
                        {
                            optionValue === 0 ? <div className='ourservices-inner-left-bottom-btns'>
                                <div className='ourservices-inner-left-bottom-button' onClick={handleDownClick} >
                                    <ChevronDownIcon color="white" w={10} h={10} />
                                </div>
                            </div> : optionValue === 4 ? <div className='ourservices-inner-left-bottom-btns'>
                                <div className='ourservices-inner-left-bottom-button' onClick={handleUpClick} >
                                    <ChevronUpIcon color="white" w={10} h={10} />
                                </div>
                            </div> : <div className='ourservices-inner-left-bottom-btns'>
                                <div className='ourservices-inner-left-bottom-button' onClick={handleUpClick} >
                                    <ChevronUpIcon color="white" w={10} h={10} />
                                </div>
                                <div className='ourservices-inner-left-bottom-button' onClick={handleDownClick} >
                                    <ChevronDownIcon color="white" w={10} h={10} />
                                </div>
                            </div>
                        }

                    </div>
                </div>
                <div className='ourservices-inner-right'>
                    <div className='ourservices-inner-right-text1'>
                        {subTitle[optionValue]}
                    </div>
                    <div className='ourservices-inner-right-text2'>
                        {data[optionValue]}
                    </div>
                    <Stack direction="column" spacing={3} marginTop="5%" width="100%">

                        <div className='ourservices-inner-right-line' />
                        <Link to="">
                            <div className='ourservices-inner-right-link'>
                                <div className='ourservices-inner-right-link-text'>
                                    {linkData[optionValue][0]}
                                </div>
                                <ChevronRightIcon color="white" w={8} h={8} />
                            </div>
                        </Link>

                        <div className='ourservices-inner-right-line' />
                        <Link to="">
                            <div className='ourservices-inner-right-link'>
                                <div className='ourservices-inner-right-link-text'>
                                    {linkData[optionValue][1]}
                                </div>
                                <ChevronRightIcon color="white" w={8} h={8} />
                            </div>
                        </Link>

                        <div className='ourservices-inner-right-line' />
                        <Link to="">
                            <div className='ourservices-inner-right-link'>
                                <div className='ourservices-inner-right-link-text'>
                                    {linkData[optionValue][2]}
                                </div>
                                <ChevronRightIcon color="white" w={8} h={8} />
                            </div>
                        </Link>

                        <div className='ourservices-inner-right-line' />
                        <Link to="">
                            <div className='ourservices-inner-right-link'>
                                <div className='ourservices-inner-right-link-text'>
                                    {linkData[optionValue][3]}
                                </div>
                                <ChevronRightIcon color="white" w={8} h={8} />
                            </div>
                        </Link>

                        <div className='ourservices-inner-right-line' />
                        <Link to="">
                            <div className='ourservices-inner-right-link'>
                                <div className='ourservices-inner-right-link-text'>
                                    {linkData[optionValue][4]}
                                </div>
                                <ChevronRightIcon color="white" w={8} h={8} />
                            </div>
                        </Link>

                        <div className='ourservices-inner-right-line' />
                    </Stack>
                </div>

            </div>
        </div>
    )
}
