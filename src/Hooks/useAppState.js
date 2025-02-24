import { useContext } from 'react';
import { UsersContext } from '../Providers/Users/UsersProvider';
import { ActivitiesContext } from '../Providers/Activities/ActivitiesProvider';
import { AccommodationsContext } from '../Providers/Accommodations/AccommodationsProvider';

function useAppState() {
  const { state: userState } = useContext(UsersContext);
  const { state: activitiesState } = useContext(ActivitiesContext);
  const { state: accommodationsState } = useContext(AccommodationsContext);

  const message = userState.error || userState.message || activitiesState.error || accommodationsState.error || activitiesState.message || accommodationsState.message;

  const loading = userState.isLoading || activitiesState.isLoading || accommodationsState.isLoading;

  return { message, loading };
}

export default useAppState;
