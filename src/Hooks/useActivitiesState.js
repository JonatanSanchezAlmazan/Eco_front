import { useContext } from 'react';
import { ActivitiesContext } from '../Providers/Activities/ActivitiesProvider';

function useActivitiesState() {
  const { state, dispatch } = useContext(ActivitiesContext);
  return { state, dispatch };
}

export default useActivitiesState;
