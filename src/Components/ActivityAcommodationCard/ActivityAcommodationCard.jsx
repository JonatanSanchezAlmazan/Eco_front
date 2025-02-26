import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import './ActivityAcommodationCard.css';
import { useContext, useState } from 'react';
import { ActivitiesContext } from '../../Providers/Activities/ActivitiesProvider';
import { deleteActivity } from '../../Reducers/Activities/activities.action';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import { AccommodationsContext } from '../../Providers/Accommodations/AccommodationsProvider';
import { deleteAccommodation, getAccommodation } from '../../Reducers/Accommodations/accommodations.action';


const ActivityAcommodationCard = ({ src, title, item, btnText }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();
  const { dispatch: activitiesDispatch } = useContext(ActivitiesContext);
  const { dispatch: accommodationsDispatch } = useContext(AccommodationsContext);
  

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
            <img onClick={() => (title === 'Actividades' ? navigate(`/updateActivity/${i._id}`) : navigate(`/updateAccommodation/${i._id}`))} src="/icons/lapiz.webp" alt="icono editar" />
            <img onClick={() => setShowConfirm(!showConfirm)} src="/icons/borrar.webp" alt="icono borrar" />
          </div>
          {showConfirm && <ConfirmModal text={`Seguro que quieres eliminar ${i.name}`} setShow={setShowConfirm} remove={() => (title === 'Actividades' ? deleteActivity({ dispatch: activitiesDispatch, id: i._id }) : deleteAccommodation({dispatch:accommodationsDispatch, id:i._id}))} />}
        </div>
      ))}
      <Button fnc={() => (title === 'Actividades' ? navigateRegisterActivity() : navigateRegisterAccomodation())} text={btnText} />
    </div>
  );
};

export default ActivityAcommodationCard;
