import { NavLink } from 'react-router-dom';
import './Explore.css';

const Explore = () => {
  return (
    <div className="explore">
      <nav>
        <ul>
          <li className="explore__section">
            <NavLink className="explore__section--link" to="/ecoturismo">
              Ecoturismo
            </NavLink>
            <p>Aprende sobre el turismo sostenible y su impacto positivo</p>
          </li>
          <li className="explore__section">
            <NavLink className="explore__section--link" to="/activities">
              Actividades
            </NavLink>
            <p>Explora una variedad de actividades ecologicas</p>
          </li>
          <li className="explore__section">
            <NavLink className="explore__section--link" to="/accommodations">
              Alojamientos
            </NavLink>
            <p>Descrube alojamientos sostenibles y únicos</p>
          </li>
          <li className="explore__section">
            <NavLink className="explore__section--link" to="/about">
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
