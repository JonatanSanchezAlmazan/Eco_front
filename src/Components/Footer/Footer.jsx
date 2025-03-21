import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <section className="footer__logo">
        <img src="/assets/logo.webp" alt="logo" />
        <p>Descubre alojamientos y actividades sostenibles en toda España</p>
      </section>
      <section className="footer__nav">
        <nav>
          <ul>
            <h5>Enlaces Rápidos</h5>
            <li>
              <NavLink to="/ecoturismo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Ecoturismo
              </NavLink>
            </li>
            <li>
              <NavLink to="/activities" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Actividades
              </NavLink>
            </li>
            <li>
              <NavLink to="/accommodations" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Alojamientos
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Sobre Nosotros
              </NavLink>
            </li>
          </ul>
        </nav>
      </section>
      <section className="footer__contact">
        <h5>Contacto</h5>
        <p>Email: info@ecoturismo.com</p>
        <p>Teléfono: 666666666</p>
      </section>
      <section className="footer__follow">
        <h5>Síguenos</h5>
        <div>
          <img src="/icons/twitter.webp" alt="icon twitter" />
          <img src="/icons/instagram.webp" alt="icon instagram" />
          <img src="/icons/facebook.webp" alt="icon facebook" />
        </div>
      </section>
      <p>© 2024 Ecoturismo. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
