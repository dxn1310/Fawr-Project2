import React from 'react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function DarkLightMode({ mode }) {
    return (
        <div>
            {
                mode === "light" ? <MoonIcon onClick={handleMode} /> : <SunIcon onClick={handleMode} />
            }
        </div>
    )
}
