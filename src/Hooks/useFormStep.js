import { useState } from 'react';

function useFormStep(trigger, stepFields) {
  const [step, setStep] = useState(1);

  const goToStep = async (nextStep) => {
    const isValid = await trigger(stepFields[step]);
    if (isValid) setStep(nextStep);
  };

  return { step, goToStep };
}

export default useFormStep;
