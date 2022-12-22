import React from 'react'

import {
    Stack, Button, Input
} from '@chakra-ui/react'


export default function Cart({ Bill }) {
    return (
        <div>
            {
                Bill.map((option, index) => {
                    return <div className='template-content-left-option'>
                        <div className='template-content-left-option-tfditle'>
                            {option.title}
                        </div>
                        {/* <div className='template-content-left-option-content'>
                            <div className='template-content-left-option-content-left'>
                                <div className='option-outer'>
                                    <div className='option-outer-left'>
                                        <div>

                                            <div className='option-rating'>
                                                <Stack direction="row" spacing={3}>
                                                    <label>{option.rating}</label>
                                                    <label>({option.ratingPeople})</label>
                                                </Stack>
                                            </div>
                                            <div className='option-priced'>
                                                <label>Start at ₹ {option.price}</label>
                                            </div>
                                            {/* <ul className='option-ul'>
                                                {option.points.map(point => <li className='opdtion-li'>{point}</li>)
                                                }
                                            </ul> 
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div> */}
                    </div>

                })
            }
        </div>

    )
}

