const Step1 = ({ register, errors }) => {
  return (
    <div className="step">
      <div>
        <h4>Información del Alojamiento</h4>
        <p>Todos los campos son obligatorios</p>
      </div>
      <div>
        <label htmlFor="name">Nombre del Alojamiento</label>
        <input type="text" {...register('name', { required: 'El nombre es requerido' })} />
        {errors.name && <p className="form__error">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="description">Descripción del Alojamiento</label>
        <textarea name="description" id="description" {...register('description', { required: 'La descripción es requerida' })}></textarea>
        {errors.description && <p className="form__error">{errors.description.message}</p>}
      </div>
      <div>
        <label htmlFor="type">Tipo de Alojamiento</label>
        <select name="type" id="type" {...register('type', { required: 'El tipo es requerido' })}>
          <option value="">Selecciona un tipo</option>
          <option value="Cabaña">Cabaña</option>
          <option value="Camping">Camping</option>
          <option value="Casa de arbol">Casa de arbol</option>
          <option value="Albergues">Albergues</option>
          <option value="Resorts">Resorts</option>
          <option value="Refugios">Refugios</option>
        </select>
        {errors.type && <p className="form__error">{errors.type.message}</p>}
      </div>
      <div>
        <label htmlFor="ubi">Ubicación</label>
        <input type="text" name="ubi" id="ubi" {...register('ubi', { required: 'La ubicación es requerida' })}></input>
        {errors.ubi && <p className="form__error">{errors.ubi.message}</p>}
      </div>
      <div>
        <label htmlFor="price">Precio por noche</label>
        <input type="number" name="price" id="price" min="1" {...register('price', { required: 'El precio es requerido' })}></input>
        {errors.price && <p className="form__error">{errors.price.message}</p>}
      </div>
      <div>
        <label htmlFor="capacity">Número máximo de personas</label>
        <input type="number" name="capacity" id="capacity" min="1" {...register('capacity', { required: 'El número máximo de personas es requerido' })}></input>
        {errors.capacity && <p className="form__error">{errors.capacity.message}</p>}
      </div>
    </div>
  );
};

export default Step1;
