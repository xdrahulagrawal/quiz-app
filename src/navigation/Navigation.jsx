import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FinalScreen from '../pages/FinalScreen'
import Questions from '../pages/Questions'
import Settings from '../pages/Settings'

function Navigation() {
    return (
        <Container maxWidth='sm'>
            <Box textAlign='center' mt={5}>
                <Routes>
                    <Route path='/' element={<Settings />} />
                    <Route path='/questions' element={<Questions />} />
                    <Route path='/score' element={<FinalScreen />} />
                </Routes>
            </Box>
        </Container>
    )
}

export default Navigation