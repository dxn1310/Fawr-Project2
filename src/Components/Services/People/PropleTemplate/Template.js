import React from 'react'
import "./Template.css"
import {
    Stack, Button, Input
} from '@chakra-ui/react'

export default function Template(props) {
    // const electronicOptions = props.options;
    return (
        <div className='template-outer'>
            <img className='template-bgimg' src={props.bgimg} />
            <div className='template-inner'>
                <div className='template-grid-1'>
                    {
                        props.gridImages.map(element => <img src={element} />)
                    }
                </div>
                <div className='template-content'>
                    <div className='template-content-left'>
                        {
                            props.options.map((option, index) => {
                                return <div className='template-content-left-option'>
                                    <div className='template-content-left-option-title'>
                                        {option.title}
                                    </div>
                                    <div className='template-content-left-option-content'>
                                        <div className='template-content-left-option-content-left'>
                                            {
                                                option.content.map((opt, index) => {
                                                    return <div className='option-outer'>
                                                        <div className='option-outer-left'>
                                                            <div>
                                                                <div className='option-title'>
                                                                    {opt.contentTitle}
                                                                </div>
                                                                <div className='option-rating'>
                                                                    <Stack direction="row" spacing={3}>
                                                                        <label>{opt.contentRating}</label>
                                                                        <label>({opt.contentRatingPeople})</label>
                                                                    </Stack>
                                                                </div>
                                                                <div className='option-price'>
                                                                    <label>Start at ₹ {opt.contentPrice}</label>
                                                                </div>
                                                                <ul className='option-ul'>
                                                                    {opt.contentPoints.map(point => <li className='option-li'>{point}</li>)
                                                                    }
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className='option-outer-right'>
                                                            <Button borderColor="white"
                                                                backgroundColor="white"
                                                                boxShadow=" 2px 2px 4px 1px rgba(0, 0, 0, 0.32)"
                                                                borderRadius="0.5rem"
                                                                color="#407BFF"
                                                            >Add +</Button>
                                                        </div>
                                                    </div>
                                                })

                                            }
                                        </div>

                                    </div>
                                </div>

                            })


                            // <Link to="{option == 'Cleaning & Pest Control' ? " /People Services/Cleaning & Pest Control" : "/"} ></Link>


                        }
                        {/* </div> */}
                    </div>
                    <div className='template-content-right'>
                        <Stack direction="row" spacing={5} width="100%">
                            <Input width="100%"
                                placeholder='Enter Location'
                                _placeholder={{ color: "grey", fontSize: "100%", padding: '1%' }}
                                borderColor="black"
                                borderWidth="0.1rem" />
                            <Button color="white"
                                backgroundColor="#2A7FFF"
                                // padding="1%"
                                width="fit-content">Apply</Button>
                        </Stack>
                    </div>
                </div >
            </div >

        </div >
    )
}
