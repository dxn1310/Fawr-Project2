import React from 'react'
import "./Status.css"
import Status_img1 from "./StatusImages/Status_img1.png"
import Status_img2 from "./StatusImages/Status_img2.png"


export default function Status({ statusData, lineData }) {
    return (
        <div className='status-outer'>
            {/* <div className='status-circle'></div> */}
            {
                statusData[0] === "0" ?  <div className='status-circle'></div> :
                    statusData[0] === "1" ? <div className='status-circle-inprocess'>
                        <div className='status-circle-inprocess-inner'>
                            <img className="status-circle-img" style={{ width: "80%" }} src={Status_img1} />
                        </div>
                    </div> :
                        <div className='status-circle'>
                            <div className='status-circle-inprocess-inner'>
                                <img className="status-circle-img" style={{ width: "100%" }} src={Status_img2} />
                            </div>
                        </div>
            }

            {
                lineData[0] === "0" ? <div className='status-line' style={{ backgroundColor: "#EBEBEB" }}></div> :
                    <div className='status-line' style={{ backgroundColor: "rgba(29, 172, 253, 1)" }}></div>
            }

            {
                statusData[1] === "0" ? <div className='status-circle'></div> :
                    statusData[1] === "1" ? <div className='status-circle-inprocess'>
                        <div className='status-circle-inprocess-inner'>
                            <img className="status-circle-img" style={{ width: "80%" }} src={Status_img1} />
                        </div>
                    </div> :
                        <div className='status-circle'>
                            <div className='status-circle-inprocess-inner'>
                                <img className="status-circle-img" style={{ width: "100%" }} src={Status_img2} />
                            </div>
                        </div>
            }

            {
                lineData[1] === "0" ? <div className='status-line' style={{ backgroundColor: "#EBEBEB" }}></div> :
                    <div className='status-line' style={{ backgroundColor: "rgba(29, 172, 253, 1)" }}></div>
            }


            {
                statusData[2] === "0" ?  <div className='status-circle'></div> :
                    statusData[2] === "1" ? <div className='status-circle-inprocess'>
                        <div className='status-circle-inprocess-inner'>
                            <img className="status-circle-img" style={{ width: "80%" }} src={Status_img1} />
                        </div>
                    </div> :
                        <div className='status-circle'>
                            <div className='status-circle-inprocess-inner'>
                                <img className="status-circle-img" style={{ width: "100%" }} src={Status_img2} />
                            </div>
                        </div>
            }

            {
                lineData[2] === "0" ? <div className='status-line' style={{ backgroundColor: "#EBEBEB" }}></div> :
                    <div className='status-line' style={{ backgroundColor: "rgba(29, 172, 253, 1)" }}></div>
            }


            {
                statusData[3] === "0" ?  <div className='status-circle'></div> :
                    statusData[3] === "1" ? <div className='status-circle-inprocess'>
                        <div className='status-circle-inprocess-inner'>
                            <img className="status-circle-img" style={{ width: "80%" }} src={Status_img1} />
                        </div>
                    </div> :
                        <div className='status-circle'>
                            <div className='status-circle-inprocess-inner'>
                                <img className="status-circle-img" style={{ width: "100%" }} src={Status_img2} />
                            </div>
                        </div>
            }

            {
                lineData[3] === "0" ? <div className='status-line' style={{ backgroundColor: "#EBEBEB" }}></div> :
                    <div className='status-line' style={{ backgroundColor: "rgba(29, 172, 253, 1)" }}></div>
            }

            {
                statusData[4] === "0" ? <div className='status-circle'></div> :
                    statusData[4] === "1" ? <div className='status-circle-inprocess'>
                        <div className='status-circle-inprocess-inner'>
                            <img className="status-circle-img" style={{ width: "80%" }} src={Status_img1} />
                        </div>
                    </div> :
                        <div className='status-circle'>
                            <div className='status-circle-inprocess-inner'>
                                <img className="status-circle-img" style={{ width: "100%" }} src={Status_img2} />
                            </div>
                        </div>
            }









            {/* <div className='status-circle'></div>
            <div className='status-line' style={{ backgroundColor: "rgba(29, 172, 253, 1)" }}></div>

            <div className='status-circle'></div>
            <div className='status-line' style={{ backgroundColor: "rgba(29, 172, 253, 1)" }}></div> */}


            {/* <div className='status-line'></div> */}




        </div>
    )
}
