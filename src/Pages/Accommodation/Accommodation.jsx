import { useContext } from 'react';
import './Accommodation.css';
import { AccommodationsContext } from '../../Providers/Accommodations/AccommodationsProvider';
import GallerySlider from '../../Components/GallerySlider/GallerySlider';
import CardReservation from '../../Components/CardReservation/CardReservation';
import { ReservationsContext } from '../../Providers/Reservations/Reservations';
import Alert from '../../Components/Alert/Alert';

const Accommodation = () => {
  const { state } = useContext(AccommodationsContext);
  const { accommodation } = state;
  const { state: reservationState } = useContext(ReservationsContext);
  console.log(reservationState);

  return (
    <main>
      {reservationState.message && <Alert message={reservationState.message} />}
      {reservationState.error && <Alert message={reservationState.error} />}
      {accommodation && (
        <div className="accommodation">
          <h2>{accommodation.name}</h2>
          <div className="accommodation__ubi">
            <img src="/icons/ubicacion.webp" alt="icono ubicacion" />
            <p>{accommodation.ubi}</p>
          </div>
          <GallerySlider images={accommodation.images} name={accommodation.name} />
          <div className="accommodation__description">
            <h3>Descripción</h3>
            <p>{accommodation.description}</p>
          </div>
          <div className="accommodation_rules">
            <h3>Normas</h3>
            {accommodation.rules.map((item, index) => (
              <li key={index}>- {item?.charAt(0).toUpperCase() + item?.slice(1).toLowerCase()}</li>
            ))}
          </div>
          <div className="accommodation_services">
            <h3>Servicios</h3>
            {accommodation.services.map((item, index) => (
              <li key={index}>- {item?.charAt(0).toUpperCase() + item?.slice(1).toLowerCase()}</li>
            ))}
          </div>
          <div className="accommodations__details">
            <h3>Detalles Adicionales</h3>
            <p>
              Tipo de alojamiento: <span>{accommodation.type}</span>
            </p>
            <p>
              Capacidad: <span>{accommodation.capacity} personas</span>
            </p>
            <p>
              Tipo de pago: <span>{accommodation.paymentType}</span>
            </p>
            <p>
              Email: <span>{accommodation.contactDetails.email}</span>
            </p>
            <p>
              Teléfono: <span>{accommodation.contactDetails.phone}</span>
            </p>
          </div>
          <CardReservation title="Reserva tu estancia" item={accommodation} text="Selecciona las fechas y realiza tu reserva" type="accommodation" />
        </div>
      )}
    </main>
  );
};

export default Accommodation;
