const Step1 = ({ register, errors }) => {
  return (
    <div className="step">
      <div>
        <h4>Información básica de la actividad</h4>
        <p>Todos los campos son obligatorios</p>
      </div>
      <div>
        <label htmlFor="name">Nombre de la actividad</label>
        <input type="text" {...register('name', { required: 'El nombre es requerido' })} />
        {errors.name && <p className="form__error">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="description">Descripción</label>
        <textarea name="description" id="description" {...register('description', { required: 'La descripción es requerida' })}></textarea>
        {errors.description && <p className="form__error">{errors.description.message}</p>}
      </div>
      <div>
        <label htmlFor="type">Tipo de actividad</label>
        <select name="type" id="type" {...register('type', { required: 'El tipo es requerido' })}>
          <option value="">Selecciona un tipo</option>
          <option value="Senderismo">Senderismo</option>
          <option value="Ciclismo">Ciclismo</option>
          <option value="Kayak">Kayak</option>
          <option value="Excursión">Excursión</option>
          <option value="Taller">Taller</option>
          <option value="Otro">Otro</option>
        </select>
        {errors.type && <p className="form__error">{errors.type.message}</p>}
      </div>
      <div>
        <label htmlFor="startTime">Hora</label>
        <input placeholder="08:00 AM" type="time" name="startTime" id="startTime" {...register('startTime', { required: 'La hora es requerida' })}></input>
        {errors.startTime && <p className="form__error">{errors.startTime.message}</p>}
      </div>
      <div>
        <label htmlFor="schedule">Horario</label>
        <input placeholder="De Lunes a Domingo" type="text" name="schedule" id="schedule" {...register('schedule', { required: 'El horario es requerido' })}></input>
        {errors.schedule && <p className="form__error">{errors.schedule.message}</p>}
      </div>
    </div>
  );
};

export default Step1;
