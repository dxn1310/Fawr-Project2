import { Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import "./Browse.css"
import { NavLink as Link } from "react-router-dom"

import Browse_img1 from "./BrowseImages/Browse_img1.png"

export default function Browse() {
    const catgegoryData = [
        {
            service: "Digital Technology Transformation",
            types: ["Cyber Security", "Cloud Storage Solutions", "Content Management", "Artifical Intelligence"],
            link: "/Digital Technology Transformation"
        },
        {
            service: "Compliances",
            types: ["Legal Centre of excellence", "Evidence tracking & real-time updation", "Predictive control & risk score", "Cost saving & high quality"],
            link: "/Compiances Solution"
        },
        {
            service: "Asset Management",
            types: ["Real- Time Incident Tracking", "Peformance Audits", "Regular AMC", "Breakdown request & maintenance"],
            link: "/Asset Management"
        },
        // {
        //     service: "Corporate Fraud & Forensic Investigation",
        //     types: ["Forensic Diagnostic", "Market Intelligence", "Fraud Risk Management", "Whistleblower Hotline"]
        // },
        {
            service: "Facility Management",
            types: ["Integrated facility Management", "Product installation & servicing solution"],
            link: "/Facility Management"
        },
        {
            service: "People Services",
            types: ["Home salon", "Interior Designing", "Electronic appliance Repair", "Cleaning & Pest Control", "Painting", "Electronics & Carpenter Service"],
            link: "/People Services"
        },
        // {
        //     service: "Anti- Counterfeiting",
        //     types: ["Litigation Support", "Tactical Publicity campaigns", "Jurisdictional Raid Action", "Post Raid Activity"]
        // },
        {
            service: "Non - Technical Service",
            types: ["Health Care", "Food Service", "Aviation", "Payroll"],
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
            <div className='browse-top-outer'>
                <div className='browse-top'>
                    A Leading  <label className='browse-top-content'>Service Provider</label>
                    <img className="browse-img-arrow" src={Browse_img1} />
                </div>
            </div>
            <div className='browse-inner'>
                <div className='browse-title'>
                    Browse By Category
                </div>
                <div className='browse-options'>
                    {
                        catgegoryData.map((item, index) => {
                            return <div className="browse-option" style={{ borderBottom: selected === index ? "2px solid rgb(255, 91, 91)" : "none" ,color:selected === index ? "rgb(255, 91, 91)" : "black"}} onClick={(e) => setSelected(index)}>
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
                                {type}
                            </div></Link>
                        })
                    }
                </div>
            </div>
        </div >
    )
}
