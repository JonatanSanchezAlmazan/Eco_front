import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import './Alert.css';
import { useNavigate } from 'react-router-dom';

const Alert = ({ message }) => {
  const [showAlert, setShowAlert] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setShowAlert(true);
  }, [message]);

  function handleClose() {
    setShowAlert(false);
    switch (message) {
      case 'Usuario eliminado correctamente':
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
