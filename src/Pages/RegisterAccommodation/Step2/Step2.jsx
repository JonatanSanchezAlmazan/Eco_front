import { useEffect, useState } from 'react';
import opciones from '../../../utils/options';
import ImagesPreview from '../../../Components/ImagesPreview/ImagesPreview';
import useImageUpload from '../../../Hooks/useImageUpload';

const Step2 = ({ register, errors, setValue, getValues }) => {
  const { images, handleImagesChange } = useImageUpload(getValues, setValue);

  return (
    <div className="step">
      <div>
        <h4>Detalles del alojamiento</h4>
        <p>Todos los campos son obligatorios</p>
      </div>
      <div className="step__services">
        <label htmlFor="services">Servicios</label>
        {opciones.map((opcion, index) => (
          <label key={index}>
            <input type="checkbox" value={opcion} {...register('services', { required: 'Los servicios son  requerido' })} />
            {opcion}
          </label>
        ))}
        {errors.services && <p className="form__error">{errors.services.message}</p>}
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
