import { useContext, useState } from 'react';
import './Header.css';
import Explore from '../Explore/Explore';
import Menu from '../Menu/Menu';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { UsersContext } from '../../Providers/Users/UsersProvider';
import { logout } from '../../Reducers/Users/users.action';

const Header = () => {
  const [isExplore, setIsExplore] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const navigate = useNavigate();
  const { state, dispatch } = useContext(UsersContext);
  const { isLogin, user, isAuth } = state;
  console.log(state);
  

  return (
    <header className="header">
      <div className="header__logo">
        <img onClick={() => navigate('/')} src="/assets/logo.webp" alt="logo" />
      </div>
      <div onClick={() => setIsExplore(!isExplore)} className="header__explore">
        <h5>Descubre</h5>
        {isExplore ? <img src="/icons/flecha_abajo.webp" alt="flecha abajo" /> : <img src="/icons/flecha_arriba.webp" alt="flecha arriba" />}
        {isExplore && <Explore />}
      </div>
      {isLogin && (
        <div className="header__buttons">
          <NavLink onClick={() => isLogin && logout({ dispatch })} className="new__session" to="/login">
            {!isLogin ? 'Iniciar Sesión' : 'Cerrar Sesión'}
          </NavLink>
          {!isLogin && (
            <NavLink className="register" to="/register">
              Registrarse
            </NavLink>
          )}
          {user.isOwner === true && (
            <NavLink className="owner" to="/owner">
              Gestión
            </NavLink>
          )}
          {isLogin && (
            <div className="image__user">
              <img onClick={() => navigate('/profile')} src={user.image} alt="image user" />
            </div>
          )}
        </div>
      )}

      <div onClick={() => setIsMenu(!isMenu)} className="header__menu">
        {isMenu ? <img src="/icons/cerrar.webp" alt="icon close menu" /> : <img src="/icons/menu.webp" alt="icon menu" />}
        {isMenu && <Menu />}
      </div>
    </header>
  );
};

export default Header;
