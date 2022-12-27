import React from 'react'
import "./Payment.css"
import Status from '../Status/Status'
import Payment_img1 from "./PAymentImages/Payment_img1.png"
import Payment_img2 from "./PAymentImages/Payment_img2.png"
import Payment_img3 from "./PAymentImages/Payment_img3.png"
import Payment_img4 from "./PAymentImages/Payment_img4.png"
import Payment_img5 from "./PAymentImages/Payment_img5.png"

import { NavLink as Link } from 'react-router-dom'

import { Button, Checkbox, Input, Stack } from '@chakra-ui/react'

export default function Payment() {
    const statusData = ["2", "2", "2", "1", "0"]
    const lineData = ["1", "1", "1", "0"]

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    return (
        <div className="payment-outer">
            <Status statusData={statusData} lineData={lineData} />
            <div className='payment-inner'>
                <div className='payment-title' style={{ fontSize: "2rem", fontWeight: "500", }}>
                    Select a Payment Method
                </div>
                <div className='payment-grid'>
                    <div className='payment-grid-left'>
                        <div className='payment-options'>
                            <div className='payment-options-element'>
                                <Stack direction="row" spacing={5}>
                                    <Checkbox iconSize="5" iconColor='white' focusColor="#FA7F4D" borderColor="#FA7F4D" borderRadius="100%" focusBoxShadow="#FA7F4D" />
                                    <img src={Payment_img1} />
                                    <div className='payment-options-element-text'>
                                        Card Payment
                                    </div>
                                </Stack>
                            </div>


                            <div className='payment-options-element'>
                                <Stack direction="row" spacing={5}>
                                    <Checkbox iconSize="5" iconColor='white' focusColor="#FA7F4D" borderColor="#FA7F4D" borderRadius="100%" focusBoxShadow="#FA7F4D" />
                                    <img src={Payment_img3} />
                                    <div className='payment-options-element-text'>
                                        Net Banking
                                    </div>
                                </Stack>
                            </div>



                            <div className='payment-options-element'>
                                <Stack direction="row" spacing={5}>
                                    <Checkbox iconSize="5" iconColor='white' focusColor="#FA7F4D" borderColor="#FA7F4D" borderRadius="100%" focusBoxShadow="#FA7F4D" />
                                    <img src={Payment_img4} />
                                    <div className='payment-options-element-text'>
                                        Wallet
                                    </div>
                                </Stack>
                            </div>


                            <div className='payment-options-element'>
                                <Stack direction="row" spacing={5}>
                                    <Checkbox iconSize="5" iconColor='white' focusColor="#FA7F4D" borderColor="#FA7F4D" borderRadius="100%" focusBoxShadow="#FA7F4D" />
                                    <img src={Payment_img5} />
                                    <div className='payment-options-element-text'>
                                        UPI
                                    </div>
                                </Stack>
                            </div>
                        </div>
                        <Link to="/People Services/Booking/Order Placed">
                            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Button width="40%"
                                    padding="1%"
                                    backgroundColor=" #2B7FFF"
                                    color="white"
                                    fontWeight="400"
                                    marginTop="5%"
                                    display="flex"
                                    justufyContent="center">
                                    <div className='Payment-btn-text' style={{ fontSize: "1.25rem" }}>Payment</div>
                                </Button>
                            </div>
                        </Link>
                    </div>

                    <div className='payment-grid-right'>
                        <div className='payment-grid-right-title' style={{ fontSize: "1.5rem", fontWeight: "500" }}>
                            Payment Summary
                        </div>
                        <div style={{ width: "80%", backgroundColor: "rgba(0, 0, 0, 0.4)", height: "0.05rem", marginTop: "1%" }} />
                        <Stack direction="column" spacing={5} width="80%" marginTop="5%">
                            <div className='payment-grid-right-elements'>
                                <div className='payment-grid-right-elements-right'>
                                    Iteam Total
                                </div>

                                <div className='payment-grid-right-elements-left'>
                                    ₹674
                                </div>
                            </div>

                            <div className='payment-grid-right-elements'>
                                <div className='payment-grid-right-elements-right'>
                                    Iteam Discount
                                </div>

                                <div className='payment-grid-right-elements-left'>
                                    -₹125
                                </div>
                            </div>

                            <div className='payment-grid-right-elements'>
                                <div className='payment-grid-right-elements-right'>
                                    Taxes & Fee
                                </div>

                                <div className='payment-grid-right-elements-left'>
                                    ₹49
                                </div>
                            </div>

                            <div className='payment-grid-right-elements'>
                                <div className='payment-grid-right-elements-right'>
                                    Total
                                </div>

                                <div className='payment-grid-right-elements-left'>
                                    ₹598
                                </div>
                            </div>
                            <div className='payment-right-discount' style={{ backgroundColor: "#C0D4FF", color: "#004FFF", width: "100%", padding: "2%", display: "flex", justifyContent: "center" }}>
                                Wow! You have saved ₹125 on final bill
                            </div>
                        </Stack>
                    </div>
                </div>
            </div>
        </div>
    )
}
