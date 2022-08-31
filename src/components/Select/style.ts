import { FormControl } from "@mui/material"
import styled, { css } from "styled-components"

export const SelectStyled = styled(FormControl)`
    transition: 200ms;

    width: 100%;
    max-width: 320px;

    .MuiFormLabel-root, svg  {
        color:#D8D8D8;
    }

    .MuiInputBase-root {
        border-bottom: 1px solid #D8D8D8;
    }

    .MuiSelect-select{
        color:#F5F5F5;
    }
`