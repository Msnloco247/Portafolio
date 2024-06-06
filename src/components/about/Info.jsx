
const Info = () => {
  return (
    <div className="about__info grid">

        <div className="about__box">
            <i className="bx bx-award about__icon"></i>
            <h3 className="about__title">Experiencia</h3>
            <span className="about__subtitle">1 año trabajando</span>
        </div>
        <div className="about__box about__icon">
            <i className="bx bx-briefcase-alt"></i>
            <h3 className="about__title">Completado</h3>
            <span className="about__subtitle">6+ proyectos</span>
        </div>
        <div className="about__box about__icon">
            <i className="bx bx-support"></i>
            <h3 className="about__title">Soporte</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
    </div>
  )
}

export default Info