import { useState } from "react";

export const useHomepage = () => {
  const [step, setStep] = useState(1);
  const handleNextStep = () => {
    setStep(step + 1);
  };

  return { step, handleNextStep };
};
