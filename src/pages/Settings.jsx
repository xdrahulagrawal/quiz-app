import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import SelectFiled from '../components/SelectFiled'
import TextFiledComp from '../components/TextFiledComp'

function Settings() {
    return (
        <Box>
            <Typography variant='h3' fontWeight='bold'> Quiz App</Typography>
            <Typography variant='h5' fontWeight='semi-bold'> Setting</Typography>
            <SelectFiled label='Category' />
            <SelectFiled label='Difficulty' />
            <SelectFiled label='Type' />
            <TextFiledComp/>
            <Box width='100%' mt={3}>
                <Button fullWidth variant='contained'>Get Started</Button>
            </Box>
        </Box>
    )
}

export default Settings