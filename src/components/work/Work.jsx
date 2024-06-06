import Works from "./Works"
import './work.css'

const Work = () => {
  return (
    <section id="portfolio" className="work section">
      <h2 className="section__title">Portafolio</h2>
      <span className="section__subtitle">Mis trabajos mas recientes</span>

      <Works/>

    </section>
  )
}

export default Work