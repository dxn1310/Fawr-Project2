import React from 'react'
import "./Find.css"

import Find_img1 from "./FindImages/Find_img1.png"
import Find_img2 from "./FindImages/Find_img2.png"
import Find_img3 from "./FindImages/Find_img3.png"
import Find_img4 from "./FindImages/Find_img4.png"

import { CheckIcon } from '@chakra-ui/icons'

export default function Find() {
    return (
        <div className='find-outer'>
            <div className='find-top'>
                Find Your<label className='find-top-content'> Expert</label>
                <img className="find-img-arrow" src={Find_img2} />
            </div>

            <div className='find-bottom'>
                <div className='find-bottom-left'>
                    <img className="find-img" src={Find_img4} />
                </div>

                <div className='find-bottom-right'>
                    <div className='find-right-text'>
                        With Agamemnon you will find the best Professionals in the area, whatever your need.
                    </div>


                    <div className='find-grid'>
                        <div className='find-circle-outer'>
                            <div className='find-circle'><CheckIcon color="white" boxSize="50%" /></div>
                        </div>
                        <div className='find-grid-content'>
                            <div className='find-grid-title'>
                                Verified & vetted professionals
                            </div>
                            <div className='find-grid-text'>
                                Get service from trusted and verified partner with professional skills and experience.
                            </div>
                        </div>
                    </div>

                    <div className='find-grid'>
                        <div className='find-circle-outer'>
                            <div className='find-circle'><CheckIcon color="white" boxSize="50%" /></div>
                        </div>
                        <div className='find-grid-content'>
                            <div className='find-grid-title'>
                                Matched to your Needs.
                            </div>
                            <div className='find-grid-text'>
                                Avail service specific options according to your needs.
                            </div>
                        </div>
                    </div>

                    <div className='find-grid'>
                        <div className='find-circle-outer'>
                            <div className='find-circle'><CheckIcon color="white" boxSize="50%" /></div>
                        </div>
                        <div className='find-grid-content'>
                            <div className='find-grid-title'>
                                Customer support at every step.
                            </div>
                            <div className='find-grid-text'>
                                Support for every query at every step.
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}
