import {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function useHandleMessageAlert(message) {

const [showAlert, setShowAlert] = useState(true);
const navigate = useNavigate();

console.log(message);


useEffect(() => {
  console.log('entrando el useEffect');
  if (message) {
    setShowAlert(true); 
  }
}, [message]); 

    const  handleMessageAlert = () => {
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
          case 'Actividad actualizada correctamente':
            navigate('/owner');
            break;
          case 'Actividad eliminada correctamente':
            navigate('/');
            break;
          case 'Alojamiento actualizado correctamente':
            navigate('/owner');
            break;
    
          default:
            console.log('Mensaje no manejado:', message);
            break;
          
        }
      };
      

      return {showAlert, handleMessageAlert}
}

export default useHandleMessageAlert;