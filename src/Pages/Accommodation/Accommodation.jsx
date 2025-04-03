import './Accommodation.css';
import GallerySlider from '../../Components/GallerySlider/GallerySlider';
import CardReservation from '../../Components/CardReservation/CardReservation';
import Alert from '../../Components/Alert/Alert';
import useReservationState from '../../Hooks/useReservationsState';
import useAccommodationState from '../../Hooks/useAccommodationsState';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Accommodation = () => {
  const navigate = useNavigate();
  const { state } = useAccommodationState();
  const { accommodation } = state;
  const { state: reservationState } = useReservationState();

  useEffect(() => {
    if (!accommodation) {
      navigate('/accommodations');
    }
  }, [accommodation, navigate]);

  return (
    <main>
      {reservationState.message && <Alert message={reservationState.message} />}
      {reservationState.error && <Alert message={reservationState.error} />}
      {accommodation && (
        <div className="accommodation">
          <h2>{accommodation.name}</h2>
          <div className="accommodation__ubi">
            <img src="/icons/ubicacion.webp" alt="icono ubicacion" width={100} height={100} />
            <p>{accommodation.ubi}</p>
          </div>
          <GallerySlider images={accommodation.images} name={accommodation.name} />
          <div className="accommodation__description">
            <h3>Descripción</h3>
            <p>{accommodation.description}</p>
          </div>
          <div className="accommodation__rules">
            <h3>Normas</h3>
            {accommodation.rules.map((item, index) => (
              <li key={index}>
                <p>- {item?.charAt(0).toUpperCase() + item?.slice(1).toLowerCase()}</p>
              </li>
            ))}
          </div>
          <div className="accommodation__services">
            <h3>Servicios</h3>
            {accommodation.services.map((item, index) => (
              <li key={index}>
                <p>- {item?.charAt(0).toUpperCase() + item?.slice(1).toLowerCase()}</p>
              </li>
            ))}
          </div>
          <div className="accommodation__details">
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
