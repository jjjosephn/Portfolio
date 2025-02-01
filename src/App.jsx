import { BrowserRouter } from 'react-router-dom'
import About from './components/About'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Tech from './components/Tech'
import Contact from './components/Contact'
import Stars from './components/canvas/Stars'
import Entrepreneur from './components/Entrepreneur'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-10 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Projects />
        <Entrepreneur />
      </div>
      <div className='relative z-0 bg-primary'>
        <Contact />
        <Stars />
      </div>
    </BrowserRouter>
  )
}

export default App
