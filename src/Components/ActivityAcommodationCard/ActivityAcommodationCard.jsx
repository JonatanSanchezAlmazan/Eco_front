import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import './ActivityAcommodationCard.css';

const ActivityAcommodationCard = ({ src, title, item, btnText }) => {
  const navigate = useNavigate();

  function navigateRegisterActivity() {
    navigate('/registerActivity');
  }
  function navigateRegisterAccomodation() {
    navigate('/registerAccommodation');
  }
  return (
    <div className="activityAcommodationCard">
      <div className="activityAcommodationCard__heading">
        <img src={src} alt="icono" />
        <h3>{title}</h3>
      </div>
      <p>{`Gestiona tus ${title} sostenibles`}</p>
      {item.length <= 0 && <p>No tienes {title} disponibles</p>}
      {item.map((i, index) => (
        <div className="activityAcommodationCard__content" key={index}>
          <p>{i.name}</p>
          <div>
            <img onClick={() => (title === 'Actividades' ? navigate(`/updateActivity/${i._id}`) : '')} src="/icons/lapiz.webp" alt="icono editar" />
            <img src="/icons/borrar.webp" alt="icono borrar" />
          </div>
        </div>
      ))}
      <Button fnc={() => (title === 'Actividades' ? navigateRegisterActivity() : navigateRegisterAccomodation())} text={btnText} />
    </div>
  );
};

export default ActivityAcommodationCard;
