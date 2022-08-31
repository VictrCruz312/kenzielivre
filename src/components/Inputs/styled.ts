import { FormControl } from "@mui/material";
import styled from "styled-components";

interface IPropsFormSyled {
  width?: string;
}

export const FormControlEdited = styled(FormControl)<IPropsFormSyled>`
  width: ${(IPropsFormSyled) => IPropsFormSyled.width};
  height: 48px;

  @media (max-width: 425px) {
    width: 280px;
  }
`;
