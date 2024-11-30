import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Feature from './components/Feature'
import Header from './components/Header'
import Footer from './components/Footer'
import Genre from './components/Genre'

function App() {

  return (
    <>
      <Header />
      <div className="container">
        <div className="content-container">
          <Hero />
          <Feature />
        </div>
      </div>
      <Genre></Genre>
      <Footer />
    </>
  )
}

export default App
