import { FormControl } from "@mui/material";
import styled from "styled-components";

export const FormControlEdited = styled(FormControl)`
  width: 100%;
  max-width: 320px;
  height: 48px;

  .MuiButtonBase-root {
    color: #d8d8d8;
  }

  .MuiInputBase-input {
    color: #f5f5f5;
  }

  .MuiFormLabel-root {
    color: #d8d8d8;
  }

  .MuiInput-root::before {
    border-bottom: 1px solid #d8d8d8;
  }
`;
