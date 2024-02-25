import React, { ChangeEvent, FormEvent, useState } from "react";
import useMultistepForm from "./hooks/useMultistepForm";
import UserInfoForm, { UserInfoData } from "./components/UserInfoForm";
import CredentialsForm, { CredentialsData } from "./components/CredentialsForm";
import AddressForm, { AddressData } from "./components/AddressForm";

type FormData = AddressData & UserInfoData & CredentialsData;

const INITIAL_FORM_DATA = {} as FormData;
const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const {
    CurrentForm,
    next,
    prev,
    isFirstForm,
    isLastForm,
    goToFirstStep,
    currentFormIndex,
    forms,
  } = useMultistepForm([
    <UserInfoForm setFormData={updateFormData} formData={formData} />,
    <CredentialsForm setFormData={updateFormData} formData={formData} />,
    <AddressForm setFormData={updateFormData} formData={formData} />,
  ]);

  function updateFormData(e: ChangeEvent<HTMLInputElement>) {
    const name = e.target.name as keyof FormData;
    setFormData((prev) => ({ ...prev, [name]: e.target.value }));
  }
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastForm) return next();
    console.log("submitted", formData);
    setFormData(INITIAL_FORM_DATA);
    goToFirstStep();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="steps">
        {currentFormIndex + 1} / {forms.length}
      </div>
      {CurrentForm}
      <div className="buttons">
        {!isFirstForm && (
          <button type="button" onClick={prev}>
            Prev
          </button>
        )}
        <button type="submit">{isLastForm ? "Submit" : "Next"}</button>
      </div>
    </form>
  );
};

export default App;
