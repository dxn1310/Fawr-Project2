import React from 'react';
import "./Leading.css";

import Leading_img2 from "./LeadingImages/Leading_img2.png";
import Leading_img3 from "./LeadingImages/Leading_img3.png";
import Leading_img4 from "./LeadingImages/Leading_img4.png";
import Leading_img5 from "./LeadingImages/Leading_img5.png";

export default function Leading() {
    return (
        <div className='leading-outer'>
            {/* <img classname="leading-bgimg" src={Leading_img1} /> */}
            <div className='Leading-top-outer'>
                <div className='Leading-top'>
                    <label>A Leading <label className='Leading-top-content'>Service Provide</label></label>
                    <img src={Leading_img2} />
                </div>
            </div>

            <div className='Leading-bottom-outer'>
                <div className='Leading-bottom'>
                    <div className='leading-bottom-grid-item'>
                        <img className="leading-img" src={Leading_img3} />
                        <div className='leading-grid-content'>
                            <label className='leading-grid-text'>
                                Facility Management
                            </label>
                        </div>
                    </div>

                    <div className='leading-bottom-grid-item'>
                        <img className="leading-img" src={Leading_img4} />
                        <div className='leading-grid-content'>
                            <label className='leading-grid-text'>
                                Tax Solution
                            </label>
                        </div>
                    </div>
                    <div className='leading-bottom-grid-item'>
                        <img className="leading-img" src={Leading_img5} />
                        <div className='leading-grid-content'>
                            <label className='leading-grid-text'>
                                People Service
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
