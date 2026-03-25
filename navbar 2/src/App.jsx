import React from 'react'
import './App.css'    
import { HeroSection } from './HeroSection'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
    </div>
  )
}

export default App
