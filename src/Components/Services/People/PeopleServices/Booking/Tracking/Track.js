import React, { useState } from 'react'
import '../Tracking/Track.css'
import { NavLink as Link } from 'react-router-dom'
import { Input, Stack, Button } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { Divider, Center } from '@chakra-ui/react'

export default function Track() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    const [application, setApplication] = useState("")
    const [applicationSearch, setApplicationSearch] = useState("")

    const [appl, setAppl] = useState("no")
    const [intv, setIntv] = useState("no")
    const [doc, setDoc] = useState("no")
    const [offer, setOffer] = useState("no")
    const [hired, setHired] = useState("no")

    console.log(application)
    const handleSearch = () => {
        // setApplicationSearch(application)
        // console.log(applicationSearch);

        if (application.length === 0) {
            setAppl("no");
            setIntv("no");
            setDoc("no");
            setOffer("no");
            setHired("no");
        }
        for (const app of TrackData) {
            if (app.application_id === application) {
                setAppl(app.application_form);
                setIntv(app.interview);
                setDoc(app.document_upload);
                setOffer(app.offer_initiation);
                setHired(app.hire);
            }
        }
    }

    const TrackData = [
        {
            application_id: "R673001488",
            application_form: "yes",
            interview: "yes",
            document_upload: "inprocess",
            offer_initiation: "no",
            hire: "no",
        },
        {
            application_id: "R373901798",
            application_form: "yes",
            interview: "inprocess",
            document_upload: "no",
            offer_initiation: "no",
            hire: "no",
        },
        {
            application_id: "R437001508",
            application_form: "yes",
            interview: "yes",
            document_upload: "yes",
            offer_initiation: "yes",
            hire: "yes",
        },

    ]



    return (
        <div className='Track-outer'>
            <div className='Track-inner'>
                <div className='Track-title-outer'>
                    <label className='Track-title'>
                        Track your application
                    </label>
                </div>
                <div className='Track-inputarea'>
                    <Stack spacing={0} direction="row">
                        <Input onChange={(e) => setApplication(e.target.value)} height="4rem" value={application} border="3px solid black" borderTopRightRadius="0" borderBottomRightRadius="0" fontSize="1.6rem" fontWeight="400" borderRadius="0.6em" placeholder='Enter Application No' />
                        <Button onClick={handleSearch} height="4rem" border="3px solid black" width="20%" borderTopLeftRadius="0" borderBottomLeftRadius="0" fontSize="1.6rem" fontWeight="400" borderRadius="0.6em" backgroundColor="#F9E164">Search</Button>
                    </Stack>
                </div>



                <div className='Track-circles-outer'>
                    <div className='Track-circle-outer'>
                        {
                            appl === "no" ? <div className='Track-circle2'></div> : appl === "yes" ? <div className='Track-circle'>
                                <CheckIcon color="white" width="2rem" height="2rem" />
                            </div> : <div className='Track-circle1'>
                                <div className='Track-dot-outer'>
                                    <div className='Track-dot'></div>
                                    <div className='Track-dot'></div>
                                    <div className='Track-dot'></div>
                                </div>
                            </div>
                        }

                        <div className='Track-circle-text-outer'>
                            <label className='Track-circle-text'>
                                Address
                            </label>
                        </div>
                    </div>
                    {
                        appl === "yes" ? <div className='Track-circle-line' style={{ backgroundColor: "rgba(106, 225, 48, 1)" }}></div> : <div className='Track-circle-line'></div>
                    }

                    <div className='Track-circle-outer'>
                        {
                            intv === "no" ? <div className='Track-circle2'></div> : intv === "yes" ? <div className='Track-circle'>
                                <CheckIcon color="white" width="2rem" height="2rem" />
                            </div> : <div className='Track-circle1'>
                                <div className='Track-dot-outer'>
                                    <div className='Track-dot'></div>
                                    <div className='Track-dot'></div>
                                    <div className='Track-dot'></div>
                                </div>
                            </div>
                        }

                        <div className='Track-circle-text-outer'>
                            <label className='Track-circle-text'>
                                Order
                                Summary
                            </label>
                        </div>
                    </div>
                    {
                        intv === "yes" ? <div className='Track-circle-line' style={{ backgroundColor: "rgba(106, 225, 48, 1)" }}></div> : <div className='Track-circle-line'></div>
                    }



                    <div className='Track-circle-outer'>
                        {
                            doc === "no" ? <div className='Track-circle2'></div> : doc === "yes" ? <div className='Track-circle'>
                                <CheckIcon color="white" width="2rem" height="2rem" />
                            </div> : <div className='Track-circle1'>
                                <div className='Track-dot-outer'>
                                    <div className='Track-dot'></div>
                                    <div className='Track-dot'></div>
                                    <div className='Track-dot'></div>
                                </div>
                            </div>
                        }
                        <div className='Track-circle-text-outer'>
                            <label className='Track-circle-text'>
                                Slot Booking
                            </label>
                        </div>
                    </div>
                    {
                        doc === "yes" ? <div className='Track-circle-line' style={{ backgroundColor: "rgba(106, 225, 48, 1)" }}></div> : <div className='Track-circle-line'></div>
                    }



                    <div className='Track-circle-outer'>
                        {
                            offer === "no" ? <div className='Track-circle2'></div> : offer === "yes" ? <div className='Track-circle'>
                                <CheckIcon color="white" width="2rem" height="2rem" />
                            </div> : <div className='Track-circle1'>
                                <div className='Track-dot-outer'>
                                    <div className='Track-dot'></div>
                                    <div className='Track-dot'></div>
                                    <div className='Track-dot'></div>
                                </div>
                            </div>
                        }
                        <div className='Track-circle-text-outer'>
                            <label className='Track-circle-text'>
                                Payment
                            </label>
                        </div>
                    </div>
                    {
                        offer === "yes" ? <div className='Track-circle-line' style={{ backgroundColor: "rgba(106, 225, 48, 1)" }}></div> : <div className='Track-circle-line'></div>
                    }


                    <div className='Track-circle-outer'>
                        {
                            hired === "no" ? <div className='Track-circle2'></div> : hired === "yes" ? <div className='Track-circle'>
                                <CheckIcon color="white" width="2rem" height="2rem" />
                            </div> : <div className='Track-circle1'>
                                <div className='Track-dot-outer'>
                                    <div className='Track-dot'></div>
                                    <div className='Track-dot'></div>
                                    <div className='Track-dot'></div>
                                </div>
                            </div>
                        }
                        <div className='Track-circle-text-outer'>
                            <label className='Track-circle-text'>
                                Order Placed
                            </label>
                        </div>
                    </div>
                </div>



                {/* <div className='Track-content-outer'>
                    <label className='Track-content'>
                        Note :
                    </label>
                    <label className='Track-content'>
                        Please note this is your document verification process, and your document will be verified by our recruitment team
                    </label>
                    <label className='Track-content'>
                        Send your documents to <label className='Track-click1'>fawr.document@gmail.com</label>
                    </label>
                </div> */}

                <div className='Track-return-home-outer'>
                    <label className='Track-return-home'>
                        To return to the home page, <Link to="/"><label className='Track-click'>Click here</label></Link>
                    </label>
                </div>

            </div>

        </div>
    )
}