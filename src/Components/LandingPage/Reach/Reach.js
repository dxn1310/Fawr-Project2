import React from 'react';
import "./Reach.css";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
    , Text, Box,
    Textarea,
    Checkbox,
    Stack, Button, Center
} from '@chakra-ui/react'
import Reach_img1 from "./ReachImages/Reach_img3.png"

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

export default function Reach() {
    return (
        <div className='reach-outer'>
            <img className="reach-bgimg" src={Reach_img1} />
            <div className='reach-x'>
                <div className='reach-inner'>
                    <div className='reach-box'>
                        <div className='reach-box-content'>
                            <div className='reach-title'>
                                <label>Let’s Partner up</label>
                            </div>
                            <div>
                                <label>Let’s level up our brand together</label>
                            </div>
                            <Stack direction="column" width="100%" marginTop="5%" height="100%" paddingBottom="5%">
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

                                <Accordion allowToggle>
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    <div className='reach-checkbox-title'>
                                                        <label>What do you need help with ?</label>
                                                    </div>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <div className='reach-checkbox'>
                                                <Checkbox width="50%">
                                                    <Text fontSize="0.8rem" fontWeight="400">Global Technology solution</Text>
                                                </Checkbox>
                                                <Checkbox width="50%">
                                                    <Text fontSize="0.8rem" fontWeight="400">Tax Solution</Text>
                                                </Checkbox>
                                            </div>

                                            <div className='reach-checkbox'>
                                                <Checkbox width="50%">
                                                    <Text fontSize="0.8rem" fontWeight="400">Compliances solution</Text>
                                                </Checkbox>
                                                <Checkbox width="50%">
                                                    <Text fontSize="0.8rem" fontWeight="400">Private security guaranting</Text>
                                                </Checkbox>
                                            </div>
                                            <div className='reach-checkbox'>
                                                <Checkbox width="50%">
                                                    <Text fontSize="0.8rem" fontWeight="400">Non technical service</Text>
                                                </Checkbox>
                                                <Checkbox width="50%">
                                                    <Text fontSize="0.8rem" fontWeight="400">Corporate fraud and forensic investigation</Text>
                                                </Checkbox>
                                            </div>
                                            <div className='reach-checkbox'>
                                                <Checkbox width="50%">
                                                    <Text fontSize="0.8rem" fontWeight="400">Facility management</Text>
                                                </Checkbox>
                                                <Checkbox width="50%">
                                                    <Text fontSize="0.8rem" fontWeight="400">Background check service</Text>
                                                </Checkbox>
                                            </div>
                                            <div className='reach-checkbox'>
                                                <Checkbox width="50%">
                                                    <Text fontSize="0.8rem" fontWeight="400">Asset management</Text>
                                                </Checkbox>
                                                <Checkbox width="50%">
                                                    <Text fontSize="0.8rem" fontWeight="400">Home service</Text>
                                                </Checkbox>
                                            </div>
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>

                                <Center> <Button backgroundColor="#2B7FFF" borderRadius="1rem" color="white" width="50%"
                                    fontSize="2rem" fontWeight="400">Submit</Button></Center>


                            </Stack>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
