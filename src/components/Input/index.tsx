import { TextField } from "@mui/material";
import React from "react";

interface IPropsInput {
  placeholder: string;
  type: string;
}

const Input = ({ placeholder, type }: IPropsInput) => {
  const [valueInput, setValueInput] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(event.target.value);
  };

  return (
    <>
      <TextField
        id="standard-basic"
        label={placeholder}
        variant="standard"
        value={valueInput}
        type={type}
        onChange={handleChange}
      />
    </>
  );
};
export default Input;
