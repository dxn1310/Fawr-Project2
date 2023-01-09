import React, { useState } from 'react'
import "./Template.css"
import {
    Stack, Button, Input
} from '@chakra-ui/react'

import { NavLink as Link } from 'react-router-dom'
import { CheckIcon } from '@chakra-ui/icons'

import { useMediaQuery } from '@chakra-ui/react'

export default function Template({ gridImages, bgimg, options, setBill, total, setTotal }) {

    const [optionTitle, setOptionTitle] = useState()
    const [optionRate, setOptionRate] = useState()
    const [optionRatePeople, setOptionRatePeople] = useState()
    const [optionPrice, setOptionPrice] = useState()

    const [clicked, setClicked] = useState("0")

    const [location, setLocation] = useState("")
    console.log(location)

    const addedOption =
    {
        title: optionTitle,
        rating: optionRate,
        ratingPeople: optionRatePeople,
        price: optionPrice
    }

    const handleAddService = (a, b, c, d) => {
        const addedOption =
        {
            title: a,
            rating: b,
            ratingPeople: c,
            price: d
        }
        console.log("Service Added")
        setBill(oldBill => ([
            ...oldBill,
            addedOption
        ]))
    }

    const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
    return (
        <div className='template-outer'>
            <img className='template-bgimg' src={bgimg} />
            <div className='template-inner'>
                <div className='template-grid-1'>
                    {
                        gridImages.map(element => <img className="template-grid-imgs" src={element} />)
                    }
                </div>
                <div className='template-content'>
                    <div className='template-content-left'>
                        {
                            options.map((option, index) => {
                                return <div className='template-content-left-option'>
                                    <div className='template-content-left-option-title'>
                                        {option.title}
                                    </div>
                                    <div className='template-content-left-option-content'>
                                        <div className='template-content-left-option-content-left'>
                                            {
                                                option.content.map((opt, index) => {
                                                    return <div className='option-outer'>
                                                        <div className='option-outer-left'>
                                                            <div>
                                                                <div className='option-title'>
                                                                    {opt.contentTitle}
                                                                </div>
                                                                <div className='option-rating'>
                                                                    <Stack direction="row" spacing={3}>
                                                                        <label>{opt.contentRating}</label>
                                                                        <label>({opt.contentRatingPeople})</label>
                                                                    </Stack>
                                                                </div>
                                                                <div className='option-price'>
                                                                    <label>Start at ₹ {opt.contentPrice}</label>
                                                                </div>
                                                                <ul className='option-ul'>
                                                                    {opt.contentPoints.map(point => <li className='option-li'>{point}</li>)
                                                                    }
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className='option-outer-right'>
                                                            <Button borderColor="white"
                                                                backgroundColor="white"
                                                                boxShadow=" 2px 2px 4px 1px rgba(0, 0, 0, 0.32)"
                                                                borderRadius={isLargerThan1000 ? "0.5rem" : "0.25rem"}
                                                                marginTop={isLargerThan1000 ? "0%" : "20%"}
                                                                color="#407BFF"
                                                                padding="5%"
                                                                height="fit-content"
                                                                onClick={(e) => { handleAddService(opt.contentTitle, opt.contentRating, opt.contentRatingPeople, opt.contentPrice); setTotal(total + parseInt(opt.contentPrice)); setClicked("1") }}
                                                            >
                                                                <div className='option-btn-text'>
                                                                    Add +
                                                                </div>
                                                            </Button>
                                                            {/* {
                                                                clicked === "1" ? <Button borderColor="white"
                                                                    backgroundColor="white"
                                                                    boxShadow=" 2px 2px 4px 1px rgba(0, 0, 0, 0.32)"
                                                                    borderRadius="0.5rem"
                                                                    color="#407BFF"
                                                                    onClick={(e) => { handleAddService(opt.contentTitle, opt.contentRating, opt.contentRatingPeople, opt.contentPrice); setClicked("1") }}
                                                                >
                                                                </Button> : <Button borderColor="white"
                                                                    backgroundColor="white"
                                                                    boxShadow=" 2px 2px 4px 1px rgba(0, 0, 0, 0.32)"
                                                                    borderRadius="0.5rem"
                                                                    color="#407BFF"
                                                                >
                                                                    <Stack direction="row" display="flex" alignItems="center">
                                                                        <div className="cart-option-btn-text">
                                                                            Added
                                                                        </div>
                                                                        <CheckIcon />
                                                                    </Stack>

                                                                </Button>
                                                            } */}
                                                        </div>
                                                    </div>
                                                })

                                            }
                                        </div>

                                    </div>
                                </div>

                            })

                        }

                    </div>
                    <div className='template-content-right'>

                        <Stack direction={isLargerThan1000 ? "row" : "column"} spacing={5} width="100%">
                            <Input width="100%"
                            height={isLargerThan1000?"":"fit-content"}
                                placeholder='Enter Location'
                                _placeholder={{ fontSize: isLargerThan1000 ? "100%" : "0.5rem" }}
                                _hover={{ borderColor: "black" }}
                                focusBorderColor="#FFFFFF"
                                _focus={{ borderColor: "black" }}
                                // _placeholder={{ color: "grey", fontSize: "100%", padding: '1%' }}
                                borderColor="black"
                                borderWidth="0.1rem"
                                onChange={(e) => setLocation(e.target.value)} />

                            <Button color="white"
                                backgroundColor="#2A7FFF"
                                width="fit-content"
                                fontWeight="400"
                                
                                // height="fit-content"
                                > <Link to="/People Services/Booking/OTP">
                                    <div className='option-btn-text'>Apply</div></Link></Button>
                        </Stack>
                        <div className='template-viewclass'>
                            <Link to="/People Services/Booking/Cart">
                                <div className='option-btn-text'>
                                View Cart >>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div >
            </div >

        </div >
    )
}
