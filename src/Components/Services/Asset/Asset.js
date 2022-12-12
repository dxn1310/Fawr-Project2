import React from 'react'
import Servicestemplate from '../ServicesTemplate/Servicestemplate.js';

import Asset_img1 from "./AssetImages/Asset_img1.png";
import Asset_img2 from "./AssetImages/Asset_img2.png";
import Asset_img3 from "./AssetImages/Asset_img3.png";
import Asset_img4 from "./AssetImages/Asset_img4.png";
import Asset_img5 from "./AssetImages/Asset_img5.png";
import Asset_img6 from "./AssetImages/Asset_img6.png";



export default function Asset() {

    // gridTitle = ["Cyber Security", "Cloud Storage Solutions", "Content Management", "Artifical Intelligence", "Telecom Network Service"]
    // gridContent = ["Cyber Security Solutions as a unit of GreenFellow IT Security Solutions Pvt Ltd aims to provide cyber security solutions to private and government organizations across the globe. With around 200+ clients across the globe ICSS aims at providing Vulnerability Assessment & Penetration Testing services making cyber security convenient for every organization.",
    //     "File syncing and storage services provide seamless access to all your data—Word docs, PDFs, spreadsheets, photos, and any other Asset assets—wherever you are. You no longer need to be sitting at your work PC to see your work files. With cloud syncing you can get to them from your laptop at home, your smartphone on the go, or from your tablet on your couch. Syncing and storage services also add safety and security to your online life because when you sync your files via the cloud, you by default create a backup of them as well.",
    //     "Any basic solution for web content management helps you upload or write content, format it, add headlines and images, and do a number of backstage things like SEO. But in a multi-device, user-centric world, that’s not enough. Asset marketing has evolved, focusing more deeply on customer experience while incorporating mobile apps, the Internet of Things, and more. ",
    //     "Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision.",
    //     "We as a service provider involved in network planning, network optimization, installation and commissioning, managed services, operations, maintenance, and in-building solutions. We offer these solutions to OEM players such as Nokia, Samsung, Ericsson, ",
    // ]
    // gridImgs = [Asset_img2, Asset_img3, Asset_img4, Asset_img5, Asset_img6]

    const gridData = [
        {
            gridImg: Asset_img2,
            gridTitle: "Real- Time Incident Tracking",
            gridContent: "Real-time incident management helps reduce the lag when responding to a performance issue and improves the resolution time of a service not working. The customer and the supplier of the service benefit significantly from the overall experience when the distance from a performance perspective to the affected service and the capabilities used to restore the service to normal is shorter and leaner."
        },

        {
            gridImg: Asset_img3,
            gridTitle: "Peformance Audits",
            gridContent: "A performance audit is an assessment of operations or functions, efficiency, effectiveness, and compliance to legal and other requirements of an entity to determine whether functions are working as intended along to implement improvements so that desired goals can be achieved"
        },

        {
            gridImg: Asset_img4,
            gridTitle: "Regular AMC",
            gridContent: "(AMC) is a firm that invests pooled funds from clients, putting the capital to work through different investments including stocks, bonds, real estate, master limited partnerships, and more."
        },
        {
            gridImg: Asset_img5,
            gridTitle: "Breakdown  request  & maintenance",
            gridContent: "Breakdown maintenance is maintenance performed on a piece of equipment that has broken down, faulted, or otherwise cannot be operated."
        },
        {
            gridImg: Asset_img6,
            gridTitle: "Maintenace checklist & MIS",
            gridContent: "Maintenance checklists and logbooks are tools used by technicians to document equipment maintenance inspections. Equipment maintenance involves the continuous process of checking, repairing, and servicing operating equipment to ensure businesses can operate without interruption."
        },

    ]

    return (
        <div>
            <Servicestemplate underlinedTitle={"Asset Management"}
                // title={"Transformation"}
                img1={Asset_img1}
                content={"Asset management is a systematic approach to managing and realizing value from what a group or entity is responsible for throughout its lifecycle. Applicable to both tangible assets (physical objects such as buildings and equipment) and intangible assets (human capital, intellectual property, goodwill, financial assets, etc.). Asset management is the systematic process of developing, operating, maintaining, upgrading and disposing of assets in the most cost-effective manner (including all cost, risk and performance attributes)."}
                gridData={gridData}
            // gridImgs={gridImgs}
            // gridTitle={gridTitle}
            // gridContent={gridContent}
            />
        </div>
    )
}
