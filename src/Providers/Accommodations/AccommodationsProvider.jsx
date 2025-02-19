import { createContext, useReducer } from 'react';
import { accommodationReducer, initialAccommodationsState } from '../../Redecuers/Accommodations/accommodations.reducer';

export const AccommodationsContext = createContext();

export function AccommodationsProvider({ children }) {
  const [state, dispatch] = useReducer(accommodationReducer, initialAccommodationsState);
  return <AccommodationsContext.Provider value={{ state, dispatch }}>{children}</AccommodationsContext.Provider>;
}

export default AccommodationsProvider;
