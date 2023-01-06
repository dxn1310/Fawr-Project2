import React from 'react'
import Template from '../../PropleTemplate/Template.js'

import Electronic_img1 from "./ElectronicImages/Electronic_img1.png"
import Electronic_img2 from "./ElectronicImages/Electronic_img2.png"
import Electronic_img3 from "./ElectronicImages/Electronic_img3.png"
import Electronic_img4 from "./ElectronicImages/Electronic_img4.png"
import Electronic_img5 from "./ElectronicImages/Electronic_img5.png"
import Electronic_img6 from "./ElectronicImages/Electronic_img6.png"
import Electronic_img7 from "./ElectronicImages/Electronic_img7.png"

export default function Electronic({ Bill, setBill, total, setTotal }) {
    const gridImages = [Electronic_img2, Electronic_img3, Electronic_img4, Electronic_img5, Electronic_img6, Electronic_img7]
    const options = [
        {
            title: "Air Conditioner Installation/Uninstallation",
            content: [
                {
                    contentTitle: "Installation ( Window/ Split)",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Including checking if needed"]
                },

                {
                    contentTitle: "Uninstallation  ( Window/ Split) ",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Includes uninstallation for your Ac"]
                },
            ]
        },
        {
            title: "Service ",
            content: [
                {
                    contentTitle: "Deep Clean AC Service ( Window)",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing",
                        "Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "Deep Clean AC Service ( Split) ",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },
            ]
        },

        {
            title: "Repair",
            content: [
                {
                    contentTitle: "Gas Repair (Window/Split)",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing",
                        "Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "Gas Leak Fixing and refill ",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing",
                        "Lorem Ipsum is simply dummy text of the printing"]
                },
            ]
        },

        {
            title: "Refrigerator Checkup ",
            content: [
                {
                    contentTitle: "Double Door Refrigerator Check-Up",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing",
                        "Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: " Single Door Refrigerator Check-Up ",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing",
                        "Lorem Ipsum is simply dummy text of the printing"]
                },
                {
                    contentTitle: "Side-By- Side door Refrigerator Check-Up",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing",
                        "Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: " Gas Leak Fixing and refill ",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing",
                        "Lorem Ipsum is simply dummy text of the printing"]
                },
            ]
        },

        {
            title: "Microwave Repair",
            content: [
                {
                    contentTitle: "Microwave Repair",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing",
                        "Lorem Ipsum is simply dummy text of the printing"]
                },
            ]
        },

        {
            title: "Washing Machine Installation/Uninstallation",
            content: [
                {
                    contentTitle: "Washing Machine Installation",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing",
                        "Lorem Ipsum is simply dummy text of the printing"]
                },
                {
                    contentTitle: "Washing Machine Uninstallation",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing",
                        "Lorem Ipsum is simply dummy text of the printing"]
                },
            ]
        },

        {
            title: "Repair",
            content: [
                {
                    contentTitle: "Fully Automatic (Top Load) Checkup",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing",
                        "Lorem Ipsum is simply dummy text of the printing"]
                },
                {
                    contentTitle: "Fully Automatic (Front Load) Checkup",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing",
                        "Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "Semi Automatic Checkup",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing",
                        "Lorem Ipsum is simply dummy text of the printing"]
                },
            ]
        },

        {
            title: "Geyser Installation/Uninstallation",
            content: [
                {
                    contentTitle: "Geyser Installation",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing",
                        "Lorem Ipsum is simply dummy text of the printing"]
                },
                {
                    contentTitle: "Geyser Uninstallation",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing",
                        "Lorem Ipsum is simply dummy text of the printing"]
                },
            ]
        },

        {
            title: "Repair",
            content: [
                {
                    contentTitle: "Geyser Checkup",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing",
                        "Lorem Ipsum is simply dummy text of the printing"]
                },

            ]
        },

        {
            title: "Television Installation/Uninstallation",
            content: [
                {
                    contentTitle: "Installation ( Above 46 inches)",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing",
                        "Lorem Ipsum is simply dummy text of the printing"]
                },
                {
                    contentTitle: "Uninstallation ( Above 46 inches)",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing",
                        "Lorem Ipsum is simply dummy text of the printing"]
                },
                {
                    contentTitle: "Installation ( Upto 46 inches)",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing",
                        "Lorem Ipsum is simply dummy text of the printing"]
                },
                {
                    contentTitle: "Uninstallation ( Upto 46 inches)",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing",
                        "Lorem Ipsum is simply dummy text of the printing"]
                },

            ]
        },

        {
            title: "Repair",
            content: [
                {
                    contentTitle: "Television Checkup",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing",
                        "Lorem Ipsum is simply dummy text of the printing"]
                },


            ]
        },
    ]
    return (
        <div>
            <Template bgimg={Electronic_img1} gridImages={gridImages} options={options} Bill={Bill} setBill={setBill} total={total} setTotal={setTotal} />
        </div>
    )
}
