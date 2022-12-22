import React, { useState } from 'react'
import Servicestemplate1 from '../ServicesTemplate/Servicestenplate1';
import "./People.css"
import { Button, ButtonGroup, Divider, Stack, Text } from '@chakra-ui/react'
import { NavLink as Link } from 'react-router-dom';


import People_img1 from "./PeopleImages/People_img1.png";
import People_img2 from "./PeopleImages/People_img2.png";
import People_img3 from "./PeopleImages/People_img3.png";
import People_img4 from "./PeopleImages/People_img4.png";
import People_img5 from "./PeopleImages/People_img5.png";
import People_img6 from "./PeopleImages/People_img6.png";
import People_img7 from "./PeopleImages/People_img7.png";
import People_img8 from "./PeopleImages/People_img8.png";
import People_img9 from "./PeopleImages/People_img9.png";
import People_img10 from "./PeopleImages/People_img10.png";
// import People_img6 from "./PeopleImages/People_img6.png";



export default function People({ option, setOption }) {

    // gridTitle = ["Cyber Security", "Cloud Storage Solutions", "Content Management", "Artifical Intelligence", "Telecom Network Service"]
    // gridContent = ["Cyber Security Solutions as a unit of GreenFellow IT Security Solutions Pvt Ltd aims to provide cyber security solutions to People and government organizations across the globe. With around 200+ clients across the globe ICSS aims at providing Vulnerability Assessment & Penetration Testing services making cyber security convenient for every organization.",
    //     "File syncing and storage services provide seamless access to all your data—Word docs, PDFs, spreadsheets, photos, and any other People assets—wherever you are. You no longer need to be sitting at your work PC to see your work files. With cloud syncing you can get to them from your laptop at home, your smartphone on the go, or from your tablet on your couch. Syncing and storage services also add safety and security to your online life because when you sync your files via the cloud, you by default create a backup of them as well.",
    //     "Any basic solution for web content management helps you upload or write content, format it, add headlines and images, and do a number of backstage things like SEO. But in a multi-device, user-centric world, that’s not enough. People marketing has evolved, focusing more deeply on customer experience while incorporating mobile apps, the Internet of Things, and more. ",
    //     "Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision.",
    //     "We as a service provider involved in network planning, network optimization, installation and commissioning, managed services, operations, maintenance, and in-building solutions. We offer these solutions to OEM players such as Nokia, Samsung, Ericsson, ",
    // ]
    // gridImgs = [People_img2, People_img3, People_img4, People_img5, People_img6]

    // const [option, setOption] = useState("none");

    const gridData = [
        {
            gridImg: People_img2,
            gridLink: "/People Services/Home Salon",
            gridTitle: "Home salon",
            gridContent: "With our home salon service get the best experience of hair-cut, shaving & massage therapy."
        },

        {
            gridImg: People_img3,
            gridLink: "/People Services/Interior Designing",
            gridTitle: "Interior Designing",
            gridContent: "Choose high quality, budget-friendly modular solutions like kitchens, wardrobes, TV units, and more your favourite colours, sizes, and designs."
        },

        {
            gridImg: People_img4,
            gridLink: "/People Services/Electronic Appliances Repair",
            gridTitle: "Electronic appliance Repair",
            gridContent: "We prodive service, repair, service and installation & uninstallation of your home appliances."
        },
        {
            gridImg: People_img5,
            gridLink: "/People Services/Cleaning & Pest Control",
            gridTitle: "Cleaning & Pest Control",
            gridContent: "We serve Deep cleaning of bedrooms, living room, kitchen & bathroom.  pest cleaning. Floor stain removal."
        },

        {
            gridImg: People_img6,
            gridLink: "/People Services/Painting",
            gridTitle: "Painting",
            gridContent: "Customised Plan & qoute for all your needs : Painting, Waterproffing, Repair etc."
        },
        {
            gridImg: People_img7,
            gridLink: "/People Services/Electronics and Carpenter Service",
            gridTitle: "Electronics & Carpenter Service",
            gridContent: "Customised Plan & qoute for all your needs : Painting, Waterproffing, Repair etc."
        },
        // {
        //     gridImg: People_img6,
        //     gridTitle: "Collaborative & internal checklists",
        //     gridContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        // },

    ]

    return (
        <div className='people-outer'>
            {/* <div className='people-top'>
                <Link to="/People Services/Work As Expert">
                    <Text fontSize="100%" color="#2B7FFF">Register As Professional</Text>
                </Link>
            </div> */}

            <div>
                <Servicestemplate1 underlinedTitle={"People Services"}
                    // title={"Transformation"}
                    img1={People_img1}
                    content={"We don't want to push our ideas on to customers, we simply want to make what they want."}
                    gridData={gridData}
                    // gridImgs={gridImgs}
                    // gridTitle={gridTitle}
                    // gridContent={gridContent}
                    img2={People_img8}
                    img3={People_img9}
                    img4={People_img10}
                    option={option}
                    setOption={setOption}
                />
            </div>

            {/* <div className='people-row1'>
                vfdv
            </div> */}
        </div>
    )
}
