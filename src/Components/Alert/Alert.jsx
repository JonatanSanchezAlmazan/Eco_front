import { useState } from 'react';
import Button from '../Button/Button';
import './Alert.css';

const Alert = ({ error }) => {
  const [showAlert, setShowAlert] = useState(true);

  if (!showAlert || !error) return null;

  return (
    <div className="content__alert">
      <div className="alert">
        <p>{error}</p>
        <Button fnc={() => setShowAlert(false)} text="Aceptar" />
      </div>
    </div>
  );
};

export default Alert;
