import { useContext } from 'react';
import { UsersContext } from '../Providers/Users/UsersProvider';
import { ActivitiesContext } from '../Providers/Activities/ActivitiesProvider';
import { AccommodationsContext } from '../Providers/Accommodations/AccommodationsProvider';

function useLoadingState() {
  const { state: userState } = useContext(UsersContext);
  const { state: activitiesState } = useContext(ActivitiesContext);
  const { state: accommodationsState } = useContext(AccommodationsContext);

  const loading = userState.isLoading || activitiesState.isLoading || accommodationsState.isLoading;

  return { loading };
}

export default useLoadingState;
