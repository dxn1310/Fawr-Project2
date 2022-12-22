import React from 'react';
import "./Footer.css";

export default function Footer() {
    return (
        <div className='footer-outer'>
            {/* <div className='footer-grid-item'> */}
            <div className='footer-fawr'>
                <div className='footer-fawr-content'>FAWR</div>
            </div>
            <div className='footer-grid-item'>
                <div><label>Solutions</label></div>
                <ul className='footer-ul'>
                    <li className='footer-li'>Global Technology solution</li>
                    <li className='footer-li'>Compliances solution</li>
                    <li className='footer-li'>Non technical service</li>
                    <li className='footer-li'>Facility management</li>
                    <li className='footer-li'>Asset management</li>
                    <li className='footer-li'>Tax Solution</li>
                    <li className='footer-li'>Private security guaranting</li>
                    <li className='footer-li'>Corporate fraud and forensic investigation</li>
                    <li className='footer-li'>Background check service</li>
                    <li className='footer-li'>People service</li>
                </ul>


            </div>
            <div className='footer-grid-item'>
                <div><label>About</label></div>
                <ul className='footer-ul'>
                    <li className='footer-li'>About Us</li>
                    <li className='footer-li'>Our Service</li>
                    <li className='footer-li'>Sustainability</li>
                    <li className='footer-li'>Contact Us</li>
                </ul>

            </div>
            <div className='footer-grid-item'>

                <div><label>Policies</label></div>
                <ul className='footer-ul'>
                    <li className='footer-li'>Privacy Policy</li>
                    <li className='footer-li'>Cookie Policy</li>
                </ul>
            </div>
        </div>
    )
}
