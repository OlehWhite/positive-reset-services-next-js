import React, { FC } from "react";
import { StyledFile } from "../styled";
import { IInputFormField } from "../interfaces";

const FileField: FC<any> = ({ register, errors }: any) => {
  return <StyledFile type="file" name="File" register={register} />;
};

export default FileField;
