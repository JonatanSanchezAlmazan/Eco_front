import { useContext, useState } from 'react';
import './RegisterActivity.css';
import Button from '../../Components/Button/Button';
import { useForm } from 'react-hook-form';
import { ActivitiesContext } from '../../Providers/Activities/ActivitiesProvider';
import { createActiviy } from '../../Redecuers/Activities/activities.action';
import Alert from '../../Components/Alert/Alert';
import Loading from '../../Components/Loading/Loading';
import { useNavigate } from 'react-router-dom';
import Step1 from './Step1/Step1';
import Step2 from './Step2/Step2';
import Step3 from './Step3/Step3';

const RegisterActivity = () => {
  const [step, setStep] = useState(1);
  const { state, dispatch } = useContext(ActivitiesContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    setValue
  } = useForm();
  const navigate = useNavigate();

  

  async function submit(data) {
    await createActiviy({ dispatch, data, navigate });
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
        <h2>Registrar Nueva Actividad</h2>
        <div className="form__container">
          <div className="progress__bar">
            {[1, 2, 3].map((s) => (
              <div key={s} onClick={() => goToStep(s)}>
                <p className={s === step ? 'step__active' : 'step__no--active'}>Paso {s}</p>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit(submit)}>
            {step === 1 && <Step1 register={register} errors={errors}/>}
            {step === 2 && <Step2 register={register} errors={errors} setValue={setValue}/>}
            {step === 3 && <Step3 register={register} errors={errors}/>}
          </form>
        </div>
      </section>
    </main>
  );
};

export default RegisterActivity;
