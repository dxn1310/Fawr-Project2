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
import Heart_img from "./PeopleImages/Heart_img.png"
// import People_img6 from "./PeopleImages/People_img6.png";



export default function People({ option, setOption }) {

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


    ]

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });


    return (

        <div className='people-outer'>
            <div>
                <Servicestemplate1 underlinedTitle={"People Services"}
                    // title={"Transformation"}
                    img1={People_img1}
                    content={"We don't want to push our ideas on to customers, we simply want to make what they want."}
                    gridData={gridData}
                    img2={People_img8}
                    img3={Heart_img}
                    img4={People_img10}
                    option={option}
                    setOption={setOption}
                />
            </div>
        </div>
    )
}
