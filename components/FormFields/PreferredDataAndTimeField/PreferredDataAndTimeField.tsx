import React, { FC } from "react";
import { StyledInput } from "../styled";

const PreferredDataAndTimeField: FC<any> = ({ register }: any) => {
  return (
    <StyledInput
      name="Preferred_Data_And_Time"
      register={register}
      registerOptions={{ required: "" }}
    />
  );
};

export default PreferredDataAndTimeField;
