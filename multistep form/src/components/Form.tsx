import React, { ReactNode } from "react";

type FormProps = {
  title: string;
  children: ReactNode;
};

const Form: React.FC<FormProps> = ({ title, children }) => {
  return (
    <div>
      <h2 className="title">{title}</h2>
      <div className="form">{children}</div>
    </div>
  );
};

export default Form;
