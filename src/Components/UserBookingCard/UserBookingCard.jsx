import ReservationUserCard from '../ReservationUserCard/ReservationUserCard';
import './UserBookingCard.css';

const UserBookingCard = ({ user }) => {
  const { reservations } = user;

  return (
    <div className="userBookingCard">
      <h3>Mis Reservas</h3>
      <p>Gestiona tus reservas actuales</p>
      {reservations?.map((item) => {
        const isActivity = item.typeReservation === 'Actividad';

        return <ReservationUserCard isActivity={isActivity} item={item} />;
      })}
      {reservations?.length <= 0 && <p>No tienes reservas todavía</p>}
    </div>
  );
};

export default UserBookingCard;
