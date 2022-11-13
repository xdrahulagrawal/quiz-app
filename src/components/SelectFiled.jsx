import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'

function SelectFiled({ label }) {
    const [value, setValue] = useState('');

    const _handleChange = () => {

    }
    return (
        <Box mt={3} width="100%">
            <FormControl fullWidth size='small'>
                <InputLabel>{label}</InputLabel>
                <Select value={value} label={label} onChange={_handleChange}>
                    <MenuItem>Option1</MenuItem>
                    <MenuItem>Option2</MenuItem>
                    <MenuItem>Option3</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default SelectFiled