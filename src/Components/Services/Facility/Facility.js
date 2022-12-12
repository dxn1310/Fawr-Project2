import React from 'react'
import Servicestemplate from '../ServicesTemplate/Servicestemplate.js';

import Facility_img1 from "./FacilityImages/Facility_img1.png";
import Facility_img2 from "./FacilityImages/Facility_img2.png";
import Facility_img3 from "./FacilityImages/Facility_img3.png";
// import Facility_img4 from "./FacilityImages/Facility_img4.png";
// import Facility_img5 from "./FacilityImages/Facility_img5.png";
// import Facility_img6 from "./FacilityImages/Facility_img6.png";


export default function Facility() {

    // gridTitle = ["Cyber Security", "Cloud Storage Solutions", "Content Management", "Artifical Intelligence", "Telecom Network Service"]
    // gridContent = ["Cyber Security Solutions as a unit of GreenFellow IT Security Solutions Pvt Ltd aims to provide cyber security solutions to private and government organizations across the globe. With around 200+ clients across the globe ICSS aims at providing Vulnerability Assessment & Penetration Testing services making cyber security convenient for every organization.",
    //     "File syncing and storage services provide seamless access to all your data—Word docs, PDFs, spreadsheets, photos, and any other Facility assets—wherever you are. You no longer need to be sitting at your work PC to see your work files. With cloud syncing you can get to them from your laptop at home, your smartphone on the go, or from your tablet on your couch. Syncing and storage services also add safety and security to your online life because when you sync your files via the cloud, you by default create a backup of them as well.",
    //     "Any basic solution for web content management helps you upload or write content, format it, add headlines and images, and do a number of backstage things like SEO. But in a multi-device, user-centric world, that’s not enough. Facility marketing has evolved, focusing more deeply on customer experience while incorporating mobile apps, the Internet of Things, and more. ",
    //     "Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision.",
    //     "We as a service provider involved in network planning, network optimization, installation and commissioning, managed services, operations, maintenance, and in-building solutions. We offer these solutions to OEM players such as Nokia, Samsung, Ericsson, ",
    // ]
    // gridImgs = [Facility_img2, Facility_img3, Facility_img4, Facility_img5, Facility_img6]

    const gridData = [
        {
            gridImg: Facility_img2,
            gridTitle: "Integrated facility Management",
            gridContent: "We aim to deliver smart, integrated facilities management services that can help your organization grow profitability, boost efficiency, and gain a competitive edge, while enabling you to focus on your core business.We are committed to providing our customers exceptional services while offering our employees state-of-the-art training and enabling them to deliver quality output.We provide Housekeeping solutions,Operation,Maintenance and Support services."
        },

        {
            gridImg: Facility_img3,
            gridTitle: "Product installation & servicing solution",
            gridContent: "We aspire to be leading after-sales services provider for handheld products like Mobile handsets, Tablets, Cameras and consumer electronics & consumer durables products including Air conditioners, Washing machines, Refrigerators, LED/LCD TVs etc.We are a partner of choice to some of the leading OEMs in the country and have created an ecosystem of high service delivery"
        },

        // {
        //     gridImg: Facility_img4,
        //     gridTitle: "Predictive control & risk score",
        //     gridContent: "Predictive analytics is the practice of extracting information from existing data in order to determine patterns and predict future outcomes and trends. It forecasts what might happen in the future with an acceptable level of reliability, and includes what-if scenarios and risk assessment."
        // },
        // {
        //     gridImg: Facility_img5,
        //     gridTitle: "Cost saving & high quality",
        //     gridContent: "Cost savings is the benefit realized from actions that reduce an organization's overall spending on assets that directly impact its bottom line. Actions that can result in cost savings range from improving efficiency to negotiating lower prices for supply purchases"
        // },
        // {
        //     gridImg: Facility_img6,
        //     gridTitle: "Collaborative & internal checklists",
        //     gridContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        // },

    ]

    return (
        <div>
            <Servicestemplate underlinedTitle={"Facility Management"}
                // title={"Transformation"}
                img1={Facility_img1}
                content={"We realize that technology is the bedrock of innovation and what drives tomorrow. So, we harness the power of technology to drive productivity and optimal efficiency into your business processes.Through our range of technology solutions that include BPO services, CLM, After Sales services, and Digital Transformation services, we strive to deliver excellence across various facets of the enterprise."}
                gridData={gridData}
            // gridImgs={gridImgs}
            // gridTitle={gridTitle}
            // gridContent={gridContent}
            />
        </div>
    )
}
