import { useLocation, useNavigate } from 'react-router-dom';
import ModalUpdate from '../../Components/ModalUpdate/ModalUpdate';
import './UpdateAccommodation.css';
import { useContext } from 'react';
import { AccommodationsContext } from '../../Providers/Accommodations/AccommodationsProvider';
import { useForm } from 'react-hook-form';
import useFormStep from '../../Hooks/useFormStep';
import { stepFieldsAccommodations } from '../../utils/fieldsSteps';
import Step1 from './Step1/Step1';
import Step2 from './Step2/Step2';
import Step3 from './Step3/Step3';
import { updateAccommodation } from '../../Reducers/Accommodations/accommodations.action';
import Alert from '../../Components/Alert/Alert';

const UpdateAccommodation = () => {
  console.log('entrando');

  const location = useLocation();
  const path = location.pathname;
  const id = path.split('/').at(-1);
  const { state, dispatch } = useContext(AccommodationsContext);
  const { accommodations } = state;
  const accommodation = accommodations.find((item) => item._id === id);
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    getValues,
    setValue
  } = useForm();
  const { step, goToStep } = useFormStep(trigger, stepFieldsAccommodations);
  const navigate = useNavigate();

  async function submit(data) {
    await updateAccommodation({ dispatch, id: accommodation._id, data });
  }

  return (
    <div className="updateAccommodation">
      {state.message && <Alert message={state.message} />}
      <ModalUpdate>
        <form action={handleSubmit(submit)}>
          <img onClick={() => navigate('/owner')} className="close" src="/icons/close.webp" alt="icon close" />
          <h4>{`Editar Alojamiento ${accommodation.name}`}</h4>
          <div className="progress__bar">
            {[1, 2, 3].map((s) => (
              <div key={s} onClick={() => goToStep(s)}>
                <p className={s === step ? 'step__active' : 'step__no--active'}>Paso {s}</p>
              </div>
            ))}
          </div>
          {step === 1 && <Step1 register={register} accommodation={accommodation} />}
          {step === 2 && <Step2 register={register} setValue={setValue} getValues={getValues} />}
          {step === 3 && <Step3 register={register} errors={errors} accommodation={accommodation} />}
        </form>
      </ModalUpdate>
    </div>
  );
};

export default UpdateAccommodation;
