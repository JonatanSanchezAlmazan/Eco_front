import Button from '../Button/Button';
import './Filter.css';

const Filter = () => {
  return (
    <form className="filter">
      <div>
        <label htmlFor="">Ubicación</label>
        <input type="text" placeholder="¿A dónde quieres ir?" />
      </div>
      <div>
        <label htmlFor="">Personas</label>
        <input type="number" placeholder="Número de personas" />
      </div>
      <div>
        <label htmlFor="">Fecha</label>
        <input type="date" />
      </div>
      <div>
        <label htmlFor="">Tipo</label>
        <select name="" id="">
          <option value="">Alojamiento</option>
          <option value="">Actividad</option>
        </select>
      </div>
      <Button text="Buscar" />
    </form>
  );
};

export default Filter;
