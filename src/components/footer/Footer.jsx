import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Abner Aguilar</h1>

            <ul className='footer__list'>
                <li>
                    <a href="#about" className="footer__link">Acerca de mi</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Proyectos</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">Habilidades</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="https://www.instagram.com/abner.11/" className="footer__social-link">
                    <i className="uil uil-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/abner12/" className="footer__social-link">
                <i className="uil uil-dribbble"></i>
                
                </a>
                <a href="https://github.com/Msnloco247" className="footer__social-link">
                <i className="uil uil-github-alt"></i>

                </a>
            </div>

            <span className='footer__copy'>&#169; Abner Aguilar. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer