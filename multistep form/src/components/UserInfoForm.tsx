import React, { ChangeEvent } from "react";
import Form from "./Form";

type UserInfoFormProps = {
  setFormData: (e: ChangeEvent<HTMLInputElement>) => void;
  formData: UserInfoData | undefined;
};

export type UserInfoData = {
  firstName: string;
  lastName: string;
  age: string;
};

const UserInfoForm: React.FC<UserInfoFormProps> = ({
  setFormData,
  formData,
}) => {
  return (
    <Form title="User Info">
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        required
        onChange={setFormData}
        placeholder="First Name..."
        defaultValue={formData?.firstName}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        required
        onChange={setFormData}
        placeholder="Last Name..."
        defaultValue={formData?.lastName}
      />

      <label htmlFor="age">Age</label>
      <input
        type="number"
        id="age"
        name="age"
        required
        max={120}
        onChange={setFormData}
        placeholder="Age..."
        defaultValue={formData?.age}
      />
    </Form>
  );
};

export default UserInfoForm;
