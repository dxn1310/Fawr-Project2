import React from 'react'
import Template from '../../../PropleTemplate/Template'

import Carpenter_img1 from "./CarpenterImages/Carpenter_img1.png"
import Carpenter_img2 from "./CarpenterImages/Carpenter_img2.png"
import Carpenter_img3 from "./CarpenterImages/Carpenter_img3.png"
import Carpenter_img4 from "./CarpenterImages/Carpenter_img4.png"
import Carpenter_img5 from "./CarpenterImages/Carpenter_img5.png"
import Carpenter_img6 from "./CarpenterImages/Carpenter_img6.png"
// import Carpenter_img7 from "./CarpenterImages/Carpenter_img7.png"

export default function Carpenter() {
    const gridImages = [Carpenter_img2, Carpenter_img3, Carpenter_img4, Carpenter_img5, Carpenter_img6]
    const options = [
        {
            title: "Door",
            content: [
                {
                    contentTitle: "Major Door Installation",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "Minor Door  Installation",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "Door Lock Installation",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "Door Lock Replacement",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "Door Lock Repair",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "Wall Mount Door Closer Installation",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "Door Slider Repair",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },
            ]
        },
        {
            title: "Window",
            content: [
                {
                    contentTitle: "Non- Motorised Blinds Fitting Upto 5m",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "Window AC Frame Installation",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "Door Lock Installation",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "Door Lock Replacement",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "Door Lock Repair",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "Wall Mount Door Closer Installation",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },
                {
                    contentTitle: "Curtains Rods Installation",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },
            ]
        },

        {
            title: "Drill & Hang",
            content: [
                {
                    contentTitle: "Drill & Hang Wall Decor",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "Bathroom Mirror Installation",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "Glass Self Installation",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                

            ]
        },


        {
            title: "Bed",
            content: [
                {
                    contentTitle: "Bed Support Repair ",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "Bed Legs Repair",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "New Bed Installation",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },


            ]
        },



        {
            title: "Cupboard & Drawer",
            content: [
                {
                    contentTitle: "Cupboard & Drawer Lock Installation",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "Cupboard & Drawer Lock Replacement",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "Cupboard & Drawer Lock Repair",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "Door Lock Replacement",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "Handle Installation/ Replacement",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "Hinge Installation 2 pair",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "Mirror Repair",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },


            ]
        },


    ]
    return (
        <div>
            <Template bgimg={Carpenter_img1} gridImages={gridImages} options={options} />
        </div>
    )
}
