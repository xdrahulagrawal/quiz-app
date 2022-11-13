import { Box, FormControl, TextField } from '@mui/material'
import React from 'react'

function TextFiledComp() {
    const _handleChange = () => {

    }
    return (
        <Box mt={3} width='100%'>
            <FormControl fullWidth size='size'>
                <TextField
                    onChange={_handleChange}
                    variant='outlined'
                    type='number'
                    size='small'
                    label='Amout of Questions'
                />
            </FormControl>
        </Box>
    )
}

export default TextFiledComp