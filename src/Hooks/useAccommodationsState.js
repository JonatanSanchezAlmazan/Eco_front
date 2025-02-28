import { useContext } from 'react';
import { AccommodationsContext } from '../Providers/Accommodations/AccommodationsProvider';

function useAccommodationState() {
  const { state, dispatch } = useContext(AccommodationsContext);
  return { state, dispatch };
}

export default useAccommodationState;
