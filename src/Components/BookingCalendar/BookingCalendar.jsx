import MyCalendar from '../Calendar/MyCalendar';
import './BookingCalendar.css';

const BookingCalendar = ({ reservations }) => {
  return (
    <article className="bookingCalendar">
      <div>
        <h3>Calendario de reservas</h3>
        <p>Visita general de tus reservas</p>
        <MyCalendar reservations={reservations} />
      </div>
      <div className="bookingCalendar__leyend">
        <h4>Leyenda:</h4>
        <div>
          <p>Alojameintos:</p>
          <div className="lAccommodation"></div>
        </div>
        <div>
          <p>Actividades:</p>
          <div className="lActivity"></div>
        </div>
      </div>
    </article>
  );
};

export default BookingCalendar;
