import React from 'react'
import "./Cleaning.css"
import Cleaning_img1 from "./CleaningImages/Cleaning_img1.png"
import Cleaning_img2 from "./CleaningImages/Cleaning_img2.png"
import Cleaning_img3 from "./CleaningImages/Cleaning_img3.png"
import Cleaning_img4 from "./CleaningImages/Cleaning_img4.png"

import { Select, Stack, Button } from '@chakra-ui/react'

export default function Cleaning() {
    return (
        <div className='cleaning-outer'>
            <img className='cleaning-bgimg' src={Cleaning_img1} />
            <div className='cleaning-inner'>
                <img src={Cleaning_img2} />
                <div className='cleaning-select'>
                    <Select placeholder='Select Service'
                        _placeholder={{ fontSize: "0.5rem" }}
                        width="25%"
                        boxShadow=" 0px 4px 9px rgba(0, 0, 0, 0.32)"
                        borderRadius="0.5rem"
                        display="flex"
                        alignItems="center">
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>

                    <Select placeholder='Select Area'
                        width="25%"
                        boxShadow=" 0px 4px 9px rgba(0, 0, 0, 0.32)"
                        borderRadius="0.5rem"
                        display="flex"
                        alignItems="center">
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>

                    <Select placeholder='Select Type'
                        width="25%"
                        boxShadow=" 0px 4px 9px rgba(0, 0, 0, 0.32)"
                        borderRadius="0.5rem"
                        display="flex"
                        alignItems="center">
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                    <div className='cleaning-price'>
                        Price : <br /> 0
                    </div>
                </div>
                <div className='cleaning-button'>
                    <Button color="white" backgroundColor="#2B7FFF" width="100%" fontSize="70%">Book Now</Button>
                </div>
            </div>




            <div className='cleaning-inner'>
                <img src={Cleaning_img3} />
                <div className='cleaning-select'>
                    <Select placeholder='Select Service'
                        _placeholder={{ fontSize: "0.5rem" }}
                        width="25%"
                        boxShadow=" 0px 4px 9px rgba(0, 0, 0, 0.32)"
                        borderRadius="0.5rem"
                        display="flex"
                        alignItems="center">
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>

                    <Select placeholder='Select Area'
                        width="25%"
                        boxShadow=" 0px 4px 9px rgba(0, 0, 0, 0.32)"
                        borderRadius="0.5rem"
                        display="flex"
                        alignItems="center">
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>

                    <Select placeholder='Select Type'
                        width="25%"
                        boxShadow=" 0px 4px 9px rgba(0, 0, 0, 0.32)"
                        borderRadius="0.5rem"
                        display="flex"
                        alignItems="center">
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                    <div className='cleaning-price'>
                        Price : <br /> 0
                    </div>
                </div>
                <div className='cleaning-button'>
                    <Button color="white" backgroundColor="#2B7FFF" width="100%" fontSize="70%">Book Now</Button>
                </div>
            </div>
            <img className="cleaning-img" src={Cleaning_img4} />
        </div >
    )
}
