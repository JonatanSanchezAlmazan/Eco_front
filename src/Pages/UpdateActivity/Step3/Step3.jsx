import Button from '../../../Components/Button/Button';

const Step3 = ({ register, activity }) => {
  return (
    <div className="step">
      <div>
        <label htmlFor="requirements">
          Requisitos <span>Separa cada palabra por una coma</span>
        </label>
        <textarea id="requirements" placeholder={activity.requirements} {...register('requirements')}></textarea>
      </div>
      <div>
        <label htmlFor="includes">
          Qué incluye <span>Separa cada palabra por una coma</span>
        </label>
        <textarea id="includes" placeholder={activity.includes} {...register('includes')}></textarea>
      </div>
      <div>
        <label htmlFor="difficulty">Dificultad</label>
        <select name="difficulty" id="difficulty" {...register('difficulty')}>
          <option value={activity.difficulty}>{activity.difficulty}</option>
          <option value="Fácil">Fácil</option>
          <option value="Moderada">Moderada</option>
          <option value="Desafiante">Desafiante</option>
          <option value="Experto">Experto</option>
        </select>
      </div>
      <Button text="Actualizar Actividad" />
    </div>
  );
};

export default Step3;
