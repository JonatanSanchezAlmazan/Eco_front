

const Step1 = ({register, accommodation}) => {
  return (
    <div className="step">
    <div>
      <label htmlFor="name">Nombre del Alojamiento</label>
      <input type="text" placeholder={accommodation.name}  {...register('name')} />
    </div>
    <div>
      <label htmlFor="description">Descripción del Alojamiento</label>
      <textarea name="description" id="description" placeholder={accommodation.description} {...register('description')}></textarea>
    </div>
    <div>
      <label htmlFor="type">Tipo de Alojamiento</label>
      <select name="type" id="type" {...register('type')}>
        <option value={accommodation.type}>{accommodation.type}</option>
        <option value="Cabaña">Cabaña</option>
        <option value="Camping">Camping</option>
        <option value="Casa de arbol">Casa de arbol</option>
        <option value="Albergues">Albergues</option>
        <option value="Resorts">Resorts</option>
        <option value="Refugios">Refugios</option>
      </select>
    </div>
    <div>
      <label htmlFor="ubi">Ubicación</label>
      <input type="text" name="ubi" id="ubi" placeholder={accommodation.ubi} {...register('ubi')}></input>
    </div>
    <div>
      <label htmlFor="price">Precio por noche</label>
      <input type="number" name="price" id="price" min="1" placeholder={accommodation.price} {...register('price')}></input>
    </div>
    <div>
      <label htmlFor="capacity">Número máximo de personas</label>
      <input type="number" name="capacity" id="capacity" min="1" placeholder={accommodation.capacity} {...register('capacity')}></input>
    </div>
  </div>
  )
}

export default Step1