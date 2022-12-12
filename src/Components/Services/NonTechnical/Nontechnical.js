import React from 'react'
import Servicestemplate from '../ServicesTemplate/Servicestemplate.js';

import Nontechnical_img1 from "./NonTechnicalImages/Nontechnical_img1.png";
import Nontechnical_img2 from "./NonTechnicalImages/Nontechnical_img2.png";
import Nontechnical_img3 from "./NonTechnicalImages/Nontechnical_img3.png";
import Nontechnical_img4 from "./NonTechnicalImages/Nontechnical_img4.png";
import Nontechnical_img5 from "./NonTechnicalImages/Nontechnical_img5.png";
import Nontechnical_img6 from "./NonTechnicalImages/Nontechnical_img6.png";



export default function Nontechnical() {

    // gridTitle = ["Cyber Security", "Cloud Storage Solutions", "Content Management", "Artifical Intelligence", "Telecom Network Service"]
    // gridContent = ["Cyber Security Solutions as a unit of GreenFellow IT Security Solutions Pvt Ltd aims to provide cyber security solutions to private and government organizations across the globe. With around 200+ clients across the globe ICSS aims at providing Vulnerability Assessment & Penetration Testing services making cyber security convenient for every organization.",
    //     "File syncing and storage services provide seamless access to all your data—Word docs, PDFs, spreadsheets, photos, and any other Nontechnical assets—wherever you are. You no longer need to be sitting at your work PC to see your work files. With cloud syncing you can get to them from your laptop at home, your smartphone on the go, or from your tablet on your couch. Syncing and storage services also add safety and security to your online life because when you sync your files via the cloud, you by default create a backup of them as well.",
    //     "Any basic solution for web content management helps you upload or write content, format it, add headlines and images, and do a number of backstage things like SEO. But in a multi-device, user-centric world, that’s not enough. Nontechnical marketing has evolved, focusing more deeply on customer experience while incorporating mobile apps, the Internet of Things, and more. ",
    //     "Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision.",
    //     "We as a service provider involved in network planning, network optimization, installation and commissioning, managed services, operations, maintenance, and in-building solutions. We offer these solutions to OEM players such as Nokia, Samsung, Ericsson, ",
    // ]
    // gridImgs = [Nontechnical_img2, Nontechnical_img3, Nontechnical_img4, Nontechnical_img5, Nontechnical_img6]

    const gridData = [
        {
            gridImg: Nontechnical_img2,
            gridTitle: "Health Care ",
            gridContent: "We tangibly influence and enhance the talent-hiring of the healthcare industry by providing premium staffing services to organizations seeking quality talents. In collaboration with the Association of Healthcare Providers India (AHPI), we formalize training and staffing services for healthcare professionals and create a marketplace for both public and private institutions to source competitive talents meeting their organizational goals quickly and on-demand. "
        },

        {
            gridImg: Nontechnical_img3,
            gridTitle: "Food Service",
            gridContent: " We stand tall as one of the leading companies in India’s catering space. We offer best-in-class yet cost-effective services to a diverse gamut of clients spanning corporates, hospitals, educational institutions, conventions, and other events. The spread that we provide scores high on hygiene, nutrition, freshness, and variety while offering value for money."
        },

        {
            gridImg: Nontechnical_img4,
            gridTitle: "Aviation",
            gridContent: "We provide terminal management services such as trolly allocation, security , maintenance and retrieval. Providing pre-paid taxi services is also crucial and a good investment. We also are responsible for cleaning services , both the transit and the airplane itself.We also are present at the ground enabling efficient transits and check-in helping at each step ranging from security to GSD services"
        },
        {
            gridImg: Nontechnical_img5,
            gridTitle: "Payroll",
            gridContent: " Using HR outsourcing and providing end to end HR solutions. Using technology for timely delivery of accurate and powerful payroll as well as tackling the complex law associated with payrolls.We also have services such as Customer Management Experience, Credit Risk Management, Title and Mortgage Services and F&A outsourcing for digital business development"
        },
        {
            gridImg: Nontechnical_img6,
            gridTitle: "Security Service",
            gridContent: "We provide private security Guards ranging from static guards and bodyguards to beat patrols and quick response team and security services for event management.We also provide background checks for various certificates verification, drug tests and criminal record verification.We also provide various ERP services such as litigation support , market survey and intelligence gatherin"
        },

    ]

    return (
        <div>
            <Servicestemplate underlinedTitle={"Non- Technical Service"}
                // title={"Transformation"}
                img1={Nontechnical_img1}
                content={"We realize that technology is the bedrock of innovation and what drives tomorrow. So, we harness the power of technology to drive productivity and optimal efficiency into your business processes.Through our range of technology solutions that include BPO services, CLM, After Sales services, and Digital Transformation services, we strive to deliver excellence across various facets of the enterprise."}
                gridData={gridData}
            // gridImgs={gridImgs}
            // gridTitle={gridTitle}
            // gridContent={gridContent}
            />
        </div>
    )
}
