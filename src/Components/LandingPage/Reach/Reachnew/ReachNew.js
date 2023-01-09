import React from 'react'
import "./Reachnew.css"
import Reach_img1 from "../ReachImages/Reach_img1.png"
import Reach_img5 from "../ReachImages/Reach_img5.png"
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
// import Reach_img1 from "./ReachImages/Reach_img3.png"

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'

export default function ReachNew() {
    const [isLargerThan750] = useMediaQuery('(min-width: 750px)')

    return (
        <div className='y-outer'>
            <div className='y-title'>
                <img className='y-title-img' src={Reach_img5} />
            </div>
            <div className='y-inner'>
                <div className='y-inner-left'>
                    <div className='y-inner-left-text'>
                        We are a industry-leading company  that values honesty, integrity and efficiency. Providing quality service and care.
                    </div>
                </div>
                <div className='y-inner-right'>
                    <div className='y-inner-right-content'>
                        <div className="y-inner-right-content-title">Let’s Partner up</div>
                        <div className="y-inner-right-content-text">Let’s level up our brand together</div>
                        <Stack direction="column" width="100%" marginTop="5%" height="100%" paddingBottom="5%">
                            <Stack direction={isLargerThan750 ? "row" : "column"}>
                                <FormControl>
                                    <FormLabel fontSize={isLargerThan750 ? "0.7rem" : "0.5rem"} fontWeight="400">First Name</FormLabel>
                                    <Input placeholder='First Name'
                                        _placeholder={{ color: 'black', paddingLeft: "2%", fontSize: isLargerThan750 ? "1rem" : "0.45rem" }}
                                        width="100%"
                                        height="fit-content"
                                        padding={isLargerThan750 ? "2%" : "0%"}
                                        backgroundColor="#F5F5F5"
                                        focusBorderColor="#FFFFFF"
                                        focusBorderBottomColor="#000000"
                                        _hover={{ borderColor: "none" }}

                                    />

                                </FormControl>
                                <FormControl >
                                    <FormLabel fontSize={isLargerThan750 ? "0.7rem" : "0.5rem"} fontWeight="400">Last Name</FormLabel>
                                    <Input placeholder="Last Name"
                                        _placeholder={{ color: 'black', paddingLeft: "2%", fontSize: isLargerThan750 ? "1rem" : "0.45rem" }}
                                        width="100%"
                                        backgroundColor="#F5F5F5"
                                        focusBorderColor="#FFFFFF"
                                        focusBorderBottomColor="#000000"
                                        _hover={{ borderColor: "none" }} height="fit-content"
                                        padding={isLargerThan750 ? "0%" : "0%"}
                                    />

                                </FormControl>
                            </Stack>
                            <Stack direction={isLargerThan750 ? "row" : "column"}>
                                <FormControl>
                                    <FormLabel fontSize={isLargerThan750 ? "0.7rem" : "0.5rem"} fontWeight="400">Email</FormLabel>
                                    <Input placeholder="example@gmail.com" type='email'
                                        _placeholder={{ color: 'black', paddingLeft: "2%", fontSize: isLargerThan750 ? "1rem" : "0.45rem" }}
                                        width="100%"
                                        backgroundColor="#F5F5F5"
                                        focusBorderColor="#FFFFFF"
                                        focusBorderBottomColor="#000000"
                                        _hover={{ borderColor: "none" }} height="fit-content"
                                        padding={isLargerThan750 ? "0%" : "0%"} />

                                </FormControl>
                                <FormControl>
                                    <FormLabel fontSize={isLargerThan750 ? "0.7rem" : "0.5rem"} fontWeight="400">Phone  Number</FormLabel>
                                    <Input placeholder="Phone Number" type='number'
                                        _placeholder={{ color: 'black', paddingLeft: "2%", fontSize: isLargerThan750 ? "1rem" : "0.45rem" }}
                                        width="100%"
                                        backgroundColor="#F5F5F5"
                                        focusBorderColor="#FFFFFF"
                                        focusBorderBottomColor="#000000"
                                        _hover={{ borderColor: "none" }} height="fit-content"
                                        padding={isLargerThan750 ? "0%" : "0%"} />

                                </FormControl>
                            </Stack>
                            <FormControl marginTop="7%" marginLeft="1%" >
                                <FormLabel fontSize={isLargerThan750 ? "0.7rem" : "0.5rem"} fontWeight="400">How can we help ?</FormLabel>
                                <Textarea
                                    placeholder="Tell us a little about your project...."
                                    _placeholder={{ color: 'black', paddingLeft: "2%", fontSize: isLargerThan750 ? "1rem" : "0.45rem" }}
                                    width="100%"
                                    backgroundColor="#F5F5F5"
                                    focusBorderColor="#FFFFFF"
                                    focusBorderBottomColor="#000000"
                                    _hover={{ borderColor: "none" }} height="fit-content"
                                    padding={isLargerThan750 ? "0%" : "0%"}
                                />
                            </FormControl>

                            <Accordion allowToggle >
                                <AccordionItem borderColor="white">
                                    <h2>
                                        <AccordionButton marginTop="5%" borderColor="black" borderWidth="0.1rem" borderRadius="0.5rem">
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

                            <Center> <Button backgroundColor="#2B7FFF" borderRadius="1rem" color="white" width="30%" marginTop="5%"
                                fontWeight="400"><div className="y-btn-text">Submit</div></Button></Center>
                        </Stack>
                    </div>
                </div>
            </div>
            <img className="y-bgimg" src={Reach_img1} />
        </div>
    )
}
