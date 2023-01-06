import React, { useState } from 'react'
import "./Slot.css"
import Status from '../Status/Status'

import { Stack, Button } from '@chakra-ui/react'
import { NavLink as Link } from 'react-router-dom'

export default function Slot() {
    const current = new Date();
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    const [date, setDate] = useState(current.getDate())
    const [day, setDay] = useState(days[current.getDay() % 7 - 1])
    const [daySelected, setDaySelected] = useState(0)

    const addDate = () => {
        setDate((date + 1) % 31)
    }

    const weekInfo = [
        {
            day: days[0],
            date: current.getDate()
        },

        {
            day: days[1],
            date: current.getDate() + 1
        },

        {
            day: days[2],
            date: current.getDate() + 3
        },
        {
            day: days[3],
            date: current.getDate() + 4
        },
        {
            day: days[4],
            date: current.getDate() + 4
        },
        {
            day: days[5],
            date: current.getDate() + 5
        },
        {
            day: days[6],
            date: current.getDate() + 6
        },
    ]

    const timeInfo = ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"]
    console.log(weekInfo)


    const statusData = ["2", "2", "1", "0", "0"]
    const lineData = ["1", "1", "0", "0"]

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    return (
        <div className='slot-outer'>
            <Status statusData={statusData} lineData={lineData} />
            <div className='slot-inner'>
                <div className="slot-title" style={{ fontSize: "2rem", fontWeight: "500", }}>
                    Select the day of service
                </div>
                <div className='slot-grid-day'>
                    {
                        weekInfo.map((week, index) => {
                            return <Stack direction="column" spacing={3} backgroundColor={daySelected === 0 ? "#E5E5E5" : "#E5E5E5"} width="10%" borderRadius="1rem" padding="1%" onClick={(e) => setDaySelected(1)}>
                                <div className="slot-text" style={{
                                    fontSize: "1.5rem", fontWeight: "500", width: "100%", display: "flex", justifyContent: "center"
                                }}>
                                    {week.day}
                                </div>
                                <div className="slot-text" style={{ fontSize: "1.5rem", fontWeight: "500", width: "100%", display: "flex", justifyContent: "center" }}>
                                    {week.date}

                                </div>
                            </Stack>
                        })
                    }
                </div>
                <div className="slot-title" style={{ fontSize: "2rem", fontWeight: "500", marginTop: "5%" }}>
                    Select start time of the service
                </div>
                <div className='slot-grid-time'>
                    {
                        timeInfo.map((time) => {
                            return <div className='slot-grid-time-element'>
                                {time}
                            </div>
                        })
                    }

                </div>
                <Link to="/People Services/Booking/Payment">
                    <div className='slot-button' style={{ width: "100%" }}>
                        <Button width="100%"
                            // padding="2%"
                            backgroundColor=" #2B7FFF"
                            color="white"
                            fontWeight="400">
                            <div className='slot-btn-text' style={{ fontSize: "1.25rem" }}>
                                Proceed to Payment
                            </div>
                        </Button>
                    </div>
                </Link>
            </div >
        </div >
    )
}
