import React from 'react'
import "./Interior.css"
import Interior_img1 from "./InteriorImages/Interior_img1.png"
import Interior_img2 from "./InteriorImages/Interior_img2.png"
import Interior_img3 from "./InteriorImages/Interior_img3.png"
import Interior_img4 from "./InteriorImages/Interior_img4.png"
import Interior_img5 from "./InteriorImages/Interior_img5.png"
import Interior_img6 from "./InteriorImages/Interior_img6.png"

import { Select, Stack, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'

export default function Interior() {
    return (
        <div className='interior-outer'>
            <img className='interior-bgimg' src={Interior_img1} />
            <div className='interior-inner'>
                <div className='interior-title'>How We Works</div>
                <div className='interior-content'>Your home is all about you.  As soon as you get in touch with us, we try to learn about you and what you want out of a living space.We work with you to find the right balance between aesthetics and functionality, while staying within budget, time, and quality requirements.</div>
                <div className='interior-grid'>
                    <div className='interior-grid-element'>
                        <img className="interior-grid-img" src={Interior_img2} />
                        <div className='interior-grid-element-title'>
                            Understanding what you need.
                        </div>
                        <div className='interior-grid-element-content'>
                            Our team will work with you to understand both your functional and aesthetic requirements
                        </div>

                    </div>
                    <div className='interior-grid-element'>
                        <img className="interior-grid-img" src={Interior_img3} />
                        <div className='interior-grid-element-title'>
                            Cost Optimisation and planning
                        </div>
                        <div className='interior-grid-element-content'>
                            Before charting out a project plan, we will help you make key interior design decisions that fit your budget
                        </div>
                    </div>
                    <div className='interior-grid-element'>
                        <img className="interior-grid-img" src={Interior_img4} />
                        <div className='interior-grid-element-title'>
                            Design the interior structure
                        </div>
                        <div className='interior-grid-element-content'>
                            Your home will be designed uniquely by our designers, and you will be able to see the potential of your space in 3D
                        </div>
                    </div>
                    <div className='interior-grid-element'>
                        <img className="interior-grid-img" src={Interior_img5} />
                        <div className='interior-grid-element-title'>
                            Site  Handover
                        </div>
                        <div className='interior-grid-element-content'>
                            As soon as all work is completed, your new home is handed over to you - a successful collaboration.
                        </div>
                    </div>
                </div>
                <div className='interior-form'>
                    <div className='interior-form-left'>
                        <img src={Interior_img6} />
                    </div>
                    <div className='interior-form-right'>
                        <Stack direction="column" spacing={5}>
                            <FormControl>
                                <FormLabel>Full Name</FormLabel>
                                <Input borderColor="white"
                                    borderBottomColor="black"
                                    borderRadius="0" />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Phone Number</FormLabel>
                                <Input type="number"
                                    borderColor="white"
                                    borderBottomColor="black"
                                    borderRadius="0" />
                            </FormControl>


                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <Input type="email"
                                    borderColor="white"
                                    borderBottomColor="black"
                                    borderRadius="0" />
                            </FormControl>


                            <FormControl>
                                <FormLabel>Address</FormLabel>
                                <Input
                                    borderColor="white"
                                    borderBottomColor="black"
                                    borderRadius="0" />
                            </FormControl>

                            <Button color="white"
                                backgroundColor="#2B7FFF"
                                fontSize="70%"
                                width="50%"
                                fontWeight="400"
                                marginTop="10%">Book Consultation</Button>
                        </Stack>
                    </div>
                </div>
            </div>
        </div>
    )
}
