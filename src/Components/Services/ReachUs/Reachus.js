import React from 'react';
import "./Reachus.css";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
    , Text,
    Textarea,
    Checkbox,
    Stack, Button, Center
} from '@chakra-ui/react'

export default function reachus() {
    return (
        <div className='reachus-outer'>
            <div className='reachus-inner'>
                <div className='reachus-box'>
                    <div className='reachus-box-content'>
                        <div className='reachus-title'>
                            <label>Let’s Partner up</label>
                        </div>
                        <div>
                            <label>Let’s level up our brand together</label>
                        </div>
                        <Stack direction="column" wisth="100%" marginTop="5%" spacing={10}>
                            <Stack direction="row">
                                <FormControl>
                                    <FormLabel fontSize="0.8rem" fontWeight="400">First Name</FormLabel>
                                    <Input placeholder='First Name'
                                        _placeholder={{ color: 'black', fontSize: '0.8rem' }}
                                        width="100%"
                                        backgroundColor="#F5F5F5"
                                        borderColor="black" />

                                </FormControl>
                                <FormControl >
                                    <FormLabel fontSize="0.8rem" fontWeight="400">Last Name</FormLabel>
                                    <Input placeholder="Last Name"
                                        _placeholder={{ color: 'black', fontSize: '0.8rem' }}
                                        width="100%"
                                        backgroundColor="#F5F5F5"
                                        borderColor="black" />

                                </FormControl>
                            </Stack>
                            <Stack direction="row">
                                <FormControl>
                                    <FormLabel fontSize="0.8rem" fontWeight="400">Email</FormLabel>
                                    <Input placeholder="example@gmail.com" type='email'
                                        _placeholder={{ color: 'black', fontSize: '0.8rem' }}
                                        width="100%"
                                        backgroundColor="#F5F5F5"
                                        borderColor="black" />

                                </FormControl>
                                <FormControl>
                                    <FormLabel fontSize="0.8rem" fontWeight="400">Phone  Number</FormLabel>
                                    <Input placeholder="Phone Number" type='number'
                                        _placeholder={{ color: 'black', fontSize: '0.8rem' }}
                                        width="100%"
                                        backgroundColor="#F5F5F5"
                                        borderColor="black" />

                                </FormControl>
                            </Stack>
                            <FormControl marginTop="7%" marginLeft="1%" >
                                <FormLabel fontSize="0.8rem" fontWeight="400">How can we help ?</FormLabel>
                                <Textarea
                                    placeholder="Tell us a little about your project...."
                                    _placeholder={{ color: 'black', fontSize: '0.8rem' }}
                                    width="100%"
                                    backgroundColor="#F5F5F5"
                                    borderColor="black"
                                />
                            </FormControl>

                            {/* <div className='reachus-checkbox-title'>
                                <label>What do you need help with ?</label>
                            </div>

                            <div className='reachus-checkbox'>
                                <Checkbox width="50%">
                                    <Text fontSize="0.8rem" fontWeight="400">Global Technology solution</Text>
                                </Checkbox>
                                <Checkbox width="50%">
                                    <Text fontSize="0.8rem" fontWeight="400">Tax Solution</Text>
                                </Checkbox>
                            </div>

                            <div className='reachus-checkbox'>
                                <Checkbox width="50%">
                                    <Text fontSize="0.8rem" fontWeight="400">Compliances solution</Text>
                                </Checkbox>
                                <Checkbox width="50%">
                                    <Text fontSize="0.8rem" fontWeight="400">Private security guaranting</Text>
                                </Checkbox>
                            </div>
                            <div className='reachus-checkbox'>
                                <Checkbox width="50%">
                                    <Text fontSize="0.8rem" fontWeight="400">Non technical service</Text>
                                </Checkbox>
                                <Checkbox width="50%">
                                    <Text fontSize="0.8rem" fontWeight="400">Corporate fraud and forensic investigation</Text>
                                </Checkbox>
                            </div>
                            <div className='reachus-checkbox'>
                                <Checkbox width="50%">
                                    <Text fontSize="0.8rem" fontWeight="400">Facility management</Text>
                                </Checkbox>
                                <Checkbox width="50%">
                                    <Text fontSize="0.8rem" fontWeight="400">Background check service</Text>
                                </Checkbox>
                            </div>
                            <div className='reachus-checkbox'>
                                <Checkbox width="50%">
                                    <Text fontSize="0.8rem" fontWeight="400">Asset management</Text>
                                </Checkbox>
                                <Checkbox width="50%">
                                    <Text fontSize="0.8rem" fontWeight="400">Home service</Text>
                                </Checkbox>
                            </div> */}
                            <Center> <Button backgroundColor="#2B7FFF" borderRadius="1rem" color="white" width="50%"
                                fontSize="2rem" fontWeight="400">Submit</Button></Center>


                        </Stack>
                    </div>
                </div>
            </div>
        </div>
    )
}
