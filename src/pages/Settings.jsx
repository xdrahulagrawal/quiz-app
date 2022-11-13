import { Box, Button, CircularProgress, Typography } from '@mui/material'
import React from 'react'
import SelectFiled from '../components/SelectFiled'
import TextFiledComp from '../components/TextFiledComp'
import useAxios from '../hooks/useAxios'


function Settings() {
    const { response, error, loading } = useAxios({ url: 'api_category.php' });
    if (loading) {
        return <Box mt={20}>
            <CircularProgress />
        </Box>
    }

    if (error) {
        return <Box mt={20}>
            <Typography variant='h6' mt={20} color='red'>Something went wrong</Typography>
        </Box>
    }

    return (
        <Box>
            <Typography variant='h3' fontWeight='bold'> Quiz App</Typography>
            <Typography variant='h5' fontWeight='semi-bold'> Setting</Typography>
            <SelectFiled label='Category' />
            <SelectFiled label='Difficulty' />
            <SelectFiled label='Type' />
            <TextFiledComp />
            <Box width='100%' mt={3}>
                <Button fullWidth variant='contained'>Get Started</Button>
            </Box>
        </Box>
    )
}

export default Settings