// import React from 'react';
// import "./Slide5.css"
// import { Button, Stack } from '@chakra-ui/react';
// import Slide5_img1 from "../../../../Services/People/PeopleImages/People_img1.png"
// import Slide5_img2 from "../SlideImages/Slide5_img2.png"
// import Slide5_img3 from "../SlideImages/Slide5_img3.png"
// import Slide5_img4 from "../SlideImages/Slide5_img4.png"
// import Slide5_img5 from "../SlideImages/Slide5_img5.png"
// import Slide5_img6 from "../SlideImages/Slide5_img6.png"
// import Slide5_img7 from "../SlideImages/Slide5_img7.png"

// import Slide_dot1 from "../SlideImages/Slide_dot1.png"
// import Slide_dot2 from "../SlideImages/Slide_dot2.png"

// import { NavLink as Link } from 'react-router-dom';



// export default function Slide5() {
//     return (
//         <div className='slide5-outer'>
//             <div className='slide-inner'>
//                 <div className='slide5-top'>
//                     <div className='slide5-top-left'>
//                         <img className="slide5-img2" src={Slide5_img2} />
//                         <img className="slide5-img3" src={Slide5_img3} />
//                     </div>
//                     <div className='slide5-top-right'>
//                         <img className="slide5-img4" src={Slide5_img4} />
//                         <img className="slide5-img5" src={Slide5_img5} />
//                     </div>
//                     <div className='slide5-top-right'>
//                         <img className="slide5-img6" src={Slide5_img6} />
//                         <img className="slide5-img7" src={Slide5_img7} />
//                     </div>
//                 </div>
//                 <img className='slide5-dot2' src={Slide_dot2} />
//             </div>
//             <div className='slide5-bottom'>
//                 <Stack direction="column" spacing={5} width="40%" display="flex" justifyConent="left">
//                     <div className='slide5-title'>People Services</div>
//                     <Link to="/People Services">
//                         <Button backgroundColor="rgba(43, 127, 255, 1)"
//                             borderRadius="0.5rem" color="white"
//                             fontWeight="400"
//                             width="fit-content"
//                             padding="2%"
//                         >
//                             <div className='firstpage-btn-text'>
//                                 Know More
//                             </div>
//                         </Button>
//                     </Link>
//                 </Stack>

//                 <img className="slide5-img1" src={Slide5_img1} />
//             </div>
//         </div >
//     )
// }


import React from 'react';
import "../Slide5/Slide5.css"
import { Button, Stack } from '@chakra-ui/react';
import Slide5_img1 from "../../../../Services/People/PeopleImages/People_img1.png"

import Slide_dot1 from "../SlideImages/Slide_dot1.png"
import Slide_dot2 from "../SlideImages/Slide_dot2.png"

import { NavLink as Link } from 'react-router-dom';



export default function Slide5() {
    return (
        <div className='slide5-outer'>
            <div className='slide5-bottom'>
                <img className='slide5-dot2' src={Slide_dot1} />
                <Stack direction="column" spacing={5} width="45%" display="flex" justifyConent="left" height="100%">
                    <div className='slide5-title'>People Services</div>
                    <Link to="/People Services">
                        {/* <Button backgroundColor="rgba(43, 127, 255, 1)"
                            borderRadius="0.5rem" color="white"
                            fontWeight="400"
                            width="fit-content"
                            padding="2%"
                        >
                            <div className='firstpage-btn-text'>
                                Know More
                            </div>
                        </Button> */}
                        <div className='slide5-know-more'>
                            Know More
                        </div>
                    </Link>
                </Stack>

                <img className="slide5-img1" src={Slide5_img1} />
                <img className='slide5-dot2' src={Slide_dot2} />
            </div>
        </div >
    )
}