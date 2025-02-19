import { useContext, useEffect } from 'react';
import ActivityAcommodationCard from '../../Components/ActivityAcommodationCard/ActivityAcommodationCard';
import './Owner.css';
import { UsersContext } from '../../Providers/Users/UsersProvider';
import { ActivitiesContext } from '../../Providers/Activities/ActivitiesProvider';
import { AccommodationsContext } from '../../Providers/Accommodations/AccommodationsProvider';
import { getAccommodationsByAuthor } from '../../Redecuers/Accommodations/accommodations.action';
import Loading from '../../Components/Loading/Loading';
import { getActivitiesByAuthor } from '../../Redecuers/Activities/activities.action';

const Owner = () => {
  const { state: userState } = useContext(UsersContext);
  const { user } = userState;
  const { state: activitiesState, dispatch: activitiesDispatch } = useContext(ActivitiesContext);
  const { state: accommodationState, dispatch: accommodationsDispatch } = useContext(AccommodationsContext);
  const { isLoading } = accommodationState;

  useEffect(() => {
    async function getAccommodations() {
      getAccommodationsByAuthor({ dispatch: accommodationsDispatch, id: user._id });
    }

    async function getActivities() {
      getActivitiesByAuthor({ dispatch: activitiesDispatch, id: user._id });
    }

    getAccommodations();
    getActivities();
  }, []);

  return (
    <main>
      {isLoading && <Loading />}
      <h2 className="owner__heading">Panel de Control</h2>
      <section className="owner__section">
        <ActivityAcommodationCard src="/icons/casa-ecologica.webp" title="Actividades" item={activitiesState.activities} btnText="Crear Actividad" />
        <ActivityAcommodationCard src="/icons/montana.webp" title="Alojamientos" item={accommodationState.accommodations} btnText="Crear Alojamiento" />
      </section>
    </main>
  );
};

export default Owner;
