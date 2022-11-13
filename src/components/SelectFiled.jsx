import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'

function SelectFiled({ label, options }) {
    const [value, setValue] = useState('');

    const _handleChange = (e) => {
        const { value } = e.target;
        setValue(value)
    }
    return (
        <Box mt={3} width="100%">
            <FormControl fullWidth size='small'>
                <InputLabel>{label}</InputLabel>
                <Select value={value} label={label} onChange={_handleChange}>
                    {options.map(({ id, name }) => (
                        <MenuItem value={id} key={id}>{name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}

export default SelectFiled