import Backend from './Backend'
import Frontend from './Frontend'
import './skills.css'

const Skills = () => {
  return (
    <section id='skills' className="skills section">
        <h2 className="section__title">Habilidades</h2>
        <span className="section__subtitle">
            Mi nivel tecnico
        </span>

        <div className="skills__container container grid">
            <Frontend/>

            <Backend/>
        </div>
    </section>
)
}

export default Skills