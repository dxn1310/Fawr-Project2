import React from 'react'
import Servicestemplate from '../ServicesTemplate/Servicestemplate.js';

import Private_img1 from "./PrivateImages/Private_img1.png";
import Private_img2 from "./PrivateImages/Private_img2.png";
import Private_img3 from "./PrivateImages/Private_img3.png";
import Private_img4 from "./PrivateImages/Private_img4.png";
import Private_img5 from "./PrivateImages/Private_img5.png";
// import Private_img6 from "./PrivateImages/Private_img6.png";



export default function Private() {

    // gridTitle = ["Cyber Security", "Cloud Storage Solutions", "Content Management", "Artifical Intelligence", "Telecom Network Service"]
    // gridContent = ["Cyber Security Solutions as a unit of GreenFellow IT Security Solutions Pvt Ltd aims to provide cyber security solutions to private and government organizations across the globe. With around 200+ clients across the globe ICSS aims at providing Vulnerability Assessment & Penetration Testing services making cyber security convenient for every organization.",
    //     "File syncing and storage services provide seamless access to all your data—Word docs, PDFs, spreadsheets, photos, and any other Private assets—wherever you are. You no longer need to be sitting at your work PC to see your work files. With cloud syncing you can get to them from your laptop at home, your smartphone on the go, or from your tablet on your couch. Syncing and storage services also add safety and security to your online life because when you sync your files via the cloud, you by default create a backup of them as well.",
    //     "Any basic solution for web content management helps you upload or write content, format it, add headlines and images, and do a number of backstage things like SEO. But in a multi-device, user-centric world, that’s not enough. Private marketing has evolved, focusing more deeply on customer experience while incorporating mobile apps, the Internet of Things, and more. ",
    //     "Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision.",
    //     "We as a service provider involved in network planning, network optimization, installation and commissioning, managed services, operations, maintenance, and in-building solutions. We offer these solutions to OEM players such as Nokia, Samsung, Ericsson, ",
    // ]
    // gridImgs = [Private_img2, Private_img3, Private_img4, Private_img5, Private_img6]

    const gridData = [
        {
            gridImg: Private_img2,
            gridTitle: "Security Risk Analysis",
            gridContent: "As part of our security audit, we assist you in setting up a robust security system combining both human and electronic resources"
        },

        {
            gridImg: Private_img3,
            gridTitle: "Beat Patrols / Quicks Reaction Team",
            gridContent: "As highly trained professionals, our beat patrols are able to provide immediate assistance when an untoward incident occurs."
        },

        {
            gridImg: Private_img4,
            gridTitle: "Security for event management",
            gridContent: "Regardless of the size of your event, we provide a comprehensive security solution."
        },
        {
            gridImg: Private_img5,
            gridTitle: "Regular Security Advisories",
            gridContent: "By maintaining regular security advisories, we ensure you never feel compromised on security. If you have any questions, please feel free to contact our help line desks."
        },
        // {
        //     gridImg: Private_img6,
        //     gridTitle: "Collaborative & internal checklists",
        //     gridContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        // },

    ]

    return (
        <div>
            <Servicestemplate underlinedTitle={"Private Security Guarding"}
                // title={"Transformation"}
                img1={Private_img1}
                content={"Trained and dedicated manpower with 100% background screening / police verification to ensure quality delivery. We are PSARA-2005 compliant and follow its training mandate. We also train our guard force, additionally, in soft skills, as required for a particular segment or for client specific needs. Our Chairman is Dr.P.S.Pasricha, former D.G.P., Maharashtra, who is well known for his expertise and experience in this field. He is assisted by a team of former army and police officers."}
                gridData={gridData}
            // gridImgs={gridImgs}
            // gridTitle={gridTitle}
            // gridContent={gridContent}
            />
        </div>
    )
}
