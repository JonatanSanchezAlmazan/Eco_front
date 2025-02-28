import Button from '../Button/Button';
import './CardReservation.css';

const CardReservation = ({ type, item, title, text }) => {
  return (
    <div className="reservation">
      <h4>{title}</h4>
      <p>{text}</p>
      <p className="reservation__price">
        {`${item.price}€`}
        <span>/persona</span>
      </p>
      {type === 'accommodation' ? <label>Día de entrada</label> : <label>Escoge tu día</label>}
      <input type="date" />
      {type === 'accommodation' && (
        <>
          <label>Día de salida</label> <input type="date" />
        </>
      )}

      <Button text="Reservar ahora" />
    </div>
  );
};

export default CardReservation;
