import './OwnerReservationCard.css';

const OwnerReservationCard = ({ item }) => {
  return (
    <div className="owner__reservation--card">
      {item.accommodationId ? <h5>{item.accommodationId.name}</h5> : <h5>{item.activityId.name}</h5>}
      <p>{item.userId.name}</p>
      {item.accommodationId ? <p>Check-in: {item.entryDate}</p> : <p>Día: {item.entryDate}</p>}
      {item.accommodationId ? <p>Check-out: {item.exitDate}</p> : <p>Hora: {item.hour}</p>}
    </div>
  );
};

export default OwnerReservationCard;
