import { ReactElement, useState } from "react";

type UseMultistepFormProps = ReactElement[];

const useMultistepForm = (forms: UseMultistepFormProps) => {
  const [currentFormIndex, setCurrentFormIndex] = useState(0);

  function next() {
    setCurrentFormIndex((prev) => {
      if (prev >= forms.length - 1) return prev;
      return prev + 1;
    });
  }

  function prev() {
    setCurrentFormIndex((prev) => {
      if (prev <= 0) return prev;
      return prev - 1;
    });
  }

  function goToFirstStep() {
    setCurrentFormIndex(0);
  }

  return {
    forms,
    currentFormIndex,
    isLastForm: currentFormIndex === forms.length - 1,
    isFirstForm: currentFormIndex === 0,
    CurrentForm: forms[currentFormIndex],
    next,
    prev,
    goToFirstStep,
  };
};

export default useMultistepForm;
