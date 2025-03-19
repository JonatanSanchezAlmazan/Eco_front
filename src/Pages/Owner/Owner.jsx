import './Owner.css';
import useActivitiesState from '../../Hooks/useActivitiesState';
import useAccommodationState from '../../Hooks/useAccommodationsState';
import { useEffect } from 'react';
import { getAccommodationsByAuthor } from '../../Reducers/Accommodations/accommodations.action';
import useUserState from '../../Hooks/useUserState';
import { getActivitiesByAuthor } from '../../Reducers/Activities/activities.action';
import ActivityOwnerCard from '../../Components/ActivityOwnerCard/ActivityOwnerCard';
import AccommodationOwnerCard from '../../Components/AccommodationOwnerCard/AccommodationOwnerCard';
import Button from '../../Components/Button/Button';
import { useNavigate } from 'react-router-dom';

const Owner = () => {
  const { dispatch: activitiesDispatch } = useActivitiesState();
  const { dispatch: accommodationsDispatch } = useAccommodationState();
  const { state } = useUserState();
  const { user } = state;
  const navigate = useNavigate();

  async function getActivities() {
    await getActivitiesByAuthor({ dispatch: activitiesDispatch, id: user._id });
  }

  async function getAccommodations() {
    await getAccommodationsByAuthor({ dispatch: accommodationsDispatch, id: user._id });
  }

  useEffect(() => {
    getActivities();
    getAccommodations();
  }, []);

  return (
    <main>
      <h2 className="owner__heading">Panel de Control</h2>
      <section className="owner__section">
        <ActivityOwnerCard />
        <AccommodationOwnerCard />
        <Button fnc={() => navigate('/ownerReservations')} text="Gestiona tus reservas" />
      </section>
    </main>
  );
};

export default Owner;
