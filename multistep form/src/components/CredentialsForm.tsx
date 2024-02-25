import React, { ChangeEvent } from "react";
import Form from "./Form";

type CredentialsFormProps = {
  setFormData: (e: ChangeEvent<HTMLInputElement>) => void;
  formData: CredentialsData | undefined;
};

export type CredentialsData = {
  email: string;
  password: string;
};

const CredentialsForm: React.FC<CredentialsFormProps> = ({
  setFormData,
  formData,
}) => {
  return (
    <Form title="Credentials">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        onChange={setFormData}
        placeholder="Email..."
        defaultValue={formData?.email}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        required
        minLength={6}
        maxLength={10}
        onChange={setFormData}
        placeholder="Password..."
        defaultValue={formData?.password}
      />
    </Form>
  );
};

export default CredentialsForm;
