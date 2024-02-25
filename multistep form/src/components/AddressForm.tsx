import React, { ChangeEvent } from "react";
import Form from "./Form";

type AddressFormProps = {
  setFormData: (e: ChangeEvent<HTMLInputElement>) => void;
  formData: AddressData | undefined;
};

export type AddressData = {
  country: string;
  city: string;
  street: string;
  zip: string;
};

const AddressForm: React.FC<AddressFormProps> = ({ setFormData, formData }) => {
  return (
    <Form title="Address">
      <label htmlFor="country">Country</label>
      <input
        type="text"
        id="country"
        name="country"
        required
        onChange={setFormData}
        defaultValue={formData?.country}
        placeholder="Country..."
      />

      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        name="city"
        required
        onChange={setFormData}
        defaultValue={formData?.city}
        placeholder="City..."
      />

      <label htmlFor="street">Street</label>
      <input
        type="text"
        id="street"
        name="street"
        required
        onChange={setFormData}
        defaultValue={formData?.street}
        placeholder="Street..."
      />

      <label htmlFor="zip">Zip</label>
      <input
        type="number"
        id="zip"
        name="zip"
        required
        onChange={setFormData}
        defaultValue={formData?.zip}
        placeholder="Zip..."
      />
    </Form>
  );
};

export default AddressForm;
