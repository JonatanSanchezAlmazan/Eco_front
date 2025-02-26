import ImagesPreview from "../../../Components/ImagesPreview/ImagesPreview";
import useImageUpload from "../../../Hooks/useImageUpload";
import opciones from "../../../utils/options"


const Step2 = ({register, setValue, getValues}) => {
    const { images, handleImagesChange } = useImageUpload(getValues, setValue);
  return (
    <div className="step">
      <div className="step__services">
        <label htmlFor="services">Servicios</label>
        {opciones.map((opcion, index) => (
          <label key={index}>
            <input type="checkbox" value={opcion} {...register('services')} />
            {opcion}
          </label>
        ))}
      </div>
      <div className="field__image">
        <label htmlFor="images">
          Imagenes: <span>3 imágenes como máximo</span>
        </label>
        <input id="images" type="file" multiple accept="image/*" onChange={handleImagesChange} className="hidden-input" />
      </div>

      {images.length > 0 && <ImagesPreview images={images} />}
    </div>
  )
}

export default Step2