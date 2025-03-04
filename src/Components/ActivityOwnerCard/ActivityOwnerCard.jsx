import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import './ActivityOwnerCard.css';
import useActivitiesState from '../../Hooks/useActivitiesState';
import EditableItemCard from '../EditableItemCard/EditableItemCard';
import Alert from '../Alert/Alert';

const ActivityOwnerCard = () => {
    const { state, dispatch } = useActivitiesState();
    const {activities} = state
    const navigate = useNavigate();
   

    function navigateRegisterActivity() {
      navigate('/registerActivity');
    }

  return (
    <div className="activityOwnerCard">
    {state.error && <Alert message={state.error} />}
    <div className="activityOwnerCard__heading">
      <img src='/icons/casa-ecologica.webp' alt="icono" />
      <h3>Actividades</h3>
    </div>
    <p>{`Gestiona tus actividades sostenibles`}</p>
    {activities.length <= 0 && <p>No tienes actividades disponibles</p>}
    {activities.map((activity) => (
        <EditableItemCard item={activity} navigate={navigate} dispatch={dispatch} type = 'Activity'/>
    ))}

    <Button fnc={() => navigateRegisterActivity()} text='Crear Actividad' />
  </div>
  )
}

export default ActivityOwnerCard