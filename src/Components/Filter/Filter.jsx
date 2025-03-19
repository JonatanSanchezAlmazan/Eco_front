import Button from '../Button/Button';
import './Filter.css';

const Filter = () => {
  return (
    <form className="filter">
      <div>
        <label htmlFor="ubi">Ubicación</label>
        <input id="ubi" type="text" placeholder="¿A dónde quieres ir?" />
      </div>
      <div>
        <label htmlFor="maxPeople">Personas</label>
        <input id="maxPeople" type="number" placeholder="Número de personas" />
      </div>
      <div>
        <label htmlFor="date">Fecha</label>
        <input id="date" type="date" />
      </div>
      <div>
        <label htmlFor="type">Tipo</label>
        <select name="type" id="type">
          <option value="" disabled>
            Selecciona un tipo
          </option>
          <option value="">Alojamiento</option>
          <option value="">Actividad</option>
        </select>
      </div>
      <Button text="Buscar" />
    </form>
  );
};

export default Filter;
