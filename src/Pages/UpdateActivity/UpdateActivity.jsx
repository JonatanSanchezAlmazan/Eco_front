import { useLocation, useNavigate } from 'react-router-dom';
import './UpdateActivity.css';
import { useContext } from 'react';
import { ActivitiesContext } from '../../Providers/Activities/ActivitiesProvider';
import useFormStep from '../../Hooks/useFormStep';
import { useForm } from 'react-hook-form';
import { stepFieldsActivities } from '../../utils/fieldsSteps';
import Step1 from './Step1/Step1';
import Step2 from './Step2/Step2';
import Step3 from './Step3/Step3';
import ModalUpdate from '../../Components/ModalUpdate/ModalUpdate';
import { updateActivity } from '../../Reducers/Activities/activities.action';

const UpdateActivity = () => {
  const location = useLocation();
  const path = location.pathname;
  const id = path.split('/').at(-1);
  const { state, dispatch } = useContext(ActivitiesContext);
  const { activities } = state;
  const activity = activities.find((item) => item._id === id);
  const { register, handleSubmit, trigger, getValues, setValue } = useForm();
  const { step, goToStep } = useFormStep(trigger, stepFieldsActivities);
  const navigate = useNavigate();

  async function submit(data) {
    await updateActivity({dispatch, id, data});
  }

  return (
    <div className="updateActivity">
      <ModalUpdate>
        <form onSubmit={handleSubmit(submit)}>
          <img onClick={()=> navigate('/owner')} className='close' src="/icons/close.webp" alt="icon close" />
          <h4>{`Editar Actividad ${activity.name}`}</h4>
          <div className="progress__bar">
            {[1, 2, 3].map((s) => (
              <div key={s} onClick={() => goToStep(s)}>
                <p className={s === step ? 'step__active' : 'step__no--active'}>Paso {s}</p>
              </div>
            ))}
          </div>
          {step === 1 && <Step1 register={register} activity={activity} />}
          {step === 2 && <Step2 register={register} getValues={getValues} setValue={setValue} activity={activity} />}
          {step === 3 && <Step3 register={register} activity={activity} />}
        </form>
      </ModalUpdate>
    </div>
  );
};

export default UpdateActivity;
