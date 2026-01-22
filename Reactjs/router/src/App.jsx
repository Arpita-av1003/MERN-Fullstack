import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Arpita from './components/Arpita'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Changed to lowercase for consistency */}
        <Route path="/about/arpita" element={<Arpita />} />
        
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App;
