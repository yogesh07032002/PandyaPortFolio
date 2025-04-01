import About from './components/About'
import { Contact } from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Home from './components/Home'
import Navbar from './components/Navbar'
import React from 'react'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
   <>
   <div>
     <Navbar/>
    <Home/>
    <About />
    <Education/>
    <Services/>
    <Testimonials/>
    <Gallery/>
    <Contact/>
    <Footer/>
   </div>
   <Toaster/>
   </>
  )
}

export default App
