import { NavLink, useNavigate } from 'react-router-dom';
import './Menu.css';
import { useContext } from 'react';
import { UsersContext } from '../../Providers/Users/UsersProvider';
import { logout } from '../../Reducers/Users/users.action';

const Menu = () => {
  const { state, dispatch } = useContext(UsersContext);
  const { isLogin, user } = state;
  const navigate = useNavigate();
  //!Todo cerrar sesion

  return (
    <div className="menu">
      <nav>
        <ul>
          <h2>Ecoturismo</h2>
          <li>
            {isLogin && (
              <div className="image__user">
                <img onClick={() => navigate('/profile')} src={user.image} alt="image user" />
              </div>
            )}
          </li>
          <li>
            {user.isOwner === true && (
              <NavLink className="owner" to="/owner">
                Gestión
              </NavLink>
            )}
          </li>
          <li>
            <NavLink to="/ecoturismo">Ecoturismo</NavLink>
          </li>
          <li>
            <NavLink to="/activities">Actividades</NavLink>
          </li>
          <li>
            <NavLink to="/accommodations">Alojamientos</NavLink>
          </li>
          <li>
            <NavLink to="/about">Sobre Nosotros</NavLink>
          </li>
          <li>
            <NavLink onClick={() => isLogin && logout({ dispatch })} className="new__session" to="/login">
              {!isLogin ? 'Iniciar Sesión' : 'Cerrar Sesión'}
            </NavLink>
          </li>
          <li>
            {!isLogin && (
              <NavLink className="register" to="/register">
                Registrarse
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
