import React from 'react'
import "./Expert.css"
import Expert_img2 from "./ExpertImages/Expert_img2.png"
import { Button, ButtonGroup, Divider, Stack, Text, Input, Textarea } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'

import { useMediaQuery } from '@chakra-ui/react'

export default function Expert() {
    const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)')
    const [isLargerThan800] = useMediaQuery('(min-width:800px)')
    const [isLargerThan600] = useMediaQuery('(min-width:600px)')
    return (
        <div className='expert-outer'>
            <img className="expert-bgimg" src={Expert_img2} />
            <Stack marginTop="5%" marginBottom="5%" padding="0%" display="flex" alignItems="center" borderRadius="0.5rem" width={isLargerThan1200 ? "60%" : "70%"} height="fit-content" paddingBottom="5%" direction="column" spacing={10} backgroundColor="rgba(64, 123, 255, 0.63)">
                <FormControl width="80%" marginTop="2%">
                    <FormLabel color="white" fontSize={isLargerThan800?"80%":"40%"}>Name</FormLabel>
                    <Input backgroundColor="white" />
                </FormControl>

                <Stack direction={isLargerThan800 ? "row" : "column"} width="80%" marginTop="2%">
                    <FormControl width="100%">
                        <FormLabel color="white" fontSize={isLargerThan800?"80%":"40%"}>Phone</FormLabel>
                        <Input type='number' backgroundColor="white" />
                    </FormControl>
                    <FormControl width="100%" >
                        <FormLabel color="white" fontSize={isLargerThan800?"80%":"40%"}>Location</FormLabel>
                        <Input backgroundColor="white" />
                    </FormControl>
                </Stack>
                <FormControl width="80%" marginTop="2%">
                    <FormLabel color="white" fontSize={isLargerThan800?"80%":"40%"}>What service would you like to provide ?</FormLabel>
                    <Textarea backgroundColor="white" />
                </FormControl>

                <Button color="white" marginTop="2%" width="30%" backgroundColor="#407BFF" borderRadius="0.5rem" padding={isLargerThan600?"3%":"5%"} fontWeight="400"><div className="expert-btn-text">Get In Touch</div></Button>
            </Stack>
        </div >
    )
}
