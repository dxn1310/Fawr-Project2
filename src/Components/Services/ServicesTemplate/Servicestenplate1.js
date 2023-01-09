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

                                        <div className='servicestemplate1-grid-img'><img className='servicetemplate1-services-img' src={service.gridImg} /></div>
                                        <div className='servicestemplate1-grid-item-content'>
                                            <div className='servicestemplate1-grid-item-content-text1'>
                                                {service.gridTitle}
                                            </div>
                                            <div className='servicestemplate1-grid-item-content-text2'>
                                                <label>
                                                    {service.gridContent}
                                                </label>
                                            </div>
                                        </div>

                                    </div></Link>

                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='servicestemplate1-row'>
                <div style={{ width: "80%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "10%", display: "flex", justifyContent: "right" }}>
                        <img className="servicestemplate-row-img" src={img2} />
                    </div>
                    <div style={{ width: "85%", display: "flex", justifyContent: "left", paddingLeft: "5%" }}>
                        <Stack direction="column" spacing={5}>
                            <div className='servicetemplate1-extra-text1'>Fawr Insurance  Protection</div>
                            <div className='servicetemplate1-extra-text2'>Upto Rs. 8,000 insurance coverwith every service requested. <label className="servicestemplate-text-color1">Learn More</label></div>
                        </Stack>
                    </div>
                </div>
            </div>

            <div className='servicestemplate1-row1'>
                <div style={{ width: "80%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "10%", display: "flex", justifyContent: "right" }}>
                        <img className="servicestemplate-row-img" src={img3} />
                    </div>
                    <div style={{ width: "85%", display: "flex", justifyContent: "left", paddingLeft: "5%" }}>
                        <Stack direction="column" spacing={5}>
                            <div className='servicetemplate1-extra-text1'>Fawr Insurance  Protection</div>
                            <div className='servicetemplate1-extra-text2'>Upto Rs. 8,000 insurance coverwith every service requested. <label className="servicestemplate-text-color1">Learn More</label></div>
                        </Stack>
                    </div>
                </div>
            </div>

            <div className='servicestemplate1-row2'>
                <div style={{ width: "80%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "12%", display: "flex", justifyContent: "right" }}>
                        <img className="servicestemplate-row-img" src={img4} />
                    </div>
                    <div style={{ width: "85%", display: "flex", justifyContent: "left", paddingLeft: "5%" }}>
                        <Stack direction="column" spacing={5}>
                            <div className='servicetemplate1-extra-text1'>Fawr Insurance  Protection</div>
                            <div className='servicetemplate1-extra-text2'>Upto Rs. 8,000 insurance coverwith every service requested. <label className="servicestemplate-text-color1">Learn More</label></div>
                        </Stack>
                    </div>
                </div>
            </div>

            <Reachus />

        </div>
    )
}
