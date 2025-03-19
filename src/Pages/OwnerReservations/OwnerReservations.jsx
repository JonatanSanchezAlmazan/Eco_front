import { useContext, useEffect, useState } from 'react';

import './OwnerReservations.css';
import BookingCalendar from '../../Components/BookingCalendar/BookingCalendar';
import useUserState from '../../Hooks/useUserState';
import { ReservationsContext } from '../../Providers/Reservations/Reservations';
import { getReservations } from '../../Reducers/Reservations/reservations.action';
import OwnerReservationCard from '../../Components/OwnerReservationCard/OwnerReservationCard';
import ReservationsSwitcher from '../../Components/ReservationsSwitcher/ReservationsSwitcher';

const OwnerReservations = () => {
  const [step, setStep] = useState('Alojamientos');
  const { state, dispatch } = useContext(ReservationsContext);
  const { state: userState } = useUserState();
  const [reservations, setReservations] = useState([]);

  async function getReservationsOwner() {
    await getReservations({ dispatch, id: userState.user._id });
  }

  useEffect(() => {
    getReservationsOwner();
  }, []);

  useEffect(() => {
    if (step === 'Alojamientos') {
      setReservations(state.reservations?.filter((r) => r.accommodationId) || []);
    } else if (step === 'Actividades') {
      setReservations(state.reservations?.filter((r) => r.activityId) || []);
    }
  }, [step, state.reservations]);

  return (
    <main>
      <div className="content ownerReservation">
        <h2 className="h2">Gestión de reservas</h2>
        <div>
          <ReservationsSwitcher step={step} setStep={setStep} reservations={reservations} />
          <BookingCalendar reservations={reservations} />
        </div>
      </div>
    </main>
  );
};

export default OwnerReservations;
