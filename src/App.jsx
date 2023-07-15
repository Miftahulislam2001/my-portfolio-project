
import Aos from 'aos'
import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Portfolio from './components/Portfolio/Portfolio'
import Services from './components/Services/Services'
import Testimonials from './components/Testimonials/Testimonials'
import { useEffect } from 'react'



function App() {
  useEffect(() => {
    Aos.init(
        {
            duration:400,
        }
    )
}, [])

  return (
    <>
      
      <Header></Header>
      <Nav></Nav>
      <About></About>
      <Experience></Experience>     
      <Services></Services>
      <Portfolio></Portfolio>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
      
    </>
  )
}

export default App
