import { CheckboxStyled } from "./style";

import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

interface IPropsCheckbox {
  onChange:( check:boolean ) => void,
}

const CheckboxEdited = ( { onChange }:IPropsCheckbox ) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };
  return (
    <CheckboxStyled
      control={<Checkbox onChange={handleChange} />}
      label="Concorda com os termos de uso"
    />
  );
};

export default CheckboxEdited;
