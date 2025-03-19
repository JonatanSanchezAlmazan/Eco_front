import OwnerReservationCard from '../OwnerReservationCard/OwnerReservationCard';
import './ReservationsSwitcher.css';

const ReservationsSwitcher = ({ reservations, step, setStep }) => {
  return (
    <article className="reservations__switcher">
      <h3>Reservas</h3>
      <p>Gestiona las reservas de tus alojamientos y actividades</p>
      <div>
        <p className={step === 'Alojamientos' ? 'active' : 'no--active'} onClick={() => setStep('Alojamientos')}>
          Alojamientos
        </p>
        <p className={step === 'Actividades' ? 'active' : 'no--active'} onClick={() => setStep('Actividades')}>
          Actividades
        </p>
      </div>
      <div className="content__ownerReservations">{reservations.length > 0 ? reservations.map((item, index) => <OwnerReservationCard key={index} item={item} />) : <p>No hay reservas disponibles</p>}</div>
    </article>
  );
};

export default ReservationsSwitcher;
