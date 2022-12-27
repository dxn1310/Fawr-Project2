import React from 'react'
import "./Digital.css";
import Servicestemplate from '../ServicesTemplate/Servicestemplate.js';

import Digital_img1 from "./DgitalImages/Digital_img1.png";
import Digital_img2 from "./DgitalImages/Digital_img2.png";
import Digital_img3 from "./DgitalImages/Digital_img3.png";
import Digital_img4 from "./DgitalImages/Digital_img4.png";
import Digital_img5 from "./DgitalImages/Digital_img5.png";
import Digital_img6 from "./DgitalImages/Digital_img6.png";



export default function Digital() {
    const gridData = [
        {
            gridImg: Digital_img2,
            gridTitle: "Cyber Security",
            gridContent: "Cyber Security Solutions as a unit of GreenFellow IT Security Solutions Pvt Ltd aims to provide cyber security solutions to private and government organizations across the globe. With around 200+ clients across the globe ICSS aims at providing Vulnerability Assessment & Penetration Testing services making cyber security convenient for every organization. "
        },

        {
            gridImg: Digital_img3,
            gridTitle: "Cloud Storage Solutions",
            gridContent: "File syncing and storage services provide seamless access to all your data—Word docs, PDFs, spreadsheets, photos, and any other digital assets—wherever you are. You no longer need to be sitting at your work PC to see your work files. With cloud syncing you can get to them from your laptop at home, your smartphone on the go, or from your tablet on your couch. Syncing and storage services also add safety and security to your online life because when you sync your files via the cloud, you by default create a backup of them as well."
        },

        {
            gridImg: Digital_img4,
            gridTitle: "Content Management",
            gridContent: "Any basic solution for web content management helps you upload or write content, format it, add headlines and images, and do a number of backstage things like SEO. But in a multi-device, user-centric world, that’s not enough. Digital marketing has evolved, focusing more deeply on customer experience while incorporating mobile apps, the Internet of Things, and more. "
        },
        {
            gridImg: Digital_img5,
            gridTitle: "Artifical Intelligence",
            gridContent: "Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision."
        },
        {
            gridImg: Digital_img6,
            gridTitle: "Telecom Network Service",
            gridContent: "We as a service provider involved in network planning, network optimization, installation and commissioning, managed services, operations, maintenance, and in-building solutions. We offer these solutions to OEM players such as Nokia, Samsung, Ericsson, "
        },

    ]

    return (
        <div>
            <Servicestemplate underlinedTitle={"Digital Technology"}
                title={"Transformation"}
                img1={Digital_img1}
                content={"We realize that technology is the bedrock of innovation and what drives tomorrow. So, we harness the power of technology to drive productivity and optimal efficiency into your business processes.            Through our range of technology solutions that include BPO services, CLM, After Sales services, and Digital Transformation services, we strive to deliver excellence across various facets of the enterprise."}
                gridData={gridData}
            />
        </div>
    )
}
