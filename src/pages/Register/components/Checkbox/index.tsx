import { CheckboxStyled } from "./style";

import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

interface IPropsCheckbox {
  nameDescription?:string,
  onChange:( check:boolean ) => void,
  name?:string,
  register?:any,
  message?:string,
}

const CheckboxEdited = ( { onChange, nameDescription, register, name }:IPropsCheckbox ) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };
  return (
    <CheckboxStyled
      {...register(name)}
      control={<Checkbox onChange={handleChange} />}
      label={nameDescription ? nameDescription : "Concorda com os termos de uso" }
    />
  );
};

export default CheckboxEdited;
