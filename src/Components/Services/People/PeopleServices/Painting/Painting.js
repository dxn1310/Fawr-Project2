import React, { useState } from 'react'
import "./Painting.css"
import Painting_img1 from "./PaintingImages/Painting_img1.png"
import Painting_img2 from "./PaintingImages/Painting_img2.png"
import Painting_img3 from "./PaintingImages/Painting_img3.png"
import Painting_img4 from "./PaintingImages/Painting_img4.png"
import Painting_img5 from "./PaintingImages/Painting_img5.png"
import Painting_img6 from "./PaintingImages/Painting_img6.png"
import Painting_img7 from "./PaintingImages/Painting_img7.png"
import Painting_img8 from "./PaintingImages/Painting_img8.png"
import Painting_img9 from "./PaintingImages/Painting_img9.png"
import Painting_img10 from "./PaintingImages/Painting_img10.png"
import Painting_img11 from "./PaintingImages/Painting_img11.png"
import Painting_img12 from "./PaintingImages/Painting_img12.png"

import { Select, Stack, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import {
    Accordion, Box,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

import { NavLink as Link } from 'react-router-dom'

export default function Painting() {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")

    console.log(name)
    console.log(phone)
    console.log(email)
    console.log(address)

    const handleClick = () => {
        setName("");
        setPhone("");
        setEmail("");
        setAddress("");
    }
    return (
        <div className='Painting-outer'>
            <img className='Painting-bgimg' src={Painting_img1} />
            <div className='Painting-inner'>
                <div className='Painting-title'>How We Works</div>
                <div className="Painting-grid-1">
                    <div className='Painting-grid-1-element'>
                        <img className="painting-imgs" src={Painting_img2} />
                        <div className='Painting-grid-1-title'>
                            Book Consultation
                        </div>
                    </div>
                    <div className='Painting-grid-1-element'>
                        <img className="painting-imgs" src={Painting_img3} />
                        <div className='Painting-grid-1-title'>
                            On-site consultation & estimate
                        </div>
                    </div>
                    <div className='Painting-grid-1-element'>
                        <img className="painting-imgs" src={Painting_img4} />
                        <div className='Painting-grid-1-title'>
                            Safe Painting
                        </div>
                    </div>
                    <div className='Painting-grid-1-element'>
                        <img className="painting-imgs" src={Painting_img5} />
                        <div className='Painting-grid-1-title'>
                            Site Handover
                        </div>
                    </div>
                </div>
                <div className='Painting-title'>Service</div>
                <div className='Painting-content'>To create a more comfortable and relaxing atmosphere in your house, we help you discover the right Colour for Wall paint design ideas. Color palettes should reflect your mood and emotions, whether you are unwinding, adjusting or adjusting. Here are some tips on selecting the right palette.</div>
                <div className='Painting-grid'>
                    <div className='Painting-grid-element'>
                        <img className="Painting-grid-img" src={Painting_img6} />
                        <div className='Painting-grid-element-title'>
                            Safe Paniting
                        </div>
                        <div className='Painting-grid-element-content'>
                            We offer full-service interior painting for a long-lasting result.
                        </div>

                    </div>
                    <div className='Painting-grid-element'>
                        <img className="Painting-grid-img" src={Painting_img7} />
                        <div className='Painting-grid-element-title'>
                            Exterior Painting
                        </div>
                        <div className='Painting-grid-element-content'>
                            Our trained painters provide exceptional quality and superior protection when painting exterior walls.
                        </div>
                    </div>
                    <div className='Painting-grid-element'>
                        <img className="Painting-grid-img" src={Painting_img8} />
                        <div className='Painting-grid-element-title'>
                            Waterproofing
                        </div>
                        <div className='Painting-grid-element-content'>
                            Using homeshield Moisture Meters, you can solve your dampness issues and wall seepage issues.
                        </div>
                    </div>
                    <div className='Painting-grid-element'>
                        <img className="Painting-grid-img" src={Painting_img9} />
                        <div className='Painting-grid-element-title'>
                            Stencils
                        </div>
                        <div className='Painting-grid-element-content'>
                            Make your home stand out with the latest wall design stencils
                        </div>
                    </div>
                </div>
                <div className='Painting-grid1'>
                    <div className='Painting-grid-element'>
                        <img className="Painting-grid-img" src={Painting_img10} />
                        <div className='Painting-grid-element-title'>
                            Texture
                        </div>
                        <div className='Painting-grid-element-content'>
                            We offer customised design texture for wall
                        </div>
                    </div>
                    <div className='Painting-grid-element'>
                        <img className="Painting-grid-img" src={Painting_img11} />
                        <div className='Painting-grid-element-title'>
                            Woods Coatings
                        </div>
                        <div className='Painting-grid-element-content'>
                            We help you find the right textures for every corner and room of your home, both inside and outside.
                        </div>
                    </div>
                </div>
                <div className='Painting-accordians'>
                    <div className='Painting-title'>Frequently Asked Question</div>
                    <Accordion allowMultiple marginTop="5%" width="100%" spacing={5}>
                        <AccordionItem backgroundColor="#2A7FFF"
                            color="white"
                            fontSize="100%"
                            fontWeight='400'
                            height="50%"
                            width="100%"
                            marginTop="2%">
                            <h2>
                                <AccordionButton>
                                    <Box as="span"
                                        flex='1'
                                        textAlign='left'
                                        paddingLeft="5%"
                                        fontSize="100%"
                                        padding="1%">
                                        What is Fawr Painting ?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}
                                backgroundColor="white"
                                color="black"
                                borderColor="black"
                                borderWidth="0.1rem"
                                fontSize="70%">
                                It is a safe painting service by Fawr that offers at-home consultancy, accurate estimation, skilled painters, regular site supervision and dust-free experience.

                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem backgroundColor="#2A7FFF"
                            color="white"
                            fontSize="100%"
                            fontWeight='400'
                            height="50%"
                            width="100%"
                            marginTop="2%">
                            <h2>
                                <AccordionButton>
                                    <Box as="span"
                                        flex='1'
                                        textAlign='left'
                                        paddingLeft="5%"
                                        fontSize="100%"
                                        padding="1%">
                                        How do i pick colour for my home ?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}
                                backgroundColor="white"
                                color="black"
                                borderColor="black"
                                borderWidth="0.1rem"
                                fontSize="70%">
                                Fawr offers colour combination books which help in selecting colours for home based on spaces & type of interior. One can also visit the nearest experience store in their city to meet a colour expert who can give customized solutions.

                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem backgroundColor="#2A7FFF"
                            color="white"
                            fontSize="100%"
                            fontWeight='400'
                            height="50%"
                            width="100%"
                            marginTop="2%">
                            <h2>
                                <AccordionButton>
                                    <Box as="span"
                                        flex='1'
                                        textAlign='left'
                                        paddingLeft="5%"
                                        fontSize="100%"
                                        padding="1%">
                                        How long the painting work will go on ?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}
                                backgroundColor="white"
                                color="black"
                                borderColor="black"
                                borderWidth="0.1rem"
                                fontSize="70%">
                                This depends on the scale of the project and requirements like numbers of rooms/floors to be painted, the prep work involved and the touch up. Weather conditions need to be factored in as well.

                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem backgroundColor="#2A7FFF"
                            color="white"
                            fontSize="100%"
                            fontWeight='400'
                            height="50%"
                            width="100%"
                            marginTop="2%">
                            <h2>
                                <AccordionButton>
                                    <Box as="span"
                                        flex='1'
                                        textAlign='left'
                                        paddingLeft="5%"
                                        fontSize="100%"
                                        padding="1%">
                                        Can the product be applied during rainy seasion ?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}
                                backgroundColor="white"
                                color="black"
                                borderColor="black"
                                borderWidth="0.1rem"
                                fontSize="70%">
                                Every product has its own drying time. Painting during the rainy season is quite risky.It might be a problem if you proceed with painting and it rains heavily, preventing the paint from drying in time.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem backgroundColor="#2A7FFF"
                            color="white"
                            fontSize="100%"
                            fontWeight='400'
                            height="50%"
                            width="100%"
                            marginTop="2%">
                            <h2>
                                <AccordionButton>
                                    <Box as="span"
                                        flex='1'
                                        textAlign='left'
                                        paddingLeft="5%"
                                        fontSize="100%"
                                        padding="1%">
                                        Will i get warranty in printing ?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}
                                backgroundColor="white"
                                color="black"
                                borderColor="black"
                                borderWidth="0.1rem"
                                fontSize="70%">
                                Yes. Fawr gives 1 year warranty over painting. But the warranty do not cover if any physical damage happens.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className='Painting-form'>
                    <div className='Painting-form-left'>
                        <img src={Painting_img12} />
                    </div>
                    <div className='Painting-form-right'>
                        <Stack direction="column" spacing={5}>
                            <FormControl>
                                <FormLabel>Full Name</FormLabel>
                                <Input borderColor="white"
                                    borderBottomColor="black"
                                    borderRadius="0"
                                    focusBorderColor="#FFFFFF"
                                    focusBorderBottomColor="#000000"
                                    _hover={{ borderColor: "none" }}
                                    _focus={{ borderBottomColor: "black" }}
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Phone Number</FormLabel>
                                <Input type="number"
                                    borderColor="white"
                                    borderBottomColor="black"
                                    borderRadius="0"
                                    focusBorderColor="#FFFFFF"
                                    focusBorderBottomColor="#000000"
                                    _hover={{ borderColor: "none" }}
                                    _focus={{ borderBottomColor: "black" }}
                                    onChange={(e) => setPhone(e.target.value)}
                                    value={phone} />
                            </FormControl>


                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <Input type="email"
                                    borderColor="white"
                                    borderBottomColor="black"
                                    borderRadius="0"
                                    focusBorderColor="#FFFFFF"
                                    focusBorderBottomColor="#000000"
                                    _hover={{ borderColor: "none" }}
                                    _focus={{ borderBottomColor: "black" }}
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email} />
                            </FormControl>


                            <FormControl>
                                <FormLabel>Address</FormLabel>
                                <Input
                                    borderColor="white"
                                    borderBottomColor="black"
                                    borderRadius="0"
                                    focusBorderColor="#FFFFFF"
                                    focusBorderBottomColor="#000000"
                                    _hover={{ borderColor: "none" }}
                                    _focus={{ borderBottomColor: "black" }}
                                    onChange={(e) => setAddress(e.target.value)}
                                    value={address} />
                            </FormControl>
                            <Link to="">
                                <Button color="white"
                                    backgroundColor="#2B7FFF"
                                    fontSize="70%"
                                    width="50%"
                                    fontWeight="400"
                                    marginTop="10%"
                                    onClick={handleClick}>Book Consultation</Button>
                            </Link>
                        </Stack>
                    </div>
                </div>
            </div>
        </div>
    )
}
