import React from 'react';
import "./Search.css";
import { Input, Button, InputGroup } from '@chakra-ui/react'
import Search_img1 from "./SearchImages/Search_img1.png"

export default function Search() {
    return (
        <div className='search-outer'>
            <img className='search-bgimg' src={Search_img1} />
            <div className='search-x'>
                <div className='search-inner'>
                    <div className='search-inner-content'>
                        <div className='search-title'>
                            Create a recognition-rich culture with us.
                        </div>
                        <InputGroup width="75%"
                            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
                            borderRadius="0.5rem"
                            padding="1%"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            backgroundColor="white"
                            marginTop="5%">
                            <div className='search-box'>
                                <Input
                                    border="none"
                                    placeholder='Find services...'
                                    focusBorderColor="white"
                                    height="fit-content"
                                    width="100%"
                                    paddingRight="1%"
                                    _placeholder={{ fontSize: "1rem" }}
                                />

                                <Button backgroundColor="#407BFF"
                                    borderRadius="0.5rem"
                                    color="white"
                                    // padding="2%"
                                    // height="fit-content"
                                    paddingLeft="5%"
                                    paddingRight="5%"
                                    paddingTop="2%"
                                    paddingBottom="2%"
                                >
                                    <div className='search-btn-text'>
                                        Serach
                                    </div>
                                </Button>
                            </div>
                        </InputGroup>
                        <div className='search-options'>
                            <Button backgroundColor=" rgba(64, 123, 255, 0.8);"
                                borderRadius="0.5rem"
                                // height="50%"
                                color="white"
                                padding="1%">
                                <div className='search-btn-text'>
                                    Global Technology Solution
                                </div>

                            </Button>
                            <Button backgroundColor=" rgba(64, 123, 255, 0.8);"
                                borderRadius="0.5rem"
                                padding="1%"
                                color="white">
                                <div className='search-btn-text'>
                                    Non - Technical Service
                                </div>

                            </Button>
                            <Button backgroundColor=" rgba(64, 123, 255, 0.8);"
                                borderRadius="0.5rem"
                                padding="1%"
                                color="white">
                                <div className='search-btn-text'>
                                    Tax Solution
                                </div>

                            </Button>
                            <Button backgroundColor=" rgba(64, 123, 255, 0.8);"
                                borderRadius="0.5rem"
                                padding="1%"
                                color="white">
                                <div className='search-btn-text'>
                                    Compiances Solution
                                </div>

                            </Button>
                            <Button backgroundColor=" rgba(64, 123, 255, 0.8);"
                                borderRadius="0.5rem"
                                padding="1%"
                                color="white">
                                <div className='search-btn-text'>
                                    Others
                                </div>

                            </Button>
                        </div>


                    </div>

                </div>
            </div>

        </div>
    )
}
