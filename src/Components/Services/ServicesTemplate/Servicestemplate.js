import React from 'react'
import "./Servicestemplate.css"
import Reachus from '../ReachUs/Reachus';

export default function Servicestemplate(props) {
    const services = props.gridData;
    return (
        <div className='servicestemplate-outer'>
            <div className='servicestemplate-heading'>
                <div className='servicestemplate-heading-left'>
                    <div className='servicestemplate-heading-left-content'>
                        <div><label className='servicestemplate-title-underline'>{props.underlinedTitle}</label> </div>
                        <div><label>{props.title}</label></div>
                    </div>
                </div>
                <div className='servicestemplate-heading-right'>
                    <img src={props.img1} />
                </div>
            </div>

            <div className='servicestemplate-body-outer'>
                <div className='servicestemplate-body'>
                    <div className='servicestemplate-body-data'>
                        <label className='servicestemplate-body-data-text'>
                            {props.content}
                        </label>
                    </div>

                    <div className='servicestemplate-body-title'>
                        <label className='servicestemplate-body-title-text'>
                            Services
                        </label>
                    </div>

                    <div className='servicestemplate-grid-outer'>
                        <div className='servicestemplate-grid'>


                            {
                                services.map((service, index) => {
                                    return <div className='servicestemplate-grid-item'>
                                        <div className='servicestemplate-grid-img'><img src={service.gridImg} /></div>
                                        <div className='servicestemplate-grid-item-content'>
                                            <div className='servicestemplate-grid-item-content-text1'>
                                                <label>
                                                    {service.gridTitle}
                                                </label>
                                            </div>
                                            <div className='servicestemplate-grid-item-content-text2'>
                                                <label>
                                                    {service.gridContent}
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                })


                            }




                        </div>
                    </div>
                </div>
            </div>
            <Reachus />

        </div>
    )
}
