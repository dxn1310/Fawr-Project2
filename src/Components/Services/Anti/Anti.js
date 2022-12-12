import React from 'react'
import Servicestemplate from '../ServicesTemplate/Servicestemplate.js';

import Anti_img1 from "./AntiImages/Anti_img1.png";
import Anti_img2 from "./AntiImages/Anti_img2.png";
import Anti_img3 from "./AntiImages/Anti_img3.png";
import Anti_img4 from "./AntiImages/Anti_img4.png";
import Anti_img5 from "./AntiImages/Anti_img5.png";
import Anti_img6 from "./AntiImages/Anti_img6.png";
import Anti_img7 from "./AntiImages/Anti_img7.png";
import Anti_img8 from "./AntiImages/Anti_img8.png";
import Anti_img9 from "./AntiImages/Anti_img9.png";
import Anti_img10 from "./AntiImages/Anti_img10.png";
// import Anti_img11 from "./AntiImages/Anti_img11.png";
// import Anti_img12 from "./AntiImages/Anti_img12.png";
// import Anti_img13 from "./AntiImages/Anti_img13.png";



export default function Anti() {

    // gridTitle = ["Cyber Security", "Cloud Storage Solutions", "Content Management", "Artifical Intelligence", "Telecom Network Service"]
    // gridContent = ["Cyber Security Solutions as a unit of GreenFellow IT Security Solutions Pvt Ltd aims to provide cyber security solutions to private and government organizations across the globe. With around 200+ clients across the globe ICSS aims at providing Vulnerability Assessment & Penetration Testing services making cyber security convenient for every organization.",
    //     "File syncing and storage services provide seamless access to all your data—Word docs, PDFs, spreadsheets, photos, and any other Anti assets—wherever you are. You no longer need to be sitting at your work PC to see your work files. With cloud syncing you can get to them from your laptop at home, your smartphone on the go, or from your tablet on your couch. Syncing and storage services also add safety and security to your online life because when you sync your files via the cloud, you by default create a backup of them as well.",
    //     "Any basic solution for web content management helps you upload or write content, format it, add headlines and images, and do a number of backstage things like SEO. But in a multi-device, user-centric world, that’s not enough. Anti marketing has evolved, focusing more deeply on customer experience while incorporating mobile apps, the Internet of Things, and more. ",
    //     "Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision.",
    //     "We as a service provider involved in network planning, network optimization, installation and commissioning, managed services, operations, maintenance, and in-building solutions. We offer these solutions to OEM players such as Nokia, Samsung, Ericsson, ",
    // ]
    // gridImgs = [Anti_img2, Anti_img3, Anti_img4, Anti_img5, Anti_img6]

    const gridData = [
        {
            gridImg: Anti_img2,
            gridTitle: "Litigation Support ",
            gridContent: "Litigation support services can span several aspects of a lawsuit. Different litigation support partners will provide different services, but you might expect to receive support for these common tasks."
        },

        {
            gridImg: Anti_img3,
            gridTitle: "Tactical Publicity campaigns",
            gridContent: "We help in orchestrating public members of the family and exposure campaigns or events, to highlight foremost infringements, widespread arrests, and consequences suffered via way of means of infringers. The intention is to generate most stress on government withinside the infringing country."
        },

        {
            gridImg: Anti_img4,
            gridTitle: "Jurisdictional Raid Action",
            gridContent: "To shut down counterfeit production lines and distribution channels, simultaneous raids and seizures are conducted across jurisdictions."
        },
        {
            gridImg: Anti_img5,
            gridTitle: "Post Raid Activity",
            gridContent: "The counterfeit goods are seized, and the counterfeiter is handed over to local law enforcement. There is a filing of an FIR. During court hearings, assistance is provided."
        },
        {
            gridImg: Anti_img6,
            gridTitle: "EIPR",
            gridContent: "A real-time database that contains all relevant information about the work performed for each client. Raid reports, seizure memos, raid photographs, court summonses, etc., are uploaded for easy and permanent access."
        },

        {
            gridImg: Anti_img7,
            gridTitle: "Market Surveys",
            gridContent: "Market research aimed at providing insight into the availability of counterfeit goods in a given market, clearly defining the differences in quality, quantity and price. Such research is the starting point for an effective IP program."
        },

        {
            gridImg: Anti_img8,
            gridTitle: "IPR Investigations",
            gridContent: "Detailed and accurate investigations to detect counterfeit transactions at retailers, wholesalers, manufacturers and printers. Such investigations are supported by solid evidence, written reports and samples of suspected counterfeit products."
        },

        {
            gridImg: Anti_img9,
            gridTitle: "Grey Market Evaluation",
            gridContent: "To compile and precisely analyse relevant data about counterfeiting and fraud from grey market situations."
        },
        {
            gridImg: Anti_img10,
            gridTitle: "Permanent Monitoring",
            gridContent: "EIPR places your trademarks and brands on a 'watch-list' and alerts you to sightings of suspected counterfeit or grey market product."
        },
        // {
        //     gridImg: Anti_img11,
        //     gridTitle: "Company Business / Financial Check",
        //     gridContent: "We provide vital information about organisations, including their identity, standards of compliance, their management team, financial standing, operating standards and finally presence in the media. This will help you in assessing the risk factor of working together with organisations and ensure the safety and security of your relationships with said organisations by covering and verifying the above parameters before you are ready to go into business together."
        // },

        // {
        //     gridImg: Anti_img12,
        //     gridTitle: "Exit Management",
        //     gridContent: "Employee off-boarding process is often overlooked, honest feedback from the exiting employee can be used to bring your attrition down. Helps organization unravel real reason on employee exit. A feedback source to tweak your hiring and employee retention policy. "
        // },
        // {
        //     gridImg: Anti_img13,
        //     gridTitle: "Medical Evaluations",
        //     gridContent: "The arrival of the pandemic certainly shocked the very chains of reality and pushed personal and social health to a necessary standard. In view of the vision regarding the importance of health and safety, we offer this service to help ensure safety and sustainability."
        // },

    ]

    return (
        <div>
            <Servicestemplate underlinedTitle={"Anti- Counterfeiting Solution"}
                // title={"Transformation"}
                img1={Anti_img1}
                content={"Counterfeiting solutions help both brands and consumers distinguish fake products from originals. By securing their supply chain, brands are able to ensure product authenticity."}
                gridData={gridData}
            // gridImgs={gridImgs}
            // gridTitle={gridTitle}
            // gridContent={gridContent}
            />
        </div>
    )
}
