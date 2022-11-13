import React from 'react'
import { Routes, Route } from 'react-router-dom'
import FinalScreen from '../pages/FinalScreen'
import Questions from '../pages/Questions'
import Settings from '../pages/Settings'

function Navigation() {
    return (
        <Routes>
            <Route path='/' element={<Settings />} />
            <Route path='/questions' element={<Questions />} />
            <Route path='/score' element={<FinalScreen />} />
        </Routes>
    )
}

export default Navigation