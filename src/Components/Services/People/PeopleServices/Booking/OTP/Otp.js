import { Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import "./Otp.css"
import Otp_img1 from "./OtpImages/Otp_img1.png"
import Otp_img2 from "./OtpImages/Otp_img2.png"
import Otp_img3 from "./OtpImages/Otp_img3.png"


import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider, Input, Button
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { NavLink as Link } from 'react-router-dom'


export default function Otp() {

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    const [phone, setPhone] = useState("");

    const [otp1, setOtp1] = useState("");
    const [otp2, setOtp2] = useState("");
    const [otp3, setOtp3] = useState("");
    const [otp4, setOtp4] = useState("");
    const [otp5, setOtp5] = useState("");

    const [countryCode, setCountryCode] = useState("+91")

    const handleClick = () => {
        setOtp1("");
        setOtp2("");
        setOtp3("");
        setOtp4("");
        setOtp5("");
        setPhone("");

    }

    // const [otp, setOtp] = useState(otp1 + otp2 + otp3 + otp4 + otp5);
    var otp = otp1 + otp2 + otp3 + otp4 + otp5;
    // console.log(phone)
    console.log(otp)


    return (
        <div className='otp-outer'>
            <div className='otp-inner'>
                <div className='otp-inner-left'>
                    <Stack direction="column" spacing={5} width="100%">
                        <img className='otp-img' src={Otp_img2} />
                        <img className='otp-img' style={{ marginLeft: "10%" }} src={Otp_img3} />
                    </Stack>
                </div>

                <div className='otp-inner-right'>
                    <Stack direction="column" spacing={5} width="100%" height="fit-content" marginTop="10%">
                        <div className='otp-title'>
                            Get Phone No
                        </div>
                        <Stack direction="row" spacing={1} width="100%">
                            <Menu width="100%">
                                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} width="40%">
                                    <div className="otp-menu-btn-text">
                                        {countryCode}
                                    </div>
                                    {/* <MenuButton as={Button} width="40%">
                                    <Stack direction="row"spacing={0} display="flex" alignItems="center">
                                    {countryCode}
                                    <ChevronDownIcon />
                                    </Stack>
                                </MenuButton> */}
                                </MenuButton>
                                <MenuList width="100%">
                                    <MenuItem onClick={(e) => setCountryCode("+91")}>+91 (India)</MenuItem>
                                </MenuList>
                            </Menu>

                            <Input focusBorderColor='white'
                                placeholder='Enter Phone No'
                                type="number"
                                _placeholder={{ fontSize: "0.8rem" }}
                                backgroundColor="rgba(224, 224, 224, 0.6)"
                                width="100%"
                                onChange={(e) => setPhone(e.target.value)} />
                        </Stack>
                        <div style={{ display: "flex", justifyContent: "right", width: "100%" }}>
                            <Button width="50%" backgroundColor="#2B7FFF" color="white" >
                                <div className='otp-btn-text'>
                                    Get OTP
                                </div>
                            </Button>
                        </div>

                        <Stack direction="row" spacing={2} width="100%">
                            <Input focusBorderColor='white'
                                type="number"
                                backgroundColor="rgba(224, 224, 224, 0.6)"
                                width="20%"
                                maxLength="1"
                                onChange={(e) => setOtp1(e.target.value)} />

                            <Input focusBorderColor='white'
                                type="number"
                                backgroundColor="rgba(224, 224, 224, 0.6)"
                                width="20%"
                                onChange={(e) => setOtp2(e.target.value)} />

                            <Input focusBorderColor='white'
                                type="number"
                                backgroundColor="rgba(224, 224, 224, 0.6)"
                                width="20%"
                                onChange={(e) => setOtp3(e.target.value)} />

                            <Input focusBorderColor='white'
                                type="number"
                                backgroundColor="rgba(224, 224, 224, 0.6)"
                                width="20%"
                                onChange={(e) => setOtp4(e.target.value)} />

                            <Input focusBorderColor='white'
                                type="number"
                                backgroundColor="rgba(224, 224, 224, 0.6)"
                                width="20%"
                                onChange={(e) => setOtp5(e.target.value)} />
                        </Stack>
                        <Link to="/People Services/Booking/Address">
                            <div style={{ display: "flex", justifyContent: "right", width: "100%" }}>
                                <Button width="50%" backgroundColor="#2B7FFF" color="white" onClick={handleClick}>
                                    <div className='otp-btn-text'>
                                        Verify OTP
                                    </div>
                                </Button>
                            </div>
                        </Link>

                    </Stack>
                </div>
            </div>
        </div>
    )
}
