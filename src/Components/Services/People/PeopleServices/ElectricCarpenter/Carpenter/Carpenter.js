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
            title: "Switch & Socket",
            content: [
                {
                    contentTitle: "AC Switch Installation",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "Switchboard  Installation",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "Switchboard  Installation Repair",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "AC Switch Installation",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "Switchboard Replacement",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "Socket Repair",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },
            ]
        },
        {
            title: "Fan",
            content: [
                {
                    contentTitle: "Fan Repair",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "Celing Fan Regulator Replacement",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "Celing Fan Installation",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "Decorative Celing Fan Installation",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "Fan Replacement",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "Wall Fan Installation",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },
            ]
        },

        {
            title: "Light",
            content: [
                {
                    contentTitle: "Bulbs Installation Upto 5W",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "Bulbs Holder Installation",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "Wall Light  Installation",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "False Celing Light Installation",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

            ]
        },


        {
            title: "Wiring",
            content: [
                {
                    contentTitle: "New Internal Wiring (per 5m) ",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "New  Wiring with Casing (per 5m)",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "New  Wiring without Casing (per 5m)",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },


            ]
        },



        {
            title: "Inveter",
            content: [
                {
                    contentTitle: "Single Battery Inveter Installation",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "Double Battery Inveter Installation",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "Inveter Fuse Replacement",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "Inveter Servicing",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Lorem Ipsum is simply dummy text of the printing"]
                },

                {
                    contentTitle: "Stabilizer Installation",
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
