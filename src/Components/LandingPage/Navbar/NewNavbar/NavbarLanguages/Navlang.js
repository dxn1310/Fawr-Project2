import { Stack } from '@chakra-ui/react'
import React from 'react'
import "./Navlang.css"

import { TfiWorld } from "react-icons/tfi";
import { MDBIcon } from 'mdb-react-ui-kit';
import { Flag, Segment } from 'semantic-ui-react'

import Flag1 from "./NavlangImages/Flag1.png"
import Flag2 from "./NavlangImages/Flag2.png"
import Flag3 from "./NavlangImages/Flag3.png"
import Flag4 from "./NavlangImages/Flag4.png"
import Flag5 from "./NavlangImages/Flag5.png"
import Flag6 from "./NavlangImages/Flag6.png"
import Flag7 from "./NavlangImages/Flag7.png"
import Flag8 from "./NavlangImages/Flag8.png"
import Flag9 from "./NavlangImages/Flag9.png"
import Flag10 from "./NavlangImages/Flag10.png"


export default function Navlang({ lang, langImg, langName, setLang, setLangImg, setLangName, onClose }) {
    return (
        <div className='navlang-outer'>
            <div className='navlang-title'>
                Select the region and language
            </div>
            <div className='navlang-inner'>

                <div className='navlang-inner-item'>
                    <div className='navlang-inner-title'>
                        Global
                    </div>
                    <Stack direction="column" spacing={5} marginTop="5%">
                        <Stack direction="row" spacing={2} display="flex" alignItems="center" onClick={(e) => { setLangImg("world"); setLang("English"); setLangName("Global"); onClose() }} cursor="pointer">
                            <TfiWorld />
                            <div className='navlang-language'>Global <label className="navlang-language" style={{ color: "rgba(0, 0, 0, 0.6)", cursor: "pointer" }}>(English)</label></div>
                        </Stack>
                    </Stack>
                </div>

                <div style={{ width: "0.1rem", backgroundColor: "black", marginLeft: "3%", marginRight: "5%" }} />



                <div className='navlang-inner-item'>
                    <div className='navlang-inner-title'>
                        Indian
                    </div>
                    <Stack direction="column" spacing={5} marginTop="5%">
                        <Stack direction="row" spacing={2} display="flex" alignItems="center" onClick={(e) => { setLangImg(Flag1); setLang("Hindi"); setLangName("India"); onClose() }} cursor="pointer">
                            <img src={Flag1} />
                            <div className='navlang-language' >Brazil <label className="navlang-language" style={{ color: "rgba(0, 0, 0, 0.6)", cursor: "pointer" }}>(Português)</label></div>
                        </Stack>
                        <Stack direction="row" spacing={2} display="flex" alignItems="center" onClick={(e) => { setLangImg(Flag2); setLang("Española"); setLangName("India"); onClose() }} cursor="pointer">
                            <img src={Flag2} />
                            <div className='navlang-language'>Argentina <label className="navlang-language" style={{ color: "rgba(0, 0, 0, 0.6)", cursor: "pointer" }}>(Española)</label></div>
                        </Stack>
                        <Stack direction="row" spacing={2} display="flex" alignItems="center" onClick={(e) => { setLangImg(Flag3); setLang("Española"); setLangName("Colombia"); onClose() }} cursor="pointer">
                            <img src={Flag3} />
                            <div className='navlang-language'>Colombia <label className="navlang-language" style={{ color: "rgba(0, 0, 0, 0.6)", cursor: "pointer" }}>(Española)</label></div>
                        </Stack>
                    </Stack>
                </div>

                <div style={{ width: "0.1rem", backgroundColor: "black", marginLeft: "3%", marginRight: "5%" }} />



                <div className='navlang-inner-item'>
                    <div className='navlang-inner-title'>
                        North & South America
                    </div>
                    <Stack direction="column" spacing={5} marginTop="5%">
                        <Stack direction="row" spacing={2} display="flex" alignItems="center" onClick={(e) => { setLangImg(Flag1); setLang("Português"); setLangName("Brazil"); onClose() }} cursor="pointer">
                            <img src={Flag1} />
                            <div className='navlang-language' >Brazil <label className="navlang-language" style={{ color: "rgba(0, 0, 0, 0.6)", cursor: "pointer" }}>(Português)</label></div>
                        </Stack>
                        <Stack direction="row" spacing={2} display="flex" alignItems="center" onClick={(e) => { setLangImg(Flag2); setLang("Española"); setLangName("Argentina"); onClose() }} cursor="pointer">
                            <img src={Flag2} />
                            <div className='navlang-language'>Argentina <label className="navlang-language" style={{ color: "rgba(0, 0, 0, 0.6)", cursor: "pointer" }}>(Española)</label></div>
                        </Stack>
                        <Stack direction="row" spacing={2} display="flex" alignItems="center" onClick={(e) => { setLangImg(Flag3); setLang("Española"); setLangName("Colombia"); onClose() }} cursor="pointer">
                            <img src={Flag3} />
                            <div className='navlang-language'>Colombia <label className="navlang-language" style={{ color: "rgba(0, 0, 0, 0.6)", cursor: "pointer" }}>(Española)</label></div>
                        </Stack>
                    </Stack>
                </div>

                <div style={{ width: "0.1rem", backgroundColor: "black", marginLeft: "3%", marginRight: "5%" }} />

                <div className='navlang-inner-item'>
                    <div className='navlang-inner-title'>
                        Europe, MiddleEast & Africa
                    </div>
                    <Stack direction="column" spacing={5} marginTop="5%" >
                        <Stack direction="row" spacing={2} display="flex" alignItems="center" onClick={(e) => { setLangImg(Flag4); setLang("Français"); setLangName("France"); onClose() }} cursor="pointer">
                            <img src={Flag4} />
                            <div className='navlang-language'>France <label className="navlang-language" style={{ color: "rgba(0, 0, 0, 0.6)", cursor: "pointer" }}>(Français)</label></div>
                        </Stack>
                        <Stack direction="row" spacing={2} display="flex" alignItems="center" onClick={(e) => { setLangImg(Flag5); setLang("Italiano"); setLangName("Italy"); onClose() }} cursor="pointer">
                            <img src={Flag5} />
                            <div className='navlang-language'>Italy <label className="navlang-language" style={{ color: "rgba(0, 0, 0, 0.6)", cursor: "pointer" }}>(Italiano) </label></div>
                        </Stack>
                        <Stack direction="row" spacing={2} display="flex" alignItems="center" onClick={(e) => { setLangImg(Flag6); setLang("Española"); setLangName("Spain"); onClose() }} cursor="pointer">
                            <img src={Flag6} />
                            <div className='navlang-language'>Spain <label className="navlang-language" style={{ color: "rgba(0, 0, 0, 0.6)", cursor: "pointer" }}>(Española)</label></div>
                        </Stack>
                        <Stack direction="row" spacing={2} display="flex" alignItems="center" onClick={(e) => { setLangImg(Flag7); setLang("русский"); setLangName("Russia"); onClose() }} cursor="pointer">
                            <img src={Flag7} />
                            <div className='navlang-language'>Russia <label className="navlang-language" style={{ color: "rgba(0, 0, 0, 0.6)", cursor: "pointer" }}>(русский)</label></div>
                        </Stack>
                    </Stack>
                </div>

                <div style={{ width: "0.1rem", backgroundColor: "black", marginLeft: "3%", marginRight: "5%" }} />

                <div className='navlang-inner-item'>
                    <div className='navlang-inner-title'>
                        Asia & Austrila
                    </div>
                    <Stack direction="column" spacing={5} marginTop="5%">
                        <Stack direction="row" spacing={2} display="flex" alignItems="center" onClick={(e) => { setLangImg(Flag8); setLang("中国人"); setLangName("China"); onClose() }} cursor="pointer">
                            <img src={Flag8} />
                            <div className='navlang-language'>China <label className="navlang-language" style={{ color: "rgba(0, 0, 0, 0.6)", _hover: { color: "red" }, cursor: "pointer" }}  >(中国人)</label></div>
                        </Stack>
                        <Stack direction="row" spacing={2} display="flex" alignItems="center" onClick={(e) => { setLangImg(Flag9); setLang("한국인"); setLangName("Korea"); onClose() }} cursor="pointer">
                            <img src={Flag9} />
                            <div className='navlang-language'>Korea <label className="navlang-language" style={{ color: "rgba(0, 0, 0, 0.6)", cursor: "pointer" }}>(한국인)</label></div>
                        </Stack>
                        <Stack direction="row" spacing={2} display="flex" alignItems="center" onClick={(e) => { setLangImg(Flag10); setLang("日本"); setLangName("Japan"); onClose() }} cursor="pointer">
                            <img src={Flag10} />
                            <div className='navlang-language'>Japan <label className="navlang-language" style={{ color: "rgba(0, 0, 0, 0.6)", cursor: "pointer" }}>(日本)</label></div>
                        </Stack>
                    </Stack>
                </div>

            </div>
        </div >
    )
}
