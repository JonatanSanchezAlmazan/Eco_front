import ActivityAcommodationCard from '../../Components/ActivityAcommodationCard/ActivityAcommodationCard';
import './Owner.css';
import useActivitiesState from '../../Hooks/useActivitiesState';
import useAccommodationState from '../../Hooks/useAccommodationsState';
import { useEffect } from 'react';
import { getAccommodationsByAuthor } from '../../Reducers/Accommodations/accommodations.action';
import useUserState from '../../Hooks/useUserState';
import { getActivitiesByAuthor } from '../../Reducers/Activities/activities.action';

const Owner = () => {
  console.log('me renderizo');
  
  const { state: activitiesState, dispatch:activitiesDispatch } = useActivitiesState();
  const { state: accommodationState, dispatch: accommodationsDispatch } = useAccommodationState();
  const {state} = useUserState();
  const {user} = state
  
  

  async function getActivities() {
    await getActivitiesByAuthor({dispatch:activitiesDispatch ,id:user._id})
  }

  async function getAccommodations(params) {
    await getAccommodationsByAuthor({dispatch: accommodationsDispatch, id:user._id})
  }


  useEffect(() => {
    getActivities();
    getAccommodations();
  },[])
  
  

  return (
    <main>
      <h2 className="owner__heading">Panel de Control</h2>
      <section className="owner__section">
        <ActivityAcommodationCard src="/icons/casa-ecologica.webp" title="Actividades" item={activitiesState.activities} btnText="Crear Actividad" />
        <ActivityAcommodationCard src="/icons/montana.webp" title="Alojamientos" item={accommodationState.accommodations} btnText="Crear Alojamiento" />
      </section>
    </main>
  );
};

export default Owner;
