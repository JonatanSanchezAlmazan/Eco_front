import ImagesPreview from '../../../Components/ImagesPreview/ImagesPreview';
import useImageUpload from '../../../Hooks/useImageUpload';

const Step2 = ({ register, errors, setValue, getValues }) => {
  const { images, handleImagesChange } = useImageUpload(getValues, setValue);

  return (
    <div className="step">
      <div>
        <h4>Detalles de la actividad</h4>
        <p>Todos los campos son obligatorios</p>
      </div>
      <div>
        <label htmlFor="duration">Duración</label>
        <input id="duration" type="number" min="1" {...register('duration', { required: 'La duración es requerida' })} />
        {errors.duration && <p className="form__error">{errors.duration.message}</p>}
      </div>
      <div>
        <label htmlFor="price">Precio por persona</label>
        <input id="price" type="number" min="1" {...register('price', { required: 'El precio es requerido' })} />
        {errors.price && <p className="form__error">{errors.price.message}</p>}
      </div>
      <div>
        <label htmlFor="ubi">Ubicación</label>
        <input id="ubi" type="text" {...register('ubi', { required: 'La ubicacion es requerida' })} />
        {errors.ubi && <p className="form__error">{errors.ubi.message}</p>}
      </div>
      <div>
        <label htmlFor="capacity">Número máximo de personas</label>
        <input id="capacity" type="number" min="1" {...register('capacity', { required: 'La capacidad es requerida' })} />
        {errors.capacity && <p className="form__error">{errors.capacity.message}</p>}
      </div>
      <div className="field__image">
        <label htmlFor="images">
          Imagenes: <span>3 imágenes como máximo</span>
        </label>
        <input id="images" type="file" multiple accept="image/*" onChange={handleImagesChange} className="hidden-input" />
      </div>

      {images.length > 0 && <ImagesPreview images={images} />}
    </div>
  );
};

export default Step2;
