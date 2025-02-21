import { useContext } from 'react';
import './Activity.css';

import { ActivitiesContext } from '../../Providers/Activities/ActivitiesProvider';
import GallerySlider from '../../Components/GallerySlider/GallerySlider';
import Button from '../../Components/Button/Button';

const Activity = () => {
  const { state } = useContext(ActivitiesContext);
  const { activity } = state;

  return (
    <main>
      {activity && (
        <div className="activity">
          <h2>{activity.name}</h2>
          <div className="activity__ubi">
            <img src="/icons/ubicacion.webp" alt="icono ubicacion" />
            <p>{activity.ubi}</p>
          </div>
          <GallerySlider images={activity.images} name={activity.name} />
          <div className="activity__description">
            <h3>Descripción</h3>
            <p>{activity.description.charAt(0).toUpperCase() + activity.description.slice(1).toLowerCase()}</p>
          </div>
          <h3>Detalles de la actividad</h3>
          <div className="activity__detail">
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
          <div className="activity__include">
            <h3>Qué incluye</h3>
            {activity.includes.map((item, index) => (
              <li key={index}>- {item?.charAt(0).toUpperCase() + item?.slice(1).toLowerCase()}</li>
            ))}
          </div>
          <div className="activity__requirements">
            <h3>Requisitos</h3>
            {activity.requirements.map((item, index) => (
              <li key={index}>- {item?.charAt(0).toUpperCase() + item?.slice(1).toLowerCase()}</li>
            ))}
          </div>
          <div className="activity__reservations">
            <h3>Reserva tu actividad</h3>
            <p>Asegura tu lugar en esta expreiencia única</p>
            <p className="activity__reservations--price">
              {`${activity.price}€`}
              <span>/persona</span>
            </p>
            <Button text="Reservar ahora" />
          </div>
        </div>
      )}
    </main>
  );
};

export default Activity;
