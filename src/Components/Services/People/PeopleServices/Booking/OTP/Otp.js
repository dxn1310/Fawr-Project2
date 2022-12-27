import { Stack } from '@chakra-ui/react'
import React from 'react'
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
                        <Stack direction="row" spacing={2} width="100%">
                            <Menu width="100%">
                                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                    +91
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>+91 (India)</MenuItem>
                                </MenuList>
                            </Menu>

                            <Input focusBorderColor='white'
                                placeholder='Enter Phone No'
                                type="number"
                                backgroundColor="rgba(224, 224, 224, 0.6)"
                                borderColor="black"
                                width="80%" />
                        </Stack>
                        <div style={{ display: "flex", justifyContent: "right", width: "100%" }}>
                            <Button width="30%" backgroundColor="#2B7FFF" color="white" >
                                <div className='otp-btn-text'>
                                    Get OTP
                                </div>
                            </Button>
                        </div>

                        <Stack direction="row" spacing={2} width="100%">
                            <Input focusBorderColor='white'
                                type="number"
                                backgroundColor="rgba(224, 224, 224, 0.6)"
                                borderColor="black"
                                width="20%" />

                            <Input focusBorderColor='white'
                                type="number"
                                backgroundColor="rgba(224, 224, 224, 0.6)"
                                borderColor="black"
                                width="20%" />

                            <Input focusBorderColor='white'
                                type="number"
                                backgroundColor="rgba(224, 224, 224, 0.6)"
                                borderColor="black"
                                width="20%" />

                            <Input focusBorderColor='white'
                                type="number"
                                backgroundColor="rgba(224, 224, 224, 0.6)"
                                borderColor="black"
                                width="20%" />

                            <Input focusBorderColor='white'
                                type="number"
                                backgroundColor="rgba(224, 224, 224, 0.6)"
                                borderColor="black"
                                width="20%" />
                        </Stack>
                        <Link to="/People Services/Booking/Address">
                            <div style={{ display: "flex", justifyContent: "right", width: "100%" }}>
                                <Button width="30%" backgroundColor="#2B7FFF" color="white" >
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
