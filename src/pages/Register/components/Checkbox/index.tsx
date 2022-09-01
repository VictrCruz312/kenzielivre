import { CheckboxStyled } from "./style"

import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

const CheckboxEdited = () => {

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        console.log(event.target.checked)
    }
    return(

        <CheckboxStyled control={<Checkbox onChange={handleChange} defaultChecked />} label="Concorda com os termos de uso" />
    )
}

export default CheckboxEdited