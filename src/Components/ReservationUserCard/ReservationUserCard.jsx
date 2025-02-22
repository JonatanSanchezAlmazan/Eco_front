import './ReservationUserCard.css';

const ReservationUserCard = ({ isActivity, item }) => {
  return (
    <div key={item._id} className="reservationCard">
      <div>
        <div>
          <h4>{isActivity ? item.activityId.name : item.accommodationId.name}</h4>
          <p>- {item.typeReservation}</p>
          <p>- {isActivity ? `Hora: ${item.hour}` : `Alojamiento reservado: Del ${item.entryDate} al ${item.exitDate}`}</p>
          <p>{isActivity && `- Día: ${item.day}`}</p>
        </div>
        <div className="reservationCard__button">
          <button>
            <img src="/icons/borrar.webp" alt="icono papelera" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservationUserCard;
