import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Button from '../Button/Button';
import './Alert.css';

const Alert = ({ error }) => {
  const [showAlert, setShowAlert] = useState(true);
  const navigate = useNavigate();  

function handleErrorAlert() {
  setShowAlert(false);
  if(error === 'Internal Server Error'){
    navigate('/');
  }
}

  if (!showAlert || !error) return null;

  return (
    <div className="content__alert">
      <div className="alert">
        <p>{error}</p>
        <Button fnc={() => handleErrorAlert()} text="Aceptar" />
      </div>
    </div>
  );
};

export default Alert;
