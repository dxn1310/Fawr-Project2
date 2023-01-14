import { Button, Stack } from '@chakra-ui/react'
import React from 'react'
import "./Grow.css"
import { NavLink as Link } from 'react-router-dom'
export default function Grow() {
    return (
        <div className="grow-outer">
            <div className="grow-inner">
                <div className='grow-inner-left'>
                    <Stack direction="column" spacing={2}>
                        <div className="grow-inner-left-content1">
                            Grow Your Income With Agamemnon
                        </div>
                        <div className="grow-inner-left-content2">
                            Get the tools you need to get more jobs, impress your clients, and earn more money on every job.
                        </div>
                    </Stack>
                </div>
                <Link to="/Reach Us">
                    <div className='grow-inner-right'>
                        <Button
                            color="white"
                            backgroundColor="orange.300"
                            borderRadius="1rem"
                            height="fit-content"
                            // padding="5%"
                            paddingTop="5%"
                            paddingBottom="5%"
                        // paddingLeft="10%"
                        // paddingright="10%"
                        >
                            <div className='grow-btn-text'>
                                Reach Us
                            </div>
                        </Button>
                    </div>
                </Link>
            </div>
        </div>
    )
}
