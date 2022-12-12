import React from 'react'
import Servicestemplate from '../ServicesTemplate/Servicestemplate.js';

import Corporate_img1 from "./CorporateImages/Corporate_img1.png";
import Corporate_img2 from "./CorporateImages/Corporate_img2.png";
import Corporate_img3 from "./CorporateImages/Corporate_img3.png";
import Corporate_img4 from "./CorporateImages/Corporate_img4.png";
import Corporate_img5 from "./CorporateImages/Corporate_img5.png";
import Corporate_img6 from "./CorporateImages/Corporate_img6.png";
import Corporate_img7 from "./CorporateImages/Corporate_img7.png";
import Corporate_img8 from "./CorporateImages/Corporate_img8.png";
// import Corporate_img9 from "./CorporateImages/Corporate_img9.png";
// import Corporate_img10 from "./CorporateImages/Corporate_img10.png";
// import Corporate_img11 from "./CorporateImages/Corporate_img11.png";
// import Corporate_img12 from "./CorporateImages/Corporate_img12.png";
// import Corporate_img13 from "./CorporateImages/Corporate_img13.png";



export default function Corporate() {

    // gridTitle = ["Cyber Security", "Cloud Storage Solutions", "Content Management", "Artifical Intelligence", "Telecom Network Service"]
    // gridContent = ["Cyber Security Solutions as a unit of GreenFellow IT Security Solutions Pvt Ltd aims to provide cyber security solutions to private and government organizations across the globe. With around 200+ clients across the globe ICSS aims at providing Vulnerability Assessment & Penetration Testing services making cyber security convenient for every organization.",
    //     "File syncing and storage services provide seamless access to all your data—Word docs, PDFs, spreadsheets, photos, and any other Corporate assets—wherever you are. You no longer need to be sitting at your work PC to see your work files. With cloud syncing you can get to them from your laptop at home, your smartphone on the go, or from your tablet on your couch. Syncing and storage services also add safety and security to your online life because when you sync your files via the cloud, you by default create a backup of them as well.",
    //     "Any basic solution for web content management helps you upload or write content, format it, add headlines and images, and do a number of backstage things like SEO. But in a multi-device, user-centric world, that’s not enough. Corporate marketing has evolved, focusing more deeply on customer experience while incorporating mobile apps, the Internet of Things, and more. ",
    //     "Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision.",
    //     "We as a service provider involved in network planning, network optimization, installation and commissioning, managed services, operations, maintenance, and in-building solutions. We offer these solutions to OEM players such as Nokia, Samsung, Ericsson, ",
    // ]
    // gridImgs = [Corporate_img2, Corporate_img3, Corporate_img4, Corporate_img5, Corporate_img6]

    const gridData = [
        {
            gridImg: Corporate_img2,
            gridTitle: "Forensic Diagnostic ",
            gridContent: "A dipstick review (sanitary check) of key business processes by conducting document and data reviews and limited investigative procedures. The focus is on identifying fraud vulnerabilities and selected cases of existing fraud."
        },

        {
            gridImg: Corporate_img3,
            gridTitle: "Market Intelligence",
            gridContent: "Conduct on-site investigations to gather information about suspected fraud and modus operandi, uncover fraudster assets, identify accomplices, connect with third parties, and obtain additional evidence to support issues under investigation To do."
        },

        {
            gridImg: Corporate_img4,
            gridTitle: "Fraud Risk Management",
            gridContent: "A specified evaluation of key commercial enterprise tactics with an goal of figuring out fraud vulnerabilities. Focus stays of appearing transaction checking out and checking life and effectiveness of fraud preventive / detective controls and figuring out residual fraud risks. This might comply with with tips in shape of extra controls and submit implementation we'd additionally make certain everyday monitoring."
        },
        {
            gridImg: Corporate_img5,
            gridTitle: "Whistleblower Hotline",
            gridContent: "Stakeholders, be it employees, vendors, customers or any third party wanting to share any information around a fraud, can call on this hotline, run and maintained by us, exclusively for you."
        },
        {
            gridImg: Corporate_img6,
            gridTitle: "Employee Fraud Investigation",
            gridContent: "Be it a known fraud, whistle blower allegation, management suspicion or any other suspected employee fraud or misconduct, we can help you get to the facts of the matter, gather evidence, obtain confessions and also facilitate the financial recovery by assisting in the drafting of a complaint, filing of an FIR and pursuing the case with the police authorities to its logical conclusion."
        },

        {
            gridImg: Corporate_img7,
            gridTitle: "Disk Imaging and Review",
            gridContent: "Using forensically sound tools, conduct laptop/mobile imaging of the suspected individual to get evidence of fraud through existing/deleted disk data and emails."
        },

        {
            gridImg: Corporate_img8,
            gridTitle: "Senior Management Due Diligence",
            gridContent: "Gather field-based intelligence by interacting with close affiliates of the suspected employee. Further get information obtained through senior reliable sources. Marry findings noted with key information gathered from public domain."
        },

        // {
        //     gridImg: Corporate_img9,
        //     gridTitle: "Grey Market Evaluation",
        //     gridContent: "To compile and precisely analyse relevant data about counterfeiting and fraud from grey market situations."
        // },
        // {
        //     gridImg: Corporate_img10,
        //     gridTitle: "Permanent Monitoring",
        //     gridContent: "EIPR places your trademarks and brands on a 'watch-list' and alerts you to sightings of suspected counterfeit or grey market product."
        // },
        // {
        //     gridImg: Corporate_img11,
        //     gridTitle: "Company Business / Financial Check",
        //     gridContent: "We provide vital information about organisations, including their identity, standards of compliance, their management team, financial standing, operating standards and finally presence in the media. This will help you in assessing the risk factor of working together with organisations and ensure the safety and security of your relationships with said organisations by covering and verifying the above parameters before you are ready to go into business together."
        // },

        // {
        //     gridImg: Corporate_img12,
        //     gridTitle: "Exit Management",
        //     gridContent: "Employee off-boarding process is often overlooked, honest feedback from the exiting employee can be used to bring your attrition down. Helps organization unravel real reason on employee exit. A feedback source to tweak your hiring and employee retention policy. "
        // },
        // {
        //     gridImg: Corporate_img13,
        //     gridTitle: "Medical Evaluations",
        //     gridContent: "The arrival of the pandemic certainly shocked the very chains of reality and pushed personal and social health to a necessary standard. In view of the vision regarding the importance of health and safety, we offer this service to help ensure safety and sustainability."
        // },

    ]

    return (
        <div>
            <Servicestemplate underlinedTitle={"Corporate Fraud & "}
                title={"Forensic Investigation"}
                img1={Corporate_img1}
                content={"Counterfeiting solutions help both brands and consumers distinguish fake products from originals. By securing their supply chain, brands are able to ensure product authenticity."}
                gridData={gridData}
            // gridImgs={gridImgs}
            // gridTitle={gridTitle}
            // gridContent={gridContent}
            />
        </div>
    )
}
