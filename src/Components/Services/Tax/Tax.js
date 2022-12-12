import React from 'react'
import Servicestemplate from '../ServicesTemplate/Servicestemplate.js';

import Tax_img1 from "./TaxImages/Tax_img1.png";
import Tax_img2 from "./TaxImages/Tax_img2.png";
import Tax_img3 from "./TaxImages/Tax_img3.png";
import Tax_img4 from "./TaxImages/Tax_img4.png";
import Tax_img5 from "./TaxImages/Tax_img5.png";
import Tax_img6 from "./TaxImages/Tax_img6.png";



export default function Tax() {

    // gridTitle = ["Cyber Security", "Cloud Storage Solutions", "Content Management", "Artifical Intelligence", "Telecom Network Service"]
    // gridContent = ["Cyber Security Solutions as a unit of GreenFellow IT Security Solutions Pvt Ltd aims to provide cyber security solutions to private and government organizations across the globe. With around 200+ clients across the globe ICSS aims at providing Vulnerability Assessment & Penetration Testing services making cyber security convenient for every organization.",
    //     "File syncing and storage services provide seamless access to all your data—Word docs, PDFs, spreadsheets, photos, and any other Tax assets—wherever you are. You no longer need to be sitting at your work PC to see your work files. With cloud syncing you can get to them from your laptop at home, your smartphone on the go, or from your tablet on your couch. Syncing and storage services also add safety and security to your online life because when you sync your files via the cloud, you by default create a backup of them as well.",
    //     "Any basic solution for web content management helps you upload or write content, format it, add headlines and images, and do a number of backstage things like SEO. But in a multi-device, user-centric world, that’s not enough. Tax marketing has evolved, focusing more deeply on customer experience while incorporating mobile apps, the Internet of Things, and more. ",
    //     "Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision.",
    //     "We as a service provider involved in network planning, network optimization, installation and commissioning, managed services, operations, maintenance, and in-building solutions. We offer these solutions to OEM players such as Nokia, Samsung, Ericsson, ",
    // ]
    // gridImgs = [Tax_img2, Tax_img3, Tax_img4, Tax_img5, Tax_img6]

    const gridData = [
        {
            gridImg: Tax_img2,
            gridTitle: "Tax Policy & controversy",
            gridContent: "Companies need a line of sight into tax policy developments and potential for future conflicts, as well as a centralized global strategy."
        },

        {
            gridImg: Tax_img3,
            gridTitle: "Clear Finace Cloud",
            gridContent: "We are on a mission to simplify finances for Indians. We make software for invoices, taxes, payments and credit with a promise of saving money and time for millions of businesses, their supply chains, accountants and employees. We have grown over years to now ‘see’ a material portion of India’s economic graph on our network."
        },

        {
            gridImg: Tax_img4,
            gridTitle: "ITR Filling",
            gridContent: "An Income tax return (ITR) is a form used to file information about your income and tax to the Income Tax Department. The tax liability of a taxpayer is calculated based on his or her income."
        },
        {
            gridImg: Tax_img5,
            gridTitle: "Tax  Consultants",
            gridContent: "We prepare tax returns, estimate taxes owed, and represent clients at audits"
        },
        {
            gridImg: Tax_img6,
            gridTitle: "CFO",
            gridContent: "An Income tax return (ITR) is a form used to file information about your income and tax to the Income Tax Department. The tax liability of a taxpayer is calculated based on his or her income."
        },

    ]

    return (
        <div>
            <Servicestemplate underlinedTitle={"Tax Solution"}
                // title={"Transformation"}
                img1={Tax_img1}
                content={"Trained and dedicated manpower with 100% background screening / police verification to ensure quality delivery. We are PSARA-2005 compliant and follow its training mandate. We also train our guard force, additionally, in soft skills, as required for a particular segment or for client specific needs. Our Chairman is Dr.P.S.Pasricha, former D.G.P., Maharashtra, who is well known for his expertise and experience in this field. He is assisted by a team of former army and police officers."}
                gridData={gridData}
            // gridImgs={gridImgs}
            // gridTitle={gridTitle}
            // gridContent={gridContent}
            />
        </div>
    )
}
