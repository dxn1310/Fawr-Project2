import React from 'react'
import Template from '../../../PropleTemplate/Template'

import Female_img1 from "./FemaleImages/Female_img1.png"
import Female_img2 from "./FemaleImages/Female_img2.png"
import Female_img3 from "./FemaleImages/Female_img3.png"
import Female_img4 from "./FemaleImages/Female_img4.png"
import Female_img5 from "./FemaleImages/Female_img5.png"
import Female_img6 from "./FemaleImages/Female_img6.png"
// import Female_img7 from "./FemaleImages/Female_img7.png"

export default function Female({ Bill, setBill, total, setTotal }) {
    const gridImages = [Female_img2, Female_img3, Female_img4, Female_img5, Female_img6]
    const options = [
        {
            title: "Bleach & Detan",
            content: [
                {
                    contentTitle: "Bleach",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Treatment to remove dark  spot, tan, pigmentation, blemishes, etc. ",
                        "Not suitable for sensitive skin."]
                },

                {
                    contentTitle: "Detan",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["RAAGA detan pack infused with milk, honey, fruit extracts to remove tan"]
                },
            ]
        },
        {
            title: "Waxing",
            content: [
                {
                    contentTitle: "Roll-on special (full arms + full legs )",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Choose from chocolate Roll-on & RICA Roll-on",
                        "We use RICA peel-off for underarms waxing."]
                },

                {
                    contentTitle: "Full arms + underarms",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["We use RICA peel-off for underarms waxing"]
                },
            ]
        },

        {
            title: "Manicure & Pedicure",
            content: [
                {
                    contentTitle: "Cut, File & Polish",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Choose from chocolate Roll-on & RICA Roll-on",
                        "We use RICA peel-off for underarms waxing."]
                },

                {
                    contentTitle: "Elysian British rose manicure",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["We use RICA peel-off for underarms waxing",]
                },
                {
                    contentTitle: "Elysian chocolate & vanilla manicure",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Relaxing swell gel soak, scrub, cream massage, mask for fresh & fragrant hands"]
                },

                {
                    contentTitle: "Elysiancandle spa manicure",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Soothing fizz ball therapy, scrub, wax massage, double masks for gorgeous hands",]
                },
            ]
        },

        {
            title: "Hair- Cut & Hair Colour",
            content: [
                {
                    contentTitle: "Hair colour",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Colour/ henna application by expert to give your hair a netural look & shine."]
                },

                {
                    contentTitle: "Hair- Cut ",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["All type of stylised hair cut we provide."]
                },
                {
                    contentTitle: "Head Massage ",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Relaxing oil massage to relieve stress & promote hair growth"]
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
            title: "Threading",
            content: [
                {
                    contentTitle: "Threading",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Good quality thread for desired eyebrow shape & other facial area hair removal."]
                },
            ]
        },


    ]
    return (
        <div>
            <Template bgimg={Female_img1} gridImages={gridImages} options={options} Bill={Bill} setBill={setBill} total={total} setTotal={setTotal} />
        </div>
    )
}
