import { useState } from 'react';
import Alert from '../../../Components/Alert/Alert';


const Step2 = ({register, errors, setValue}) => {
    const [images, setImages] = useState([]);
    

    function handleImagesChange(e) {
        const files = Array.from(e.target.files);
        if (files.length === 0) return;


        const imagePreviews = files.map((file) => ({
            file,
            preview: URL.createObjectURL(file),
          }));
        setImages((prevImages) => [...prevImages, ...imagePreviews]);
        setValue('images', [...images, ...imagePreviews].map((img) => {
            img.file;

        }));

      }
      
    return (
        <div className="step">
        <h4>Detalles de la actividad</h4>
        <div>
          <label htmlFor="duration">Duración</label>
          <input id="duration" type="number" min="1" {...register('duration', { required: 'La duración es requerida' })} />
          {errors.duration && <p className="form__auth--error">{errors.duration.message}</p>}
        </div>
        <div>
          <label htmlFor="price">Precio por persona</label>
          <input id="price" type="number" min="1" {...register('price', { required: 'El precio es requerido' })} />
          {errors.price && <p className="form__auth--error">{errors.price.message}</p>}
        </div>
        <div>
          <label htmlFor="ubi">Ubicación</label>
          <input id="ubi" type="text" {...register('ubi', { required: 'La ubicacion es requerida' })} />
          {errors.ubi && <p className="form__auth--error">{errors.ubi.message}</p>}
        </div>
        <div>
          <label htmlFor="capacity">Número máximo de personas</label>
          <input id="capacity" type="number" min="1" {...register('capacity', { required: 'La capacidad es requerida' })} />
          {errors.capacity && <p className="form__auth--error">{errors.capacity.message}</p>}
        </div>
        <div>
          <label htmlFor="images">{`Imagenes:`}</label>
          <input id="images" type="file" multiple accept="image/*"  max="3" onChange={handleImagesChange} />
        </div>
        {images.length > 3 && <Alert message={'No puedes poner más de tres imagenes'}/>}
        {images.length > 0 && images.length <= 3 && (
        <div className="image-preview-container"> 
            {images.map((img, index) => (
            <div key={index}>
                <img  src={img.preview} alt={`Imagen ${index + 1}`} className="image-preview" />
            </div>
          ))}   
        </div>
      )}
      </div>
    )
}

export default Step2;