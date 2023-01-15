import { Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import "./Browse.css"
import { NavLink as Link } from "react-router-dom"

import Browse_img1 from "./BrowseImages/Browse_img1.png"
import About_img2 from "./BrowseImages/About_img2.png"

import Cyber_img from "./BrowseImages/Cyber_img.png"
import Cloud_img from "./BrowseImages/Cloud_img.png"
import Content_img from "./BrowseImages/Content_img.png"
import Ai_img from "./BrowseImages/Ai_img.png"

import Legal_img from "./BrowseImages/Legal_img.png"
import Evidence_img from "./BrowseImages/Evidence_img.png"
import Predictive_img from "./BrowseImages/Predictive_img.png"
import Cost_img from "./BrowseImages/Payrol_img.png"

import Real_img from "./BrowseImages/Real_img.png"
import Performance_img from "./BrowseImages/Performance_img.png"
import Regular_img from "./BrowseImages/Regular_img.png"
import Breakdown_img from "./BrowseImages/Breakdown_img.png"

import Integrated_img from "./BrowseImages/Integrated_img.png"
import Product_img from "./BrowseImages/Product_img.png"

import Health_img from "./BrowseImages/Health_img.png"
import Food_img from "./BrowseImages/Food_img.png"
import Aviation_img from "./BrowseImages/Predictive_img.png"
import Payroll_img from "./BrowseImages/Payrol_img.png"

import Homesalon_img from "./BrowseImages/Homesalon_img.png"
import Interiordesign_img from "./BrowseImages/Interiordesign_img.png"
import Painting_img from "./BrowseImages/Painting_img.png"
import Electronic_img from "./BrowseImages/Electronic_img.png"
import Carpenter_img from "./BrowseImages/Carpenter_img.png"

export default function Browse() {
    const catgegoryData = [
        {
            service: "Digital Technology Transformation",
            types: ["Cyber Security", "Cloud Storage Solutions", "Content Management", "Artifical Intelligence"],
            icons: [Cyber_img, Cloud_img, Content_img, Ai_img],
            link: "/Digital Technology Transformation"
        },
        {
            service: "Compliances",
            types: ["Legal Centre of excellence", "Evidence tracking & real-time updation", "Predictive control & risk score", "Cost saving & high quality"],
            icons: [Legal_img, Evidence_img, Predictive_img, Cost_img],
            link: "/Compiances Solution"
        },
        {
            service: "Asset Management",
            types: ["Real- Time Incident Tracking", "Peformance Audits", "Regular AMC", "Breakdown request & maintenance"],
            icons: [Real_img, Performance_img, Regular_img, Breakdown_img],
            link: "/Asset Management"
        },
        // // {
        // //     service: "Corporate Fraud & Forensic Investigation",
        // //     types: ["Forensic Diagnostic", "Market Intelligence", "Fraud Risk Management", "Whistleblower Hotline"]
        // // },
        {
            service: "Facility Management",
            types: ["Integrated facility Management", "Product installation & servicing solution"],
            icons: [Integrated_img, Product_img],
            link: "/Facility Management"
        },
        {
            service: "People Services",
            types: ["Home salon", "Interior Designing", "Electronic appliance Repair", "Painting", "Electronics & Carpenter Service"],
            icons: [Homesalon_img, Interiordesign_img, Electronic_img, Painting_img, Carpenter_img],
            link: "/People Services"
        },






        // {
        //     service: "Anti- Counterfeiting",
        //     types: ["Litigation Support", "Tactical Publicity campaigns", "Jurisdictional Raid Action", "Post Raid Activity"]
        // },'



        {
            service: "Non - Technical Service",
            types: ["Health Care", "Food Service", "Aviation", "Payroll"],
            icons: [Health_img, Food_img, Aviation_img, Payroll_img],
            link: "/Non - Technical Service"
        },



        // {
        //     service: "Background Check Service",
        //     types: ["Data-Base Verification", "Criminal Record Verification", "Education Certificate Verificaton", "Drug Test"]
        // },
        // {
        //     service: "Private Security Guarding",
        //     types: ["Security Risk Analysis", "Beat Patrols / Quicks Reaction Team", "Security for event management", "Regular Security Advisories"]
        // },


    ]

    const [selected, setSelected] = useState(0);
    return (
        <div className='browse-outer'>
            {/* <div className='browse-top-outer'> */}
            <div className='browse-top'>
                A Leading  <label className='browse-top-content'>Service Provider</label>
                <img className="browse-img-arrow" src={About_img2} />
            </div>
            {/* </div> */}
            <div className='browse-inner'>
                <div className='browse-title'>
                    Browse By Category
                </div>
                <div className='browse-content-outer'>
                    <div className='browse-options'>
                        {
                            catgegoryData.map((item, index) => {
                                return <div className="browse-option" style={{ borderBottom: selected === index ? "2px solid rgb(255, 91, 91)" : "none", color: selected === index ? "rgb(255, 91, 91)" : "black" }} onClick={(e) => setSelected(index)}>
                                    {item.service}
                                    {console.log(selected)}
                                </div>
                            })
                        }
                        <Link to="/Ourservice">
                            <div className="browse-option">
                                All Services
                            </div>
                        </Link>
                    </div>
                    <div className='browse-types'>
                        {
                            catgegoryData[selected].types.map((type, index) => {
                                return <Link to={catgegoryData[selected].link}><div className='browse-type'>
                                    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}><img className="browse-icon-img" src={catgegoryData[selected].icons[index]} /></div>
                                    <div className='browse-type-text'>{type}</div>
                                </div></Link>
                            })
                        }
                    </div>

                </div>
            </div>
        </div >
    )
}
