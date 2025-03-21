import { NavLink } from 'react-router-dom';
import './Explore.css';

const Explore = () => {
  return (
    <div className="explore">
      <nav>
        <ul>
          <li className="explore__section">
            <NavLink className="explore__section--link" to="/ecoturismo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Ecoturismo
            </NavLink>
            <p>Aprende sobre el turismo sostenible y su impacto positivo</p>
          </li>
          <li className="explore__section">
            <NavLink className="explore__section--link" to="/activities" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Actividades
            </NavLink>
            <p>Explora una variedad de actividades ecologicas</p>
          </li>
          <li className="explore__section">
            <NavLink className="explore__section--link" to="/accommodations" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Alojamientos
            </NavLink>
            <p>Descrube alojamientos sostenibles y únicos</p>
          </li>
          <li className="explore__section">
            <NavLink className="explore__section--link" to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Sobre Nosotros
            </NavLink>
            <p>Conoce nuestra misión y visión sobre un turismo sostenible</p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Explore;
