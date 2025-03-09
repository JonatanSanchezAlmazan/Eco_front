import './Activity.css';
import GallerySlider from '../../Components/GallerySlider/GallerySlider';
import useActivitiesState from '../../Hooks/useActivitiesState';
import CardReservation from '../../Components/CardReservation/CardReservation';
import { useContext } from 'react';
import { ReservationsContext } from '../../Providers/Reservations/Reservations';
import Alert from '../../Components/Alert/Alert';

const Activity = () => {
  const { state } = useActivitiesState();
  const { state: reservationState } = useContext(ReservationsContext);

  const { activity } = state;

  return (
    <main>
      {reservationState.message && <Alert message={reservationState.message} />}
      {reservationState.error && <Alert message={reservationState.error} />}
      {activity && (
        <div className="activity">
          <h3>{activity.name}</h3>
          <div className="activity__ubi">
            <img src="/icons/ubicacion.webp" alt="icono ubicacion" />
            <p>{activity.ubi}</p>
          </div>
          <GallerySlider images={activity.images} name={activity.name} />
          <div className="activity__description">
            <h4>Descripción</h4>
            <p>{activity.description.charAt(0).toUpperCase() + activity.description.slice(1).toLowerCase()}</p>
          </div>

          <div className="activity__detail">
            <h4>Detalles de la actividad</h4>
            <div>
              <p>
                Email: <span>{accommodation.contactDetails.email}</span>
              </p>
              <p>
                Teléfono: <span>{accommodation.contactDetails.phone}</span>
              </p>
              <div className="activity__detail--hour">
                <img src="/icons/reloj.webp" alt="icono reloj" />
                <p>
                  Duración: <span>{activity.duration}</span>
                </p>

                <p>
                  Horario: <span>{activity.schedule}</span>
                </p>

                <p>
                  Inicio: <span>{activity.startTime}</span>
                </p>
              </div>
              <div>
                <img src="/icons/hoja.webp" alt="icono hoja" />
                <p>
                  Dificultad: <span>{activity.difficulty}</span>
                </p>
              </div>
              <div>
                <img src="/icons/grupo.webp" alt="icono grupo" />
                <p>
                  Tamaño del grupo: <span>{`Máximo ${activity.capacity <= 1 ? `${activity.capacity} persona` : `${activity.capacity} personas`}`}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="activity__include">
            <h4>Qué incluye</h4>
            {activity.includes.map((item, index) => (
              <li key={index}>- {item?.charAt(0).toUpperCase() + item?.slice(1).toLowerCase()}</li>
            ))}
          </div>
          <div className="activity__requirements">
            <h4>Requisitos</h4>
            {activity.requirements.map((item, index) => (
              <li key={index}>- {item?.charAt(0).toUpperCase() + item?.slice(1).toLowerCase()}</li>
            ))}
          </div>
          <CardReservation type="activity" title="Reserva tu actividad" text="Asegura tu lugar en esta experiencia única" item={activity} />
        </div>
      )}
    </main>
  );
};

export default Activity;
