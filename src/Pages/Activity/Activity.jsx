import './Activity.css';
import GallerySlider from '../../Components/GallerySlider/GallerySlider';
import useActivitiesState from '../../Hooks/useActivitiesState';
import CardReservation from '../../Components/CardReservation/CardReservation';
import Alert from '../../Components/Alert/Alert';
import useReservationState from '../../Hooks/useReservationsState';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Activity = () => {
  const navigate = useNavigate();
  const { state } = useActivitiesState();
  const { state: reservationState } = useReservationState();
  const { activity } = state;

  useEffect(() => {
    if (!activity) {
      navigate('/activities');
    }
  }, [activity, navigate]);

  return (
    <main>
      {reservationState.message && <Alert message={reservationState.message} />}
      {reservationState.error && <Alert message={reservationState.error} />}
      {activity && (
        <div className="activity">
          <h3>{activity.name}</h3>
          <div className="activity__ubi">
            <img src="/icons/ubicacion.webp" alt="icono ubicacion" width={100} height={100} />
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
              <div className="activity__detail--hour">
                <div>
                  <img src="/icons/reloj.webp" alt="icono reloj" width={100} height={100} />
                  <p>
                    Duración: <span>{activity.duration}</span>
                  </p>
                </div>
                <div>
                  <img src="/icons/reloj.webp" alt="icono reloj" width={100} height={100} />
                  <p>
                    Horario: <span>{activity.schedule}</span>
                  </p>
                </div>
                <div>
                  <img src="/icons/reloj.webp" alt="icono reloj" width={100} height={100} />
                  <p>
                    Inicio: <span>{activity.startTime}</span>
                  </p>
                </div>
              </div>
              <div>
                <img src="/icons/hoja.webp" alt="icono hoja" height={100} width={100} />
                <p>
                  Dificultad: <span>{activity.difficulty}</span>
                </p>
              </div>
              <div>
                <img src="/icons/grupo.webp" alt="icono grupo" height={100} width={100} />
                <p>
                  Tamaño del grupo: <span>{`Máximo ${activity.capacity <= 1 ? `${activity.capacity} persona` : `${activity.capacity} personas`}`}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="activity__include">
            <h4>Qué incluye</h4>
            {activity.includes.map((item, index) => (
              <li key={index}>
                <p>- {item?.charAt(0).toUpperCase() + item?.slice(1).toLowerCase()}</p>
              </li>
            ))}
          </div>
          <div className="activity__requirements">
            <h4>Requisitos</h4>
            {activity.requirements.map((item, index) => (
              <li key={index}>
                <p>- {item?.charAt(0).toUpperCase() + item?.slice(1).toLowerCase()}</p>
              </li>
            ))}
          </div>
          <div className="activity__contact">
            <p>
              Email: <span>{activity.contactDetails.email}</span>
            </p>
            <p>
              Teléfono: <span>{activity.contactDetails.phone}</span>
            </p>
          </div>
          <CardReservation type="activity" title="Reserva tu actividad" text="Asegura tu lugar en esta experiencia única" item={activity} />
        </div>
      )}
    </main>
  );
};

export default Activity;
