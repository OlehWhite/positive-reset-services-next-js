import React, { FC } from "react";
import { StyledInput } from "../styled";
import { IInputFormField } from "../interfaces";

const PreferredDataAndTimeField: FC<any> = ({ register, errors }: any) => {
  return (
    <StyledInput
      name="Preferred_Data_And_Time"
      register={register}
      registerOptions={{ required: "" }}
    />
  );
};

export default PreferredDataAndTimeField;
