import React from 'react';
import "./Leading.css";
import Leading_img1 from "./LeadingImages/Leading_img1.png";
import Leading_img2 from "./LeadingImages/Leading_img2.png";
import Leading_img3 from "./LeadingImages/Leading_img3.png";
import Leading_img4 from "./LeadingImages/Leading_img4.png";
import Leading_img5 from "./LeadingImages/Leading_img5.png";

export default function Leading() {
    return (
        <div className='Leading-outer'>
            <img classname="Leading-bgimg" src={Leading_img1} />
            <div className='Leading-x'>

                <div className='Leading-top-outer'>
                    <div className='Leading-top'>
                        A Leading <label className='Leading-top-content'>Service Provide</label>
                        <img className="Leading-img-arrow" src={Leading_img2} />
                    </div>
                </div>

                <div className='Leading-bottom-outer'>
                    <div className='Leading-bottom'>
                        {/* <div>njd</div>

                        <div>njd</div>

                        <div>njd</div> */}

                        <div className='Leading-bottom-grid-item-outer'>

                            <div className='Leading-bottom-grid-item'>
                                <div className="Leading-img-outer"><img className="Leading-img" src={Leading_img3} /></div>

                                <div className='Leading-grid-content'>
                                    <div className='Leading-grid-text'>
                                        Facility Management
                                    </div>
                                </div>
                            </div>

                            <div className='Leading-bottom-grid-item'>
                                <div className="Leading-img-outer"><img className="Leading-img" src={Leading_img4} /></div>
                                <div className='Leading-grid-content'>
                                    <div className='Leading-grid-text'>
                                        Tax Solution
                                    </div>
                                </div>
                            </div>
                            <div className='Leading-bottom-grid-item'>
                                <div className="Leading-img-outer"><img className="Leading-img" src={Leading_img5} /></div>
                                <div className='Leading-grid-content'>
                                    <div className='Leading-grid-text'>
                                        People Service
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
