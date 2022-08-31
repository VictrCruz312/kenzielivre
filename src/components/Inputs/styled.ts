import { FormControl } from "@mui/material";
import styled from "styled-components";

export const FormControlEdited = styled(FormControl)`
  width: 320px;
  height: 48px;

  @media (max-width: 425px) {
    width: 280px;
  }
`;
