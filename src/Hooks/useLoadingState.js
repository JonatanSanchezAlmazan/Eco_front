import { useContext } from 'react';
import { UsersContext } from '../Providers/Users/UsersProvider';
import { ActivitiesContext } from '../Providers/Activities/ActivitiesProvider';
import { AccommodationsContext } from '../Providers/Accommodations/AccommodationsProvider';
import { ReservationsContext } from '../Providers/Reservations/Reservations';

function useLoadingState() {
  const { state: userState } = useContext(UsersContext);
  const { state: activitiesState } = useContext(ActivitiesContext);
  const { state: accommodationsState } = useContext(AccommodationsContext);
  const { state: reservationsState } = useContext(ReservationsContext);

  const loading = userState.isLoading || activitiesState.isLoading || accommodationsState.isLoading || reservationsState.isLoading;

  return { loading };
}

export default useLoadingState;
