import React from 'react'
import "./Multiplatform.css"

import Multiplatform_img1 from "./MultiplatformImages/Multiplatform_img1.png"
import Multiplatform_img2 from "./MultiplatformImages/Multiplatform_img2.png"
import { Button, Stack } from '@chakra-ui/react'
// import Multiplatform_img3 from "./MultiplatformImages/Multiplatform_img3.png"
// import Multiplatform_img4 from "./MultiplatformImages/Multiplatform_img4.png"

import { CheckIcon } from '@chakra-ui/icons'

export default function Multiplatform() {
    return (
        <div className='multiplatform-outer'>
            <div className='multiplatform-top'>
                Multiplatform<label className='multiplatform-top-content'> Availability</label>
                <img className="multiplatform-img-arrow" src={Multiplatform_img2} />
            </div>

            <div className='multiplatform-bottom'>
                <div className='multiplatform-bottom-left'>
                    <img className="multiplatform-img" src={Multiplatform_img1} />
                </div>

                <div className='multiplatform-bottom-right'>
                    <div className='multiplatform-right-text'>
                        The one app for all your home services
                    </div>

                    <div className="multiplatform-bottom-right-text">
                        Pick your professional from a wide price range, review their ratings and book your service, all in a few taps.
                    </div>
                    <div className='multiplatform-btn'>
                        <Stack direction="row" spacing={10} width="100%">
                            <Button width="30%" color="white" backgroundColor="blue.500" padding='4%' _hover={{ backgroundColor: "blue.500", transform: "scale(1.05)" }}><div className="multiplatform-btn-text">Google Play</div></Button>
                            <Button width="30%" color="white" backgroundColor="green.500" padding='4%' _hover={{ backgroundColor: "green.500", transform: "scale(1.05)" }}><div className="multiplatform-btn-text">Apple Store</div></Button>
                        </Stack>
                    </div>
                </div>
            </div>
        </div >
    )
}
