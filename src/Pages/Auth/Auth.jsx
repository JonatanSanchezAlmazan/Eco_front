import { useLocation, useNavigate } from 'react-router-dom';
import './Auth.css';
import FormAuth from '../../Components/FormAuth/FormAuth';
import { fieldsLogin, fieldsRegister } from '../../utils/fields';
import { useContext } from 'react';
import { UsersContext } from '../../Providers/Users/UsersProvider';
import Loading from '../../Components/Loading/Loading';
import { login, register } from '../../Redecuers/Users/users.action';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === '/login';
  const { state, dispatch } = useContext(UsersContext);
  const { isLoading } = state;
  const navigate = useNavigate();

  const handleSubmitLogin = async (body) => {
    await login({ dispatch, body, navigate });
  };

  const handleSubmitRegister = async (data) => {
    await register({ dispatch, data, navigate });
  };
  return (
    <main className="auth">
      {isLogin ? <FormAuth key="login" isLogin={true} fields={fieldsLogin} btnText="Iniciar Sesión" onSubmit={handleSubmitLogin} className="form__auth" /> : <FormAuth key="register" fields={fieldsRegister} btnText="Registrarse" onSubmit={handleSubmitRegister} className="form__auth" />}
      {isLoading && <Loading />}
    </main>
  );
};

export default Auth;
