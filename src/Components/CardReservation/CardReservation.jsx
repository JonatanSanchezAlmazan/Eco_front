import { useForm } from 'react-hook-form';
import Button from '../Button/Button';
import './CardReservation.css';
import useUserState from '../../Hooks/useUserState';
import { newActivityReservation } from '../../Reducers/Reservations/reservations.action';
import { useContext } from 'react';
import { ReservationsContext } from '../../Providers/Reservations/Reservations';

const CardReservation = ({ type, item, title, text }) => {
  const {state:reservationState, dispatch:reservationDispatch} = useContext(ReservationsContext)
  const {register, handleSubmit, formState:{errors}} = useForm();
  const {state} = useUserState();
 
  async function onSubmit(data) {    
    data.userId = state.user._id;
    if(type === 'accommodation'){
      data.accommodationId = item._id;
      data.entryDate = data.entryDate;
      data.exitDate = data.exitDate;
      data.typeReservation = 'Alojamiento'
    }else{
      data.activityId = item._id;
      data.entryDate = data.entryDate;
      data.hour = item.startTime;
      data.typeReservation = 'Actividad'
      await newActivityReservation({dispatch:reservationDispatch, data})
    }
    
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="reservation">
      <h4>{title}</h4>
      <p>{text}</p>
      <p className="reservation__price">
        {`${item.price}€`}
        <span>/persona</span>
      </p>
      {type === 'accommodation' ? <label htmlFor='entryDate'>Día de entrada</label> : <label htmlFor='entryDate'>Escoge tu día</label>}
      <input type="date" id='entryDate' {...register('entryDate', {required:'La fecha es requerida'})} />
      {errors.entryDate && <p className='form__error'>{errors.entryDate.message}</p>}
      {type === 'accommodation' && (
        <>
          <label htmlFor='exitDate'>Día de salida</label>
          <input type="date" id='exitDate' {...register('exitDate', {required:'La fecha de salida es requerida'})} />
          {errors.exitDate && <p className='form__error'>{errors.exitDate.message}</p>}
        </>
      )}

      <Button type='submit' text="Reservar ahora" />
    </form>
  );
};

export default CardReservation;
