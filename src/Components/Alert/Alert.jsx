import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import './Alert.css';
import { useNavigate } from 'react-router-dom';
import useUserState from '../../Hooks/useUserState';
import { logout } from '../../Reducers/Users/users.action';

const Alert = ({ message }) => {
  const [showAlert, setShowAlert] = useState(true);
  const navigate = useNavigate();
  const { dispatch } = useUserState();
  async function logOut() {
    await logout({ dispatch });
  }

  useEffect(() => {
    setShowAlert(true);
  }, [message]);

  function handleClose() {
    setShowAlert(false);
    switch (message) {
      case 'Usuario eliminado correctamente':
        navigate('/');
        break;
      case 'Alojamiento creado correctamente':
        navigate('/owner');
        break;
      case 'Actividad creada correctamente':
        navigate('/owner');
        break;
      case 'Parece que tu sesión ha caducado. Vuelve a iniciar sesión para continuar.':
        logOut();
        navigate('/');
        break;

      default:
        break;
    }
  }

  if (!showAlert) return null;

  return (
    <div className="content__alert">
      <div className="alert">
        <p>{message}</p>
        <Button fnc={handleClose} text="Aceptar" />
      </div>
    </div>
  );
};

export default Alert;
