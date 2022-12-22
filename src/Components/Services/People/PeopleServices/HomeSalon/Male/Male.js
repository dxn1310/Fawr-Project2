import React from 'react'
import Template from '../../../PropleTemplate/Template'

import Male_img1 from "./MaleImages/Male_img1.png"
import Male_img2 from "./MaleImages/Male_img2.png"
import Male_img3 from "./MaleImages/Male_img3.png"
import Male_img4 from "./MaleImages/Male_img4.png"
import Male_img5 from "./MaleImages/Male_img5.png"
import Male_img6 from "./MaleImages/Male_img6.png"
// import Male_img7 from "./MaleImages/Male_img7.png"

export default function Male() {
    const gridImages = [Male_img2, Male_img3, Male_img4, Male_img5, Male_img6]
    const options = [
        {
            title: "Hair - Cut",
            content: [
                {
                    contentTitle: "Hair-Cut for men",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Suitable haircut as per the face shape & preference ",
                        "Pre-service consultation & proper cleanup after the service"]
                },

                {
                    contentTitle: "Kid’s Hair-cut",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["No more hassle of managing kids outside, safe haircut at home.",
                        " Expert child stylists for a mess free experience with child friendly."]
                },

                {
                    contentTitle: "Haircut + Beard Grooming + Relaxing Head Massage",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Men's Haircut",
                        "Beard Shape & Style",
                        "10 min Head Massage"]
                },
            ]
        },
        {
            title: "Manicure & Pedicure",
            content: [
                {
                    contentTitle: "Deep Cleanse Pedicure",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Removes dead skin, ingrown nails & foot odor",
                        "Exfoliates & brightens feet with a soothing massage"]
                },

                {
                    contentTitle: "Express Pedicure",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Express service to maintain foot hygiene",
                        "Removes dead skin, foot odor, dirt & calluses"]
                },

                {
                    contentTitle: "Express Manicure",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Improves hygiene by removing dirt from nails ",
                        "Nourishing massage to reduce cracked & dry palms."]
                },

                {
                    contentTitle: "Express pedicure + Skin brightening facial",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Express service to maintain foot hygiene",
                        "Removes dead skin, foot odor, dirt & calluses"]
                },


            ]
        },

        {
            title: "Massage",
            content: [
                {
                    contentTitle: " Relaxing Head Massage",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["instant relief stress"]
                },

                {
                    contentTitle: "Beard Shaping & Styling",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Get an even beard shape, covering all hard to reach areas",
                        "Get customized styles from our professionally trained stylist"]
                },
                {
                    contentTitle: "Beard + Relaxing Head Massage",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["10 min Head Massage ",
                        "Beard Shape & Style"]
                },

                {
                    contentTitle: "Haircut + Beard Styling",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Men's Haircut",
                        "Beard Shape & Style"]
                },

                {
                    contentTitle: "Beard Color with Product",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Colour patchy grey beards with a truly natural look.",
                        "Best quality products to ensure a natural looking color."]
                },
            ]
        },

        {
            title: "Men’s Shaving",
            content: [
                {
                    contentTitle: "Clean Shave",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Clean shave for men"]
                },

                {
                    contentTitle: "Beard Shaping & Styling",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Get an even beard shape, covering all hard to reach areas",
                        "Get customized styles from our professionally trained stylist"]
                },
                {
                    contentTitle: "Hair-cut & Beard Styling",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Hair- Cut",
                        "Beard Shape & Styling"]
                },

            ]
        },

        {
            title: "Manicure & Pedicure",
            content: [
                {
                    contentTitle: "Beard Color with Product",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Colour patchy grey beards with a truly natural look",
                        "Best quality products to ensure a natural looking color."]
                },

                {
                    contentTitle: "Haircut + Hair Color (Garnier)",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["100% grey coverage at affordable price",
                        "3 shades available: Black, Dark Brown, Black Brown"]
                },

                {
                    contentTitle: "Haircut + Hair Color (L'Oreal)",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["100% grey coverage at affordable price ",
                        "3 shades available: Black, Dark Brown, Black Brown"]
                },


                {
                    contentTitle: "Hair Color Application Only",
                    contentRating: "4.5 Rating",
                    contentRatingPeople: "47k",
                    contentPrice: "299",
                    contentPoints: ["Even application by professionals especially at the back",
                        "Complete coverage of grey hair from tip to root"]
                },
            ]
        },


    ]
    return (
        <div>
            <Template bgimg={Male_img1} gridImages={gridImages} options={options} />
        </div>
    )
}
