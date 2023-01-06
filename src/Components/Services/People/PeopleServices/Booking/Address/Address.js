import React from 'react'
import "./Address.css"
import Status from '../Status/Status'
import { Stack } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, Input, Button
} from '@chakra-ui/react'

import Address_img1 from "./AddressImages/Address_img1.png"

import { NavLink as Link } from 'react-router-dom'

export default function Address() {
    const statusData = ["1", "0", "0", "0", "0"]
    const lineData = ["0", "0", "0", "0"]

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    return (
        <div className='address-outer'>
            <Status statusData={statusData} lineData={lineData} />
            <div style={{ fontSize: "2rem", fontWeight: "600", display: "flex", width: "80%", alignItems: "flex-start" }}>
                User Address
            </div>
            <div className='address-inner'>
                <div className='address-inner-left'>
                    <Stack direction="column" spacing={10} width="100%" >
                        <FormControl>
                            <FormLabel><div className="address-form-text" style={{ fontSize: "1rem", fontWeight: "500" }}>Name</div></FormLabel>
                            <Input width="100%"
                                borderColor="white"
                                borderBottomColor="black"
                                borderRadius="0"
                                placeholder="Enter Name"
                                focusBorderColor="black"
                                focusBorderColor="#FFFFFF"
                                focusBorderBottomColor="#000000"
                                _hover={{ borderColor: "none" }}
                                _focus={{ borderBottomColor: "black" }}
                            />
                        </FormControl>


                        <FormControl>
                            <FormLabel><div className="address-form-text" style={{ fontSize: "1rem", fontWeight: "500" }}>E-mail</div></FormLabel>
                            <Input width="100%"
                                borderColor="white"
                                borderBottomColor="black"
                                borderRadius="0"
                                placeholder="Enter Email"
                                focusBorderColor="black"
                                typye="email"
                                focusBorderColor="#FFFFFF"
                                focusBorderBottomColor="#000000"
                                _hover={{ borderColor: "none" }}
                                _focus={{ borderBottomColor: "black" }}
                            />
                        </FormControl>

                        <Stack direction="row" spacing={5}>
                            <FormControl>
                                <FormLabel><div className="address-form-text" style={{ fontSize: "1rem", fontWeight: "500" }}>State</div></FormLabel>
                                <Input width="100%"
                                    borderColor="white"
                                    borderBottomColor="black"
                                    borderRadius="0"
                                    placeholder="Enter State"
                                    focusBorderColor="black"
                                    focusBorderColor="#FFFFFF"
                                    focusBorderBottomColor="#000000"
                                    _hover={{ borderColor: "none" }}
                                    _focus={{ borderBottomColor: "black" }}
                                />
                            </FormControl>

                            <FormControl>
                                <FormLabel><div className="address-form-text" style={{ fontSize: "1rem", fontWeight: "500" }}>Pincode</div></FormLabel>
                                <Input width="100%"
                                    borderColor="white"
                                    borderBottomColor="black"
                                    borderRadius="0"
                                    placeholder="Enter Pincode"
                                    focusBorderColor="black"
                                    type="number"
                                    focusBorderColor="#FFFFFF"
                                    focusBorderBottomColor="#000000"
                                    _hover={{ borderColor: "none" }}
                                    _focus={{ borderBottomColor: "black" }}
                                />
                            </FormControl>
                        </Stack>

                        <FormControl>
                            <FormLabel><div className="address-form-text" style={{ fontSize: "1rem", fontWeight: "500" }}>Address</div></FormLabel>
                            <Input width="100%"
                                borderColor="white"
                                borderBottomColor="black"
                                borderRadius="0"
                                placeholder="Enter Address"
                                focusBorderColor="black"
                                focusBorderColor="#FFFFFF"
                                focusBorderBottomColor="#000000"
                                _hover={{ borderColor: "none" }}
                                _focus={{ borderBottomColor: "black" }}
                            />
                        </FormControl>



                        <Stack direction="row" spacing={5}>
                            <FormControl>
                                <FormLabel><div className="address-form-text" style={{ fontSize: "1rem", fontWeight: "500" }}>Street</div></FormLabel>
                                <Input width="100%"
                                    borderColor="white"
                                    borderBottomColor="black"
                                    borderRadius="0"
                                    placeholder="Enter Street"
                                    focusBorderColor="black"
                                    focusBorderColor="#FFFFFF"
                                    focusBorderBottomColor="#000000"
                                    _hover={{ borderColor: "none" }}
                                    _focus={{ borderBottomColor: "black" }}
                                />
                            </FormControl>

                            <FormControl>
                                <FormLabel><div className="address-form-text" style={{ fontSize: "1rem", fontWeight: "500" }}>Landmark</div></FormLabel>
                                <Input width="100%"
                                    borderColor="white"
                                    borderBottomColor="black"
                                    borderRadius="0"
                                    placeholder="Enter Landmark"
                                    focusBorderColor="black"
                                    focusBorderColor="#FFFFFF"
                                    focusBorderBottomColor="#000000"
                                    _hover={{ borderColor: "none" }}
                                    _focus={{ borderBottomColor: "black" }}
                                />
                            </FormControl>
                        </Stack>


                        <Stack direction="row" spacing={5}>
                            <FormControl>
                                <FormLabel><div className="address-form-text" style={{ fontSize: "1rem", fontWeight: "500" }}>Phone No</div></FormLabel>
                                <Input width="100%"
                                    borderColor="white"
                                    borderBottomColor="black"
                                    borderRadius="0"
                                    placeholder="Enter Phone No"
                                    focusBorderColor="black"
                                    type="number"
                                    focusBorderColor="#FFFFFF"
                                    focusBorderBottomColor="#000000"
                                    _hover={{ borderColor: "none" }}
                                    _focus={{ borderBottomColor: "black" }}
                                />
                            </FormControl>

                            <FormControl>
                                <FormLabel><div className="address-form-text" style={{ fontSize: "1rem", fontWeight: "500" }}>Alternative No</div></FormLabel>
                                <Input width="100%"
                                    borderColor="white"
                                    borderBottomColor="black"
                                    borderRadius="0"
                                    placeholder="Enter Alternative No"
                                    focusBorderColor="black"
                                    type="number"
                                                                        focusBorderBottomColor="#000000"
                                    _hover={{ borderColor: "none" }}
                                    _focus={{ borderBottomColor: "black" }}
                                />
                            </FormControl>
                        </Stack>
                        <Link to="/People Services/Booking/Cart">
                            <div>
                                <Button width="30%"
                                    padding="1%"
                                    backgroundColor=" #2B7FFF"
                                    color="white"
                                    fontWeight="400">
                                    View Summary
                                </Button>
                            </div>
                        </Link>


                    </Stack>
                </div>
                <div className='address-inner-right'>
                    <Stack direction="column" spacing={10} width="100%">
                        <FormControl>
                            <FormLabel><div className="address-form-text" style={{ fontSize: "1rem", fontWeight: "500" }}>Map Location</div></FormLabel>
                            <Input width="100%"
                                borderColor="white"
                                borderBottomColor="black"
                                borderRadius="0"
                                placeholder="Enter your map location"
                                           focusBorderColor="#FFFFFF"
                                focusBorderBottomColor="#000000"
                                _hover={{ borderColor: "none" }}
                                _focus={{ borderBottomColor: "black" }}
                            />
                        </FormControl>
                        <img src={Address_img1} />
                    </Stack>
                </div>
            </div>
        </div>
    )
}
