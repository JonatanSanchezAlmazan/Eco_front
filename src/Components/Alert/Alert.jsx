import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import './Alert.css';

const Alert = ({ message }) => {
  const [showAlert, setShowAlert] = useState(true);

  if (!showAlert) return null;

  return (
    <div className="content__alert">
      <div className="alert">
        <p>{message}</p>
        <Button fnc={() => setShowAlert(false)} text="Aceptar" />
      </div>
    </div>
  );
};

export default Alert;
