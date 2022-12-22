// import React from 'react'
// import "./Bill.css"
// import "../../../PropleTemplate/Template.css"

// // import "./Template.css"
// import {
//     Stack, Button, Input
// } from '@chakra-ui/react'

// import { NavLink as Link } from 'react-router-dom'

// export default function Bill({ bill }) {
//     return (
//         <div>
//             {
//                 bill.map((option, index) => {
//                     return <div className='template-content-left-option'>
//                         <div className='template-content-left-option-title'>
//                             {option.title}
//                         </div>
//                         <div className='template-content-left-option-content'>
//                             <div className='template-content-left-option-content-left'>
//                                 <div className='option-outer'>
//                                     <div className='option-outer-left'>
//                                         <div>

//                                             <div className='option-rating'>
//                                                 <Stack direction="row" spacing={3}>
//                                                     <label>{option.rating}</label>
//                                                     <label>({option.ratingPeople})</label>
//                                                 </Stack>
//                                             </div>
//                                             <div className='option-price'>
//                                                 <label>Start at ₹ {option.price}</label>
//                                             </div>
//                                             <ul className='option-ul'>
//                                                 {option.points.map(point => <li className='option-li'>{point}</li>)
//                                                 }
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>

//                             </div>

//                         </div>
//                     </div>

//                 })
//             }
//         </div>

//     )
// }


import React from 'react'

export default function Bill() {
    return (
        <div>Bill</div>
    )
}
