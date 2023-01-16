import React, { useState } from 'react'
import "./Login.css"
import { Button, ButtonGroup, Stack, Divider, Text, Center, Input } from '@chakra-ui/react'
import { NavLink as Link } from 'react-router-dom'


export default function Login() {
    return (
        <div className='login-outer'>
            <div className='login-box'>
                <Stack height="100%" direction="column" width="100%" >
                    <Center>
                        <Text marginTop="5%" fontWeight="500" color="#2B7FFF"><div className="login-title">Fill the details below</div></Text>
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



                            {/* <div style={{ width: "100%" }}> */}
                            <Button backgroundColor="Black"
                                color="white"
                                fontWeight="400"
                                ><Link to="/Careers Main/Log In/Admin Log In">Administrative log-in</Link></Button>
                            {/* </div> */}




                        </Stack>
                    </Center>
                    <Center>
                        <Stack direction="row" width="60%" align="center">
                            <Divider backgroundColor="black" height="0.15rem" />
                            <Text fontSize="100%" fontWeight="500" >Or</Text>
                            <Divider backgroundColor="black" height="0.15rem" />
                        </Stack>
                    </Center>

                    <Center>
                        <Stack direction="column" width="50%" marginTop="2%">
                            <Button backgroundColor="#0077B7"
                                color="white"
                                fontWeight="400"
                                fontSize="60%" >
                                <Stack zIndex="0" direction="row" width="100%" display="flex" alignItems="center" justifyContent="space-between">
                                    <Text color="white" width="100%" display="flex" justifyContent="center">Log in with LinkedIn </Text>
                                </Stack>
                            </Button>
                            <Button backgroundColor="white"
                                borderColor="black"
                                borderWidth="0.1rem"
                                color="black"
                                fontWeight="400"
                                fontSize="60%">
                                <Stack zIndex="0" direction="row" width="100%" display="flex" alignItems="center" justifyContent="space-between">
                                    {/* <img src={login_img4} /> */}
                                    <Text color="black" width="100%" display="flex" justifyContent="center">Log in withAngleList </Text>
                                </Stack>
                            </Button>
                            <Button backgroundColor="white"
                                borderColor="black"
                                borderWidth="0.1rem"
                                color="black"
                                fontWeight="400"
                                fontSize="60%">
                                <Stack zIndex="0" direction="row" width="100%" display="flex" alignItems="center" justifyContent="space-between">
                                    {/* <img src={login_img4} /> */}
                                    <Text color="black" width="100%" display="flex" justifyContent="center">Log in with Internshala </Text>
                                </Stack>
                            </Button>
                        </Stack>
                    </Center>

                    <Center>
                        <Stack direction="row" marginTop="5%">
                            <Text fontWeight="500"><div className="login-text">Don’t have an account ?</div> </Text>
                            <Link to="/Careers Main/Sign Up">
                                <Text fontWeight="500" color="#2B7FFF"><div className="login-text">Sign Up</div></Text>
                            </Link>
                        </Stack>
                    </Center>

                </Stack>
            </div >
        </div >
    )
}
