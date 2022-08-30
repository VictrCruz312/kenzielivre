import { TextField } from "@mui/material";
import { ReactNode } from "react";

interface IPropsInput {
  children: string;
}

const Input = ({ children }: IPropsInput) => {
  return (
    <TextField id="standard-basic" label="Standard" variant="standard">
      {children}
    </TextField>
  );
};
export default Input;
