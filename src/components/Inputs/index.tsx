import { IconButton, Input, InputAdornment, InputLabel } from "@mui/material";
import React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FormControlEdited } from "./styled";

interface IPropsInput {
  placeholder: string;
  type: "text" | "password";
  isText?: boolean;
  register: any;
  name: string;
  message?: string | undefined;
}

const InputComponent = ({
  placeholder,
  type,
  isText,
  register,
  name,
  message,
}: IPropsInput) => {
  const [mostrarSenha, setMostrarSenha] = React.useState(false);

  const handleClickShowPassword = () => {
    setMostrarSenha(!mostrarSenha);
  };

  return (
    <>
      <FormControlEdited
        error={message ? true : false}
        margin="dense"
        variant="standard"
      >
        <InputLabel htmlFor="standard-adornment-password">
          {message ? message : placeholder}
        </InputLabel>
        <Input
          id="standard-adornment-password"
          type={isText ? "text" : mostrarSenha ? "text" : "password"}
          size="small"
          {...register(name)}
          endAdornment={
            type === "password" && (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {mostrarSenha ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }
        />
      </FormControlEdited>
    </>
  );
};
export default InputComponent;
