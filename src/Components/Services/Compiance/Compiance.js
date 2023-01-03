import React from 'react'
import Servicestemplate from '../ServicesTemplate/Servicestemplate.js';

import Compiance_img1 from "./CompianceImages/Compiance_img1.png";
import Compiance_img2 from "./CompianceImages/Compiance_img2.png";
import Compiance_img3 from "./CompianceImages/Compiance_img3.png";
import Compiance_img4 from "./CompianceImages/Compiance_img4.png";
import Compiance_img5 from "./CompianceImages/Compiance_img5.png";
import Compiance_img6 from "./CompianceImages/Compiance_img6.png";



export default function Compiance() {

    // gridTitle = ["Cyber Security", "Cloud Storage Solutions", "Content Management", "Artifical Intelligence", "Telecom Network Service"]
    // gridContent = ["Cyber Security Solutions as a unit of GreenFellow IT Security Solutions Pvt Ltd aims to provide cyber security solutions to private and government organizations across the globe. With around 200+ clients across the globe ICSS aims at providing Vulnerability Assessment & Penetration Testing services making cyber security convenient for every organization.",
    //     "File syncing and storage services provide seamless access to all your data—Word docs, PDFs, spreadsheets, photos, and any other Compiance assets—wherever you are. You no longer need to be sitting at your work PC to see your work files. With cloud syncing you can get to them from your laptop at home, your smartphone on the go, or from your tablet on your couch. Syncing and storage services also add safety and security to your online life because when you sync your files via the cloud, you by default create a backup of them as well.",
    //     "Any basic solution for web content management helps you upload or write content, format it, add headlines and images, and do a number of backstage things like SEO. But in a multi-device, user-centric world, that’s not enough. Compiance marketing has evolved, focusing more deeply on customer experience while incorporating mobile apps, the Internet of Things, and more. ",
    //     "Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision.",
    //     "We as a service provider involved in network planning, network optimization, installation and commissioning, managed services, operations, maintenance, and in-building solutions. We offer these solutions to OEM players such as Nokia, Samsung, Ericsson, ",
    // ]
    // gridImgs = [Compiance_img2, Compiance_img3, Compiance_img4, Compiance_img5, Compiance_img6]

    const gridData = [
        {
            gridImg: Compiance_img2,
            gridTitle: "Legal Centre of excellence",
            gridContent: "The idea behind Legal CoE is to combine expertise of regular legal practice of PwC Legal with an access to cost-efficient team of legal and para-legal professionals. Legal CoE team is supervised and supported by experienced lawyers of PwC Legal ensuring top-quality of the services. The application of dedicated methodology and IT digital solutions provides for significant cost and time-saving effects under the framework of PwC network"
        },

        {
            gridImg: Compiance_img3,
            gridTitle: "Evidence tracking & real-time updation.",
            gridContent: "evidence management solution, EvidenceOnQ, empowers agencies to efficiently manage property and evidence throughout its entire lifecycle. Agencies see an immediate return on investment when they implement EvidenceOnQ. It reduces handwritten documentation, eliminates repetitive work effort, minimizes paper, and automates the chain of custody."
        },

        {
            gridImg: Compiance_img4,
            gridTitle: "Predictive control & risk score",
            gridContent: "Predictive analytics is the practice of extracting information from existing data in order to determine patterns and predict future outcomes and trends. It forecasts what might happen in the future with an acceptable level of reliability, and includes what-if scenarios and risk assessment."
        },
        {
            gridImg: Compiance_img5,
            gridTitle: "Cost saving & high quality",
            gridContent: "Cost savings is the benefit realized from actions that reduce an organization's overall spending on assets that directly impact its bottom line. Actions that can result in cost savings range from improving efficiency to negotiating lower prices for supply purchases"
        },
        {
            gridImg: Compiance_img6,
            gridTitle: "Collaborative & internal checklists",
            gridContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },

    ]

    return (
        <div>
            <Servicestemplate underlinedTitle={"Compliances Solution"}
                // title={"Transformation"}
                img1={Compiance_img1}
                content={"We realize that technology is the bedrock of innovation and what drives tomorrow. So, we harness the power of technology to drive productivity and optimal efficiency into your business processes.Through our range of technology solutions that include BPO services, CLM, After Sales services, and Digital Transformation services, we strive to deliver excellence across various facets of the enterprise."}
                gridData={gridData}
            // gridImgs={gridImgs}
            // gridTitle={gridTitle}
            // gridContent={gridContent}
            />
        </div>
    )
}
