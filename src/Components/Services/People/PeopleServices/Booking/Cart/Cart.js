import React, { useState } from 'react'
import "./Cart.css"
import Cart_img1 from "./CartImages/Cart_img1.png"
import Status from '../Status/Status'
import {
    Stack, Button, Input
} from '@chakra-ui/react'
import { DeleteIcon, StarIcon, CheckIcon } from '@chakra-ui/icons'
import { NavLink as Link } from 'react-router-dom'

export default function Cart({ Bill, total, setBill, setTotal }) {
    const statusData = ["2", "1", "0", "0", "0"]
    const lineData = ["1", "0", "0", "0"]

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    const [coupon, setCoupon] = useState(125)
    console.log(total)

    return (
        <div className='cart-outer'>
            <Status statusData={statusData} lineData={lineData} />
            <div className='cart-inner-left-title'>
                Summary
            </div>
            <div className='cart-inner'>
                <div className='cart-inner-left'>
                    {
                        Bill.map((option, index) => {
                            return <div className='cart-inner-left-option'>
                                <div className='cart-inner-left-option-inner'>
                                    <div className='cart-option-left'>

                                        <Stack direction="row" spacing={1} display="flex" alignItems="center">
                                            <div className='cart-option-left-title'>
                                                {option.title}
                                            </div>
                                            <DeleteIcon color="red" boxSize={5} />
                                            {/* onClick={(e) => {{setTotal(total - parseInt(option.price)) }; setBill(pop(option))}} */}
                                        </Stack>
                                        <div className='cart-option-rating'>
                                            <Stack direction="row" spacing={1} display="flex" alignItems="center">
                                                <StarIcon color="grey" />
                                                <div className='cart-option-rate'>
                                                    {option.rating}
                                                </div>
                                                <div className='cart-option-rate-people'>
                                                    {option.ratingPeople}
                                                </div>
                                            </Stack>
                                        </div>
                                        <div className='cart-option-price'>
                                            Start at ₹{option.price}
                                            {/* {setTotal(total + option.price)} */}
                                        </div>

                                    </div>
                                    <div className='cart-option-right'>
                                        <div className='cart-option-right-price'>
                                            ₹ {option.price}
                                        </div>
                                        <Button borderColor="white"
                                            backgroundColor="white"
                                            boxShadow=" 2px 2px 4px 1px rgba(0, 0, 0, 0.32)"
                                            borderRadius="0.5rem"
                                            color="#407BFF"
                                        >
                                            <Stack direction="row" display="flex" alignItems="center">
                                                <div className="cart-option-btn-text"
                                                height="fit-content">
                                                    Added
                                                </div>
                                                <CheckIcon />
                                            </Stack>

                                        </Button>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                    <Link to="/People Services">
                        <Button width="40%"
                            marginTop="5%"
                            backgroundColor="#2B7FFF"
                            color="white">
                            <div className='cart-btn-text'>
                                Add additional services
                            </div>

                        </Button>
                    </Link>



                </div>
                <div className='cart-inner-middle' />
                <div className='cart-inner-right'>

                    <div className='cart-grid-right-title' style={{ fontWeight: "500" }}>
                        Payment Summary
                    </div>
                    <div style={{ width: "80%", backgroundColor: "rgba(0, 0, 0, 0.4)", height: "0.05rem", marginTop: "1%", width: "100%" }} />
                    <Stack direction="column" spacing={5} width="100%" marginTop="5%">
                        <div className='cart-grid-right-elements'>
                            <div className='cart-grid-right-elements-right'>
                                Iteam Total
                            </div>

                            <div className='cart-grid-right-elements-left'>
                                ₹{total}
                            </div>
                        </div>

                        <div className='cart-grid-right-elements'>
                            <div className='cart-grid-right-elements-right'>
                                Iteam Discount
                            </div>

                            <div className='cart-grid-right-elements-left'>
                                -₹{coupon}
                            </div>
                        </div>

                        <div className='cart-grid-right-elements'>
                            <div className='cart-grid-right-elements-right'>
                                Taxes & Fee
                            </div>

                            <div className='cart-grid-right-elements-left'>
                                ₹{total * 0.30}
                            </div>
                        </div>

                        <div className='cart-grid-right-elements'>
                            <div className='cart-grid-right-elements-right'>
                                Total
                            </div>

                            <div className='cart-grid-right-elements-left'>
                                ₹{total - coupon - (total * 0.30)}
                            </div>
                        </div>
                        <div className='cart-right-discount' style={{ backgroundColor: "#C0D4FF", color: "#004FFF", width: "100%", padding: "2%", display: "flex", justifyContent: "center" }}>
                            Wow! You have saved ₹125 on final bill
                        </div>

                        <Link to="/People Services/Booking/Book Slot">

                            <div style={{ display: "flex", width: "100%", justifyContent: "center" }} >
                                <Button width="45%"
                                    marginTop="10%"
                                    backgroundColor="#2B7FFF"
                                    color="white">
                                    <div className='cart-btn-text'>
                                        Book Slot
                                    </div>

                                </Button>
                            </div>
                        </Link>
                    </Stack>
                </div>
            </div >

            {/* <img className='cart-bgimg' src={Cart_img1} /> */}
            {/* {
                Bill.map((option, index) => {
                    return <div className='cart-content-left-option'>
                        <div className='cart-content-left-option-tfditle'>
                            {option.title}
                        </div>
                    </div>

                })
            } */}

        </div >

    )
}

