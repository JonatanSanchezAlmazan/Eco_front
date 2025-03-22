import { useForm } from 'react-hook-form';
import Button from '../Button/Button';
import './Filter.css';
import { filterActivities } from '../../Reducers/Activities/activities.action';
import useActivitiesState from '../../Hooks/useActivitiesState';
import { useNavigate } from 'react-router-dom';
import useAccommodationState from '../../Hooks/useAccommodationsState';
import { filterAccommodations } from '../../Reducers/Accommodations/accommodations.action';

const Filter = () => {
  const navigate = useNavigate();
  const { dispatch: actDispatch } = useActivitiesState();
  const { dispatch: accDispatch } = useAccommodationState();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  async function onSubmit(data) {
    if (data.type === 'Actividad') {
      await filterActivities({ dispatch: actDispatch, data, navigate });
    } else {
      await filterAccommodations({ dispatch: accDispatch, data, navigate });
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="filter">
      <div>
        <label htmlFor="ubi">Ubicación</label>
        <input id="ubi" name="ubi" type="text" placeholder="¿A dónde quieres ir?" {...register('ubi', { required: 'La ubicación es requerida' })} />
        {errors.ubi && <p className="form__error">{errors.ubi.message}</p>}
      </div>
      <div>
        <label htmlFor="maxPeople">Personas</label>
        <input id="maxPeople" name="maxPeople" type="number" placeholder="Número de personas" {...register('maxPeople', { required: 'El número máximo de personas es requerido' })} />
        {errors.maxPeople && <p className="form__error">{errors.maxPeople.message}</p>}
      </div>
      <div>
        <label htmlFor="type">Tipo</label>
        <select name="type" id="type" {...register('type', { required: 'El tipo es requerido' })} defaultValue="">
          <option value="" disabled>
            Selecciona un tipo
          </option>
          <option>Alojamiento</option>
          <option>Actividad</option>
        </select>
        {errors.type && <p className="form__error">{errors.type.message}</p>}
      </div>
      <Button type="submit" text="Buscar" />
    </form>
  );
};

export default Filter;
