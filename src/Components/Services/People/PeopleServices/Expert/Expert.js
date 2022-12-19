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

export default function Expert() {
    return (
        <div className='expert-outer'>
            <img className="expert-bgimg" src={Expert_img2} />
            <Stack marginTop="5%" marginBottom="5%" padding="2%" display="flex" alignItems="center" borderRadius="1rem" width="50%" height="fit-content" paddingBottom="5%" direction="column" spacing={10} backgroundColor="rgba(64, 123, 255, 0.63)">
                <FormControl width="80%" marginTop="5%">
                    <FormLabel color="white" fontSize="80%">Name</FormLabel>
                    <Input backgroundColor="white" />
                </FormControl>

                <Stack direction="row" width="80%" marginTop="5%">
                    <FormControl width="80%">
                        <FormLabel color="white" fontSize="80%">Phone</FormLabel>
                        <Input type='number' backgroundColor="white" />
                    </FormControl>
                    <FormControl width="80%" >
                        <FormLabel color="white" fontSize="80%">Location</FormLabel>
                        <Input backgroundColor="white" />
                    </FormControl>
                </Stack>
                <FormControl width="80%" marginTop="5%">
                    <FormLabel color="white" fontSize="80%">What service would you like to provide ?</FormLabel>
                    <Textarea backgroundColor="white" />
                </FormControl>

                <Button color="white" marginTop="5%" width="40%" backgroundColor="#407BFF" borderRadius="1rem" padding="4%" fontSize="80%" fontWeight="400">Get In Touch</Button>
            </Stack>
        </div >
    )
}
