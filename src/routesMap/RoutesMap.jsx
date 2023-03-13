import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/about/About'
import Education from '../pages/education/Education'
import Home from '../pages/home/Home'
import Skills from '../pages/skills/Skills'

function RoutesMap() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre-mi' element={<About />} />
        <Route path='/educacion' element={<Education />} />
        <Route path='/habilidades' element={<Skills />} />
    </Routes>
  )
}

export default RoutesMap