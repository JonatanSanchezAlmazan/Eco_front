import { useContext } from 'react';
import { ReservationsContext } from '../Providers/Reservations/Reservations';

function useReservationState() {
  const { state, dispatch } = useContext(ReservationsContext);

  return { state, dispatch };
}

export default useReservationState;
