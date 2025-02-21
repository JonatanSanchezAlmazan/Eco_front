import './FormAuth.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import FormLogin from '../FormLogin/FormLogin';
import { login } from '../../Reducers/Users/users.action';
import { UsersContext } from '../../Providers/Users/UsersProvider';
import FormRegister from '../FormRegister/FormRegister';

const FormAuth = ({ isLogin }) => {
  const { dispatch } = useContext(UsersContext);
  const navigate = useNavigate();

  const handleSubmitLogin = async (body) => {
    await login({ dispatch, body, navigate });
  };

  const handleSubmitRegister = async (data) => {
    await register({ dispatch, data, navigate });
  };

  return (
    <div className="form__auth">
      <h2>Bienvenido a Ecoturismo</h2>
      <p>Inicia sesión o registrate para continuar</p>
      <div className="form__auth--links">
        <NavLink className="form__auth--link" to="/login" type="button">
          Iniciar Sesión
        </NavLink>
        <NavLink className="form__auth--link" to="/register" type="button">
          Registrarse
        </NavLink>
      </div>
      {isLogin ? <FormLogin onSubmit={handleSubmitLogin} /> : <FormRegister onSubmit={handleSubmitRegister} />}
      <p>
        Al registrarte, aceptas nuestros <span>Términos y Condiciones</span> y nuestra <span>Política de Privacidad</span>
      </p>
    </div>
  );
};

export default FormAuth;
