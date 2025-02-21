import { useContext } from 'react';
import './Accommodation.css';
import { AccommodationsContext } from '../../Providers/Accommodations/AccommodationsProvider';
import Loading from '../../Components/Loading/Loading';
import GallerySlider from '../../Components/GallerySlider/GallerySlider';
import Button from '../../Components/Button/Button';

const Accommodation = () => {
  const { state } = useContext(AccommodationsContext);
  const { accommodation } = state;

  return (
    <main>
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
          <div className="accommodation__reservations">
            <h3>Reserva tu estancia</h3>
            <p>Selecciona las fechas y realiza tu reserva</p>
            <p className="accommodation__reservations--price">
              {`${accommodation.price}€`}
              <span>/persona</span>
            </p>
            <input type="date" />
            <Button text="Reservar ahora" />
          </div>
        </div>
      )}
    </main>
  );
};

export default Accommodation;
