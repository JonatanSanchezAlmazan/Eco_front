import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import './Alert.css';

const Alert = ({ message }) => {
  const [showAlert, setShowAlert] = useState(true);
  const navigate = useNavigate();

  function handleMessageAlert() {
    setShowAlert(false);
    switch (message) {
      case 'Internal Server Error':
        navigate('/');
        break;
      case 'Email o contraseña incorrectos':
        navigate('/login');
        break;
      case 'Usuario ya existente, pruebe con otras credenciales':
        navigate('/register');
        break;
      case 'Usuario actualizado correctamente':
        navigate('/profile');
        break;

      case 'Actividad creada correctamente':
        navigate('/owner');
        break;
      case 'Alojamiento creado correctamente':
        navigate('/owner');
        break;

      default:
        console.log('Mensaje no manejado:', message);
        break;
    }
  }

  if (!showAlert || !message) return null;

  return (
    <div className="content__alert">
      <div className="alert">
        <p>{message}</p>
        <Button fnc={() => handleMessageAlert()} text="Aceptar" />
      </div>
    </div>
  );
};

export default Alert;
