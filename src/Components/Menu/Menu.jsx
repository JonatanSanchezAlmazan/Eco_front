import { NavLink, useNavigate } from 'react-router-dom';
import './Menu.css';
import { logout } from '../../Reducers/Users/users.action';
import useUserState from '../../Hooks/useUserState';

const Menu = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useUserState();
  const { isLogin, user } = state;

  return (
    <div className="menu">
      <nav>
        <ul>
          <li>
            {isLogin && (
              <div className="image__user">
                <img onClick={() => navigate('/profile')} src={user.image} alt="image user" width={44} height={44} />
              </div>
            )}
          </li>
          <li>
            {user.isOwner === true && (
              <NavLink className="owner" to="/owner" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Gestión
              </NavLink>
            )}
          </li>
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
          <li>
            <NavLink onClick={() => isLogin && logout({ dispatch })} className="new__session" to="/login">
              {!isLogin ? 'Iniciar Sesión' : 'Cerrar Sesión'}
            </NavLink>
          </li>
          <li>
            {!isLogin && (
              <NavLink className="register" to="/register" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
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
