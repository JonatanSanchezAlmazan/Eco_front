import { useState } from 'react';
import './RegisterActivity.css';
import Button from '../../Components/Button/Button';

const RegisterActivity = () => {
  const [step, setStep] = useState(1);

  const goToStep = (stepNumber) => setStep(stepNumber);
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
          <form>
            {step === 1 && (
              <div className="step">
                <h4>Información básica de la actividad</h4>
                <div>
                  <label htmlFor="name">Nombre de la actividad</label>
                  <input type="text" />
                </div>
                <div>
                  <label htmlFor="name">Descripción</label>
                  <textarea name="" id=""></textarea>
                </div>
                <div>
                  <label htmlFor="name">Tipo de actividad</label>
                  <select name="" id="">
                    <option disabled selected value="">
                      Selecciona
                    </option>
                    <option value="">Senderismo</option>
                    <option value="">Ciclismo</option>
                    <option value="">Kayak</option>
                    <option value="">Excursión</option>
                    <option value="">Taller</option>
                    <option value="">Otro</option>
                  </select>
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="step">
                <h4>Detalles de la actividad</h4>
                <div>
                  <label htmlFor="name">Duración</label>
                  <input type="number" />
                </div>
                <div>
                  <label htmlFor="name">Precio por persona</label>
                  <input type="number" />
                </div>
                <div>
                  <label htmlFor="name">Ubicación</label>
                  <input type="text" />
                </div>
                <div>
                  <label htmlFor="name">Número máximo de personas</label>
                  <input type="number" />
                </div>
              </div>
            )}
            {step === 3 && (
              <div>
                <h4>Requisitos y restricciones</h4>
                <Button text="Registrar Actividad" />
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  );
};

export default RegisterActivity;
