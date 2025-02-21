import { createContext, useReducer } from 'react';
import { activitiesReducer, initialActivitiesState } from '../../Reducers/Activities/activities.reducer';

export const ActivitiesContext = createContext();

export function ActivitiesProvider({ children }) {
  const [state, dispatch] = useReducer(activitiesReducer, initialActivitiesState);
  return <ActivitiesContext.Provider value={{ state, dispatch }}>{children}</ActivitiesContext.Provider>;
}

export default ActivitiesProvider;
