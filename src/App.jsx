import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Hero from './pages/Hero';
import About from './pages/About'
import HowWeHelp from './pages/HowWeHelp'
import Process from './pages/Process'
import Consultation from './pages/Consultation'
import Pricing from './pages/Pricing'
import Portfolio from './pages/Portfolio'
import FAQ from './pages/FAQ'
import TechStack from './pages/TechStack'
import Preloader from './components/Preloader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />  {/* Rendering the Navbar component */}
      <main>
        <h1>Welcome to iPyramidTech</h1>
        <p>Explore our services and offerings.</p>
      </main>
      <Preloader/>
      <Hero />
      <About />
      <HowWeHelp/>
      <Process/>
      <Consultation/>
      <Pricing/>
      <Portfolio/>
      <FAQ/>
      <TechStack/>
      <Footer />
    </>
  )
}

export default App
