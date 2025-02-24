import ImagesPreview from '../../../Components/ImagesPreview/ImagesPreview';
import useImageUpload from '../../../Hooks/useImageUpload';

const Step2 = ({ register, getValues, setValue, activity }) => {
  const { images, handleImagesChange } = useImageUpload(getValues, setValue);
  return (
    <div className="step">
      <div>
        <label htmlFor="duration">Duración</label>
        <input placeholder={activity.duration} id="duration" type="number" min="1" {...register('duration')} />
      </div>
      <div>
        <label htmlFor="price">Precio por persona</label>
        <input placeholder={activity.price} id="price" type="number" min="1" {...register('price')} />
      </div>
      <div>
        <label htmlFor="ubi">Ubicación</label>
        <input placeholder={activity.ubi} id="ubi" type="text" {...register('ubi')} />
      </div>
      <div>
        <label htmlFor="capacity">Número máximo de personas</label>
        <input placeholder={activity.capacity} id="capacity" type="number" min="1" {...register('capacity')} />
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
