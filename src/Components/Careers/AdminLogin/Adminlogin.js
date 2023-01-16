


import React, { useState } from 'react'
import "./Adminlogin.css"
import { Button, ButtonGroup, Stack, Divider, Text, Center, Input } from '@chakra-ui/react'
import { NavLink as Link } from 'react-router-dom'


export default function Admin() {
    return (
        <div className='admin-outer'>
            <div className='admin-box'>
                <Stack height="100%" direction="column" width="100%" >
                    <Center>
                        <Text marginTop="5%" fontWeight="500" color="#2B7FFF"><div className="admin-title">Administrative Log-in</div></Text>
                    </Center>
                    <Center>
                        <Stack direction="column" height="100%" width="70%" marginTop="10%" spacing={3}>
                            <Input backgroundColor="rgba(196, 196, 196, 0.2)"
                                borderRadius="0.5rem"
                                placeHolder="Email"
                                type="email"
                                _placeholder={{ color: 'grey', fontSize: '1rem', opacity: "1" }} />

                            <Input backgroundColor="rgba(196, 196, 196, 0.2)"
                                borderRadius="0.5rem"
                                placeHolder="Password"
                                type="password"
                                _placeholder={{ color: 'grey', fontSize: '1rem', opacity: "1" }} />

                            <Button backgroundColor="#2B7FFF"
                                color="white"
                                fontWeight="400"
                                >Log-In</Button>
                        </Stack>
                    </Center>


                </Stack>
            </div >
        </div >
    )
}
