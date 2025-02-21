import Button from '../../../Components/Button/Button';

const Step3 = ({ register, errors }) => {
  return (
    <div className="step">
      <div>
        <h4>Requisitos y restricciones</h4>
        <p>Todos los campos son obligatorios</p>
      </div>
      <div>
        <label htmlFor="requirements">
          Requisitos <span>Separa cada palabra por una coma</span>
        </label>
        <textarea id="requirements" placeholder="Ej: Buena condición física, Equipo específico..." {...register('requirements', { required: 'Los requisitos son requeridos' })}></textarea>
        {errors.requirements && <p className="form__error">{errors.requirements.message}</p>}
      </div>
      <div>
        <label htmlFor="includes">
          Qué incluye <span>Separa cada palabra por una coma</span>
        </label>
        <textarea id="includes" placeholder="Ej: Guía, Equipo, Agua" {...register('includes', { required: 'Que incluye es requerido' })}></textarea>
        {errors.includes && <p className="form__error">{errors.includes.message}</p>}
      </div>
      <div>
        <label htmlFor="difficulty">Dificultad</label>
        <select name="difficulty" id="difficulty" {...register('difficulty', { required: 'Selecciona una dificultad' })}>
          <option value="">Selecciona una opción</option>
          <option value="Fácil">Fácil</option>
          <option value="Moderada">Moderada</option>
          <option value="Desafiante">Desafiante</option>
          <option value="Experto">Experto</option>
        </select>
        {errors.difficulty && <p className="form__error">{errors.difficulty.message}</p>}
      </div>
      <Button text="Registrar Actividad" />
    </div>
  );
};

export default Step3;
