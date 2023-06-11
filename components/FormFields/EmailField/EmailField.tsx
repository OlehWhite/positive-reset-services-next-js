import React, { FC } from "react";
import { StyledInput } from "../styled";

const EmailField: FC<any> = ({ register, errors }: any) => {
  return (
    <StyledInput
      style={errors.Email && { border: "1px solid red" }}
      name="Email"
      register={register}
      registerOptions={{
        pattern: {
          value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
          message: "Incorrect email format. Example: example@gmail.com",
        },
      }}
    />
  );
};

export default EmailField;
