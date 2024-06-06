import { useState } from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) =>{
        setToggleState(index);
    }
  return (
    <section className="qualification section">
        <h2 className="section__title">Calificaciones</h2>
        <span className="section__subtitle">Mi viaje personal</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div onClick={() => toggleTab(1)} className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                    <i className='uil uil-graduation-cap qualification__icon'></i>
                    Educacion
                </div>
     
                <div onClick={() => toggleTab(2)} className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                    <i className='uil uil-briefcase-alt qualification__icon'></i>
                     Experiencia
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content "}>
                    <div className="qualification__data">
                        <div>
                            <h3 className='qualification__title'>Desarrollador de Sofware</h3>
                            <span className="qualification__subtitle">Instituto tecnologico de las Americas</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calendat-alt'></i>
                                2022 - Present
                            </div>
                        </div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className='qualification__title'>React Course - Redux,Nextjs </h3>
                            <span className="qualification__subtitle">Udemy - Academind by Maximilian Schwarzmüller</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calendat-alt'></i>
                                2022
                            </div>
                        </div>

                    </div>

                    <div className="qualification__data">
                        
              
                        <div>
                            <h3 className='qualification__title'>C# Course</h3>
                            <span className="qualification__subtitle">Udemy - by Denis Panuja</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calendat-alt'></i>
                                2021 - Present
                            </div>
                        </div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content "}>
                    <div className="qualification__data">
                        <div>
                            <h3 className='qualification__title'>Contribuciones GitHub</h3>
                            <span className="qualification__subtitle">GitHub</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calendat-alt'></i>
                            </div>
                        </div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className='qualification__title'>Web Developer</h3>
                            <span className="qualification__subtitle">Kiron</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calendat-alt'></i>
                                2022 - 2023
                            </div>
                        </div>

                    </div>

                   
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification