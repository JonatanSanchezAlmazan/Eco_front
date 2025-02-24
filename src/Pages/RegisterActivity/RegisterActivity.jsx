import { useContext, useState } from 'react';
import './RegisterActivity.css';
import './Step.css';
import { useForm } from 'react-hook-form';
import { ActivitiesContext } from '../../Providers/Activities/ActivitiesProvider';
import { createActiviy } from '../../Reducers/Activities/activities.action';
import Step1 from './Step1/Step1';
import Step2 from './Step2/Step2';
import Step3 from './Step3/Step3';
import useFormStep from '../../Hooks/useFormStep';
import { stepFieldsActivities } from '../../utils/fieldsSteps';

const RegisterActivity = () => {
  const { dispatch } = useContext(ActivitiesContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    setValue,
    getValues
  } = useForm();
  const { step, goToStep } = useFormStep(trigger, stepFieldsActivities);

  async function submit(data) {
    await createActiviy({ dispatch, data });
  }

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
            {step === 1 && <Step1 register={register} errors={errors} />}
            {step === 2 && <Step2 register={register} errors={errors} setValue={setValue} getValues={getValues} />}
            {step === 3 && <Step3 register={register} errors={errors} />}
          </form>
        </div>
      </section>
    </main>
  );
};

export default RegisterActivity;
