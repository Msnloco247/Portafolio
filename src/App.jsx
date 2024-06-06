import Home from './components/home/Home'
import Header from './components/header/Header'
import './App.css'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Qualification from './components/qualification/Qualification'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Scrollup  from './components/scrollup/Scrollup'
import Work from './components/work/Work'

function App() {

  return (
    <>
    <Header/>
    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Qualification/>
      <Work/>
      <Contact/>
    </main>

      <Footer/>
      <Scrollup/>
    </>
  )
}

export default App
