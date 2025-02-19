import './UserBookingCard.css';

const UserBookingCard = ({ user }) => {
  const { reservations } = user;

  return (
    <div className="userBookingCard">
      <h3>Mis Reservas</h3>
      <p>Gestiona tus reservas actuales</p>
      {reservations?.map((item) => {
        const isActivity = item.typeReservation === 'Actividad';

        return (
          <div key={item._id} className="reservationCard">
            <div>
              <div>
                <h4>{isActivity ? item.activityId.name : item.accommodationId.name}</h4>
                <p>{item.typeReservation}</p>
                <p>{isActivity ? `Hora: ${item.hour}` : `Alojamiento reservado: Del ${item.entryDate} al ${item.exitDate}`}</p>
                <p>{isActivity && `Día: ${item.day}`}</p>
              </div>
              <div className="reservationCard__button">
                <button>
                  <img src="/icons/borrar.webp" alt="icono papelera" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
      {reservations?.length <= 0 && <p>No tienes reservas todavía</p>}
    </div>
  );
};

export default UserBookingCard;
