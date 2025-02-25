import { useContext } from 'react';
import './Activity.css';

import { ActivitiesContext } from '../../Providers/Activities/ActivitiesProvider';
import GallerySlider from '../../Components/GallerySlider/GallerySlider';
import Button from '../../Components/Button/Button';

const Activity = () => {
  const { state } = useContext(ActivitiesContext);
  const { activity } = state;
  console.log(activity);

  return (
    <main>
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
              <div className="activity__detail--hour">
                <img src="/icons/reloj.webp" alt="icono reloj" />
                <p>
                  Duración: <span>{activity.duration}</span>
                </p>

                <p>
                  Horario: <span>{activity.schedule}</span>
                </p>

                <p>
                  Inicio: <span>{activity.startTime.split(':')[0] > 11 ? `${activity.startTime} PM` : `${activity.startTime} AM`}</span>
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
          <div className="activity__reservations">
            <h4>Reserva tu actividad</h4>
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
