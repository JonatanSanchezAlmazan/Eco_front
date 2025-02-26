import Button from '../Button/Button';
import './Alert.css';
import useHandleMessageAlert from '../../Hooks/useHandleMessageAlert';

const Alert = ({ message }) => {
 const {showAlert, handleMessageAlert} = useHandleMessageAlert(message);
 
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
