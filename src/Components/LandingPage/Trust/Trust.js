import React from 'react';
import "./Trust.css";
import Trust_img1 from "./TrustImages/Trust_img1.png";
import Trust_img2 from "./TrustImages/Trust_img2.png";
import Trust_img3 from "./TrustImages/Trust_img3.png";
import Trust_img4 from "./TrustImages/Trust_img4.png";
import Trust_img5 from "./TrustImages/Trust_img5.png";
import Trust_img6 from "./TrustImages/Trust_img6.png";
import Trust_img7 from "./TrustImages/Trust_img7.png";
import Trust_img8 from "./TrustImages/Trust_img8.png";

export default function Trust() {
    return (
        <div className='trust-outer'>
            <img className='trust-bgimg' src={Trust_img1} />
            <div className='trust-x'>

                <div className='trust-top-outer'>
                    <div className='trust-top'>
                        They Trust Us.  <label className='trust-top-content'>Now You Can Too</label>
                        <img className="trust-img-arrow" src={Trust_img2} />
                    </div>
                </div>

                <div className='trust-bottom-outer'>
                    <div className='trust-bottom'>
                        <img className="trust-imgs" src={Trust_img3} />
                        <img className="trust-imgs" src={Trust_img4} />
                        <img className="trust-imgs" src={Trust_img5} />
                        <img className="trust-imgs" src={Trust_img6} />
                        <img className="trust-imgs" src={Trust_img7} />
                        <img className="trust-imgs" src={Trust_img8} />
                    </div>
                </div>
            </div>
        </div>
    )
}
