import { createContext, useReducer } from 'react';
import { initialReservationsState, reservationsReducer } from '../../Reducers/Reservations/reservations.reducer';


export const ReservationsContext = createContext();

export function ReservationsProvider({ children }) {
  const [state, dispatch] = useReducer(reservationsReducer, initialReservationsState);
  return <ReservationsContext.Provider value={{ state, dispatch }}>{children}</ReservationsContext.Provider>;
}

export default ReservationsProvider;