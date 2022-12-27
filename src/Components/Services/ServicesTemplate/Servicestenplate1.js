import React, { useState } from 'react'
import "./Servicestemplate1.css"
import Reachus from '../ReachUs/Reachus';
import { Button, ButtonGroup, Divider, Stack, Text } from '@chakra-ui/react'
import { NavLink as Link } from 'react-router-dom';

export default function Servicestemplate1({ title, img1, img2, img3, img4, underlinedTitle, content, gridData, option, setOption }) {
    const services = gridData;

    const [to, setTo] = useState("none");

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    return (
        <div className='servicestemplate1-outer'>
            <div className='servicestemplate1-heading'>
                <div className='servicestemplate1-heading-left'>
                    <div className='servicestemplate1-heading-left-content'>
                        <div><label className='servicestemplate1-title-underline'>{underlinedTitle}</label> </div>
                        <div><label>{title}</label></div>
                    </div>
                </div>
                <div className='servicestemplate1-heading-right'>
                    <img src={img1} />
                </div>
            </div>

            <div className='servicestemplate1-body-outer'>
                <div className='servicestemplate1-body'>
                    <div className='servicestemplate1-body-data'>
                        <label className='servicestemplate1-body-data-text'>
                            {content}
                        </label>
                    </div>

                    <div className='servicestemplate1-body-title'>
                        <label className='servicestemplate1-body-title-text'>
                            Services
                        </label>
                    </div>

                    <div className='servicestemplate1-grid-outer'>
                        <div className='servicestemplate1-grid'>


                            {
                                services.map((service, index) => {
                                    return <Link to={service.gridLink}><div className='servicestemplate1-grid-item' onClick={(e) => setOption(service.gridTitle)}>

                                        <div className='servicestemplate1-grid-img'><img src={service.gridImg} /></div>
                                        <div className='servicestemplate1-grid-item-content'>
                                            <div className='servicestemplate1-grid-item-content-text1'>
                                                <label>
                                                    {service.gridTitle}
                                                </label>
                                            </div>
                                            <div className='servicestemplate1-grid-item-content-text2'>
                                                <label>
                                                    {service.gridContent}
                                                </label>
                                            </div>
                                        </div>

                                    </div></Link>

                                })


                                // <Link to="{option == 'Cleaning & Pest Control' ? "/People Services/Cleaning & Pest Control" : "/"} ></Link>


                            }


                            {/*  */}






                        </div>
                    </div>
                </div>
            </div>
            <div className='servicestemplate1-row'>

                <Stack direction="row" spacing={10} width="70%" display="flex" paddinglef="50%">
                    <img className="servicestemplate-row-img" src={img2} />
                    <Stack direction="column" spacing={5}>
                        <Text fontSize="80%">Fawr Insurance  Protection</Text>
                        <Text fontSize="50%">Upto Rs. 8,000 insurance coverwith every service requested. <label className="servicestemplate-text-color1">Learn More</label></Text>
                    </Stack>
                </Stack>

            </div>

            <div className='servicestemplate1-row1'>

                <Stack direction="row" spacing={10} width="70%" display="flex" paddinglef="50%">
                    <img className="servicestemplate-row-img" src={img3} />
                    <Stack direction="column" spacing={5}>
                        <Text fontSize="80%">Anti Disclaimer Policy</Text>
                        <Text fontSize="50%">Fawr treat it’s community equally with respect and without judgement or Bias.</Text>
                        <Link to="/People Services/Anti Disclaimer Policy"><Button color="white" backgroundColor="#2B7FFF" width="20%">Know More</Button></Link>
                    </Stack>
                </Stack>

            </div>

            <div className='servicestemplate1-row2'>

                <Stack direction="row" spacing={10} width="70%" display="flex" paddinglef="50%">
                    <img className="servicestemplate-row-img" src={img4} />
                    <Stack direction="column" spacing={5}>
                        <Text fontSize="80%">Proud partner with Govt. of India.</Text>
                        <Text fontSize="50%">Find Professional Certified by Govt. of India Under Skill India Mission</Text>
                    </Stack>
                </Stack>

            </div>
            <Reachus />

        </div>
    )
}
