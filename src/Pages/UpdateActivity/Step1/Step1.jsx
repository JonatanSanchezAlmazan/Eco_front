const Step1 = ({ register, activity }) => {
  return (
    <div className="step">
      <div>
        <label htmlFor="name">Nombre de la actividad</label>
        <input placeholder={activity.name} type="text" {...register('name')} />
      </div>
      <div>
        <label htmlFor="description">Descripción</label>
        <textarea placeholder={activity.description} name="description" id="description" {...register('description')}></textarea>
      </div>
      <div>
        <label htmlFor="type">Tipo de actividad</label>
        <select name="type" id="type" {...register('type')}>
          <option value={activity.type}>{activity.type}</option>
          <option value="Senderismo">Senderismo</option>
          <option value="Ciclismo">Ciclismo</option>
          <option value="Kayak">Kayak</option>
          <option value="Excursión">Excursión</option>
          <option value="Taller">Taller</option>
          <option value="Otro">Otro</option>
        </select>
      </div>
      <div>
        <label htmlFor="startTime">Hora</label>
        <input type="time" name="startTime" id="startTime" {...register('startTime')}></input>
      </div>
      <div>
        <label htmlFor="schedule">Horario</label>
        <input placeholder={activity.schedule} type="text" name="schedule" id="schedule" {...register('schedule')}></input>
      </div>
    </div>
  );
};

export default Step1;
