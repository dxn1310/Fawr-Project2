import React from 'react';
import "./Search.css";
import { Input, Button, InputGroup } from '@chakra-ui/react'

export default function Search() {
    return (
        <div className='search-outer'>
            <div className='search-inner'>
                <div className='search-inner-content'>
                    <label>Create a recognition-rich culture with us.</label>
                    <InputGroup width="75%"
                        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
                        borderRadius="1rem" height="5rem"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        backgroundColor="white">
                        <div className='search-box'>
                            <Input
                                border="none"
                                placeholder='Enter password'
                            />

                            <Button backgroundColor="#407BFF"
                                borderRadius="1rem"
                                color="white"
                                width="8rem"
                                height="3rem"
                                fontSize="1.25rem">
                                Search
                            </Button>
                        </div>
                    </InputGroup>
                    <div className='search-options'>
                        <Button backgroundColor=" rgba(64, 123, 255, 0.8);"
                            borderRadius="0.5rem"
                            color="white">
                            Global Technology Solution
                        </Button>
                        <Button backgroundColor=" rgba(64, 123, 255, 0.8);"
                            borderRadius="0.5rem"
                            color="white">
                            Non - Technical Service
                        </Button>
                        <Button backgroundColor=" rgba(64, 123, 255, 0.8);"
                            borderRadius="0.5rem"
                            color="white">
                            Tax Solution
                        </Button>
                        <Button backgroundColor=" rgba(64, 123, 255, 0.8);"
                            borderRadius="0.5rem"
                            color="white">
                            Compiances Solution
                        </Button>
                        <Button backgroundColor=" rgba(64, 123, 255, 0.8);"
                            borderRadius="0.5rem"
                            color="white">
                            Others
                        </Button>
                    </div>







                </div>

            </div>
        </div>
    )
}
