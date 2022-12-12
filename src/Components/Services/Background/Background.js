import React from 'react'
import Servicestemplate from '../ServicesTemplate/Servicestemplate.js';

import Background_img1 from "./BackgroundImages/Background_img1.png";
import Background_img2 from "./BackgroundImages/Background_img2.png";
import Background_img3 from "./BackgroundImages/Background_img3.png";
import Background_img4 from "./BackgroundImages/Background_img4.png";
import Background_img5 from "./BackgroundImages/Background_img5.png";
import Background_img6 from "./BackgroundImages/Background_img6.png";
import Background_img7 from "./BackgroundImages/Background_img7.png";
import Background_img8 from "./BackgroundImages/Background_img8.png";
import Background_img9 from "./BackgroundImages/Background_img9.png";
import Background_img10 from "./BackgroundImages/Background_img10.png";
import Background_img11 from "./BackgroundImages/Background_img11.png";
import Background_img12 from "./BackgroundImages/Background_img12.png";
import Background_img13 from "./BackgroundImages/Background_img13.png";



export default function Background() {

    // gridTitle = ["Cyber Security", "Cloud Storage Solutions", "Content Management", "Artifical Intelligence", "Telecom Network Service"]
    // gridContent = ["Cyber Security Solutions as a unit of GreenFellow IT Security Solutions Pvt Ltd aims to provide cyber security solutions to private and government organizations across the globe. With around 200+ clients across the globe ICSS aims at providing Vulnerability Assessment & Penetration Testing services making cyber security convenient for every organization.",
    //     "File syncing and storage services provide seamless access to all your data—Word docs, PDFs, spreadsheets, photos, and any other Background assets—wherever you are. You no longer need to be sitting at your work PC to see your work files. With cloud syncing you can get to them from your laptop at home, your smartphone on the go, or from your tablet on your couch. Syncing and storage services also add safety and security to your online life because when you sync your files via the cloud, you by default create a backup of them as well.",
    //     "Any basic solution for web content management helps you upload or write content, format it, add headlines and images, and do a number of backstage things like SEO. But in a multi-device, user-centric world, that’s not enough. Background marketing has evolved, focusing more deeply on customer experience while incorporating mobile apps, the Internet of Things, and more. ",
    //     "Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision.",
    //     "We as a service provider involved in network planning, network optimization, installation and commissioning, managed services, operations, maintenance, and in-building solutions. We offer these solutions to OEM players such as Nokia, Samsung, Ericsson, ",
    // ]
    // gridImgs = [Background_img2, Background_img3, Background_img4, Background_img5, Background_img6]

    const gridData = [
        {
            gridImg: Background_img2,
            gridTitle: "Data-Base Verification",
            gridContent: "The database verification process takes as input one or more previously generated database digests. It then recomputes the hashes stored in the database ledger based on the current state of the ledger tables"
        },

        {
            gridImg: Background_img3,
            gridTitle: "Criminal Record Verification",
            gridContent: "A public criminal record check is part of the rigorous background check conducted prior to hiring an applicant. This involves reviewing various publicly available documents to uncover the applicant's criminal background"
        },

        {
            gridImg: Background_img4,
            gridTitle: "Education Certificate Verificaton",
            gridContent: "We provide the service for education  certificate verification check for all type of corporate and Universities as well."
        },
        {
            gridImg: Background_img5,
            gridTitle: "Drug Test",
            gridContent: "a test performed on blood or urine to determine the presence or absence of proscribed drugs and used especially to detect athletes using performance-enhancing drugs such as steroids."
        },
        {
            gridImg: Background_img6,
            gridTitle: "Professional Reference Verification",
            gridContent: "A background check with Education Verification can help you make more informed decisions. Check the validity of the candidate's degree, education credentials, or professional license."
        },

        {
            gridImg: Background_img7,
            gridTitle: "Physical Address Verification",
            gridContent: "Verify the applicant's address and provide information such as: B. Determining whether he owns or rents an apartment, etc., by physically visiting the site at designated address"
        },

        {
            gridImg: Background_img8,
            gridTitle: "Court Record Verification",
            gridContent: "IVS verifies and identifies any past or present criminal, civil and/or family related records by working with the requisite courts, to identify if your candidates might be a part of an of the above and may be hiding them from you."
        },

        {
            gridImg: Background_img9,
            gridTitle: "Virtual Address Verification",
            gridContent: "This will improve your experience by keeping the interaction solely between you and our IVS trained professionals on video call. This also helps provide easier, concise and quicker results. Fraud and False coverage is also taken care of here through video validity."
        },
        {
            gridImg: Background_img10,
            gridTitle: "Psychometric Test",
            gridContent: "A compilation of data science, machine learning and predictive AI fuels our Psychometric Testing services for your employee verification needs."
        },
        {
            gridImg: Background_img11,
            gridTitle: "Company Business / Financial Check",
            gridContent: "We provide vital information about organisations, including their identity, standards of compliance, their management team, financial standing, operating standards and finally presence in the media. This will help you in assessing the risk factor of working together with organisations and ensure the safety and security of your relationships with said organisations by covering and verifying the above parameters before you are ready to go into business together."
        },

        {
            gridImg: Background_img12,
            gridTitle: "Exit Management",
            gridContent: "Employee off-boarding process is often overlooked, honest feedback from the exiting employee can be used to bring your attrition down. Helps organization unravel real reason on employee exit. A feedback source to tweak your hiring and employee retention policy. "
        },
        {
            gridImg: Background_img13,
            gridTitle: "Medical Evaluations",
            gridContent: "The arrival of the pandemic certainly shocked the very chains of reality and pushed personal and social health to a necessary standard. In view of the vision regarding the importance of health and safety, we offer this service to help ensure safety and sustainability."
        },

    ]

    return (
        <div>
            <Servicestemplate underlinedTitle={"Background Check Service"}
                // title={"Transformation"}
                img1={Background_img1}
                content={"Providing background checks in the vast majority of countries and territories, First Advantage offers services for small businesses and international organizations. It’s the best background check site because most results come back in less than 24 hours. It offers drug testing and can even order fingerprint-based background checks from the FBI. "}
                gridData={gridData}
            // gridImgs={gridImgs}
            // gridTitle={gridTitle}
            // gridContent={gridContent}
            />
        </div>
    )
}
