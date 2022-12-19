import React from 'react';
import "./Adisclamer.css"
import Adisclamer_img1 from "./AdisclamerImages/Adisclamer_img1.png"

export default function Adisclamer() {
    return (
        <div className='adisclamer-outer'>
            <img className='adisclamer-bgimg' src={Adisclamer_img1} />
            <div className='adisclamer-inner'>
                <div className='adisclamer-inner-content'>
                    <div className='adisclamer-text'>
                        Anti-Discrimination Policy
                    </div>
                    <div className='adisclamer-text'>Fawr seeks to empower millions of service professionals across the world to deliver safe, reliable and high quality services at home. Fawr therefore does not tolerate, and prohibits discrimination against customers or service providers based on religion, caste, race, national origin, disability, sexual orientation, sex, marital status, gender identity, age or any other characteristic that may protected under applicable laws.
                    </div>
                    <div className='adisclamer-text'>Such discrimination includes, but is not limited to, refusing to provide or accept services based on any of these characteristics.
                    </div>
                    <div className='adisclamer-text'>Any customer or service partner found to have viola-ted this prohibition will lose access to the Fawr platform.
                    </div>
                </div>
            </div>
        </div>
    )
}
