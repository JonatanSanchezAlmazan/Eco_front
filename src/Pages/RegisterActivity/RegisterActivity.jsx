import { useContext, useState } from 'react';
import './RegisterActivity.css';
import Button from '../../Components/Button/Button';
import { useForm } from 'react-hook-form';
import { ActivitiesContext } from '../../Providers/Activities/ActivitiesProvider';
import { createActiviy } from '../../Redecuers/Activities/activities.action';
import Alert from '../../Components/Alert/Alert';
import Loading from '../../Components/Loading/Loading';

const RegisterActivity = () => {
  const [step, setStep] = useState(1);
  const [images, setImages] = useState([]);
  const { state, dispatch } = useContext(ActivitiesContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    setValue
  } = useForm();

  async function submit(data) {
    await createActiviy({ dispatch, data });
  }
  function handleImagesChange(e) {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;
    setImages((prevImages) => [...prevImages, ...files]);
    setValue('images', [...images, ...files]);
  }

  const goToStep = async (nextStep) => {
    const stepFields = {
      1: ['name', 'description', 'type', 'startTime', 'schedule'],
      2: ['duration', 'price', 'ubi', 'capacity', 'images'],
      3: ['requirements', 'includes', 'difficulty']
    };

    const isValid = await trigger(stepFields[step]);
    if (isValid) setStep(nextStep);
  };
  return (
    <main>
      <section className="register__activity">
        <h2>Registrar Nueva actividad</h2>
        <div className="form__container">
          <div className="progress__bar">
            {[1, 2, 3].map((s) => (
              <div key={s} onClick={() => goToStep(s)}>
                <p className={s === step ? 'step__active' : 'step__no--active'}>Paso {s}</p>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit(submit)}>
            {step === 1 && (
              <div className="step">
                <h4>Información básica de la actividad</h4>
                <div>
                  <label htmlFor="name">Nombre de la actividad</label>
                  <input type="text" {...register('name', { required: 'El nombre es requerido' })} />
                  {errors.name && <p className="form__auth--error">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="description">Descripción</label>
                  <textarea name="description" id="description" {...register('description', { required: 'La descripción es requerida' })}></textarea>
                  {errors.description && <p className="form__auth--error">{errors.description.message}</p>}
                </div>
                <div>
                  <label htmlFor="type">Tipo de actividad</label>
                  <select name="type" id="type" {...register('type', { required: 'El tipo es requerido' })}>
                    <option value="Senderismo">Senderismo</option>
                    <option value="Ciclismo">Ciclismo</option>
                    <option value="Kayak">Kayak</option>
                    <option value="Excursión">Excursión</option>
                    <option value="Taller">Taller</option>
                    <option value="Otro">Otro</option>
                  </select>
                  {errors.type && <p className="form__auth--error">{errors.type.message}</p>}
                </div>
                <div>
                  <label htmlFor="startTime">Hora</label>
                  <input placeholder="08:00 AM" type="text" name="startTime" id="startTime" {...register('startTime', { required: 'La hora es requerida' })}></input>
                  {errors.startTime && <p className="form__auth--error">{errors.startTime.message}</p>}
                </div>
                <div>
                  <label htmlFor="schedule">Horario</label>
                  <input placeholder="De Lunes a Domingo" type="text" name="schedule" id="schedule" {...register('schedule', { required: 'El horario es requerido' })}></input>
                  {errors.schedule && <p className="form__auth--error">{errors.schedule.message}</p>}
                </div>
              </div>
            )}
            {step === 2 && (
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
                  <label htmlFor="images">{`Imagenes: ${images.length} imagenes`}</label>
                  <input id="images" type="file" multiple accept="image/*" onChange={handleImagesChange} />
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="step">
                <h4>Requisitos y restricciones</h4>
                <div>
                  <label htmlFor="requirements">
                    Requisitos <span>Separa cada palabra por una coma</span>
                  </label>
                  <textarea id="requirements" placeholder="Ej: Buena condición física, Equipo específico..." {...register('requirements', { required: 'Los requisitos son requeridos' })}></textarea>
                  {errors.requirements && <p className="form__auth--error">{errors.requirements.message}</p>}
                </div>
                <div>
                  <label htmlFor="includes">
                    Qué incluye <span>Separa cada palabra por una coma</span>
                  </label>
                  <textarea id="includes" placeholder="Ej: Guía, Equipo, Agua" {...register('includes', { required: 'Que incluye es requerido' })}></textarea>
                  {errors.includes && <p className="form__auth--error">{errors.includes.message}</p>}
                </div>
                <div>
                  <label htmlFor="difficulty">Dificultad</label>
                  <select name="difficulty" id="difficulty" {...register('difficulty')}>
                    <option value="Fácil">Fácil</option>
                    <option value="Moderada">Moderada</option>
                    <option value="Desafiante">Desafiante</option>
                    <option value="Experto">Experto</option>
                  </select>
                </div>
                <Button fnc={() => handleSubmit(submit)} text="Registrar Actividad" />
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  );
};

export default RegisterActivity;
