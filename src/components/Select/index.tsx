import { InputLabel, MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import { SelectStyled } from "./style";

import { v4 as uuid } from "uuid";

interface IPropsSelect {
  arrayText: string[];
  register?: any;
  name: string;
  label: string;
  onChange?: (e: any) => void;
  message?:string,
}

const SelectEdited = ({
  arrayText,
  register,
  name,
  label,
  message,
  onChange,
}: IPropsSelect) => {
  return (
    <SelectStyled error={ message ? true : false } margin="dense" variant="standard">
      <InputLabel id="Select">{label}</InputLabel>
      <Select
        labelId="Select"
        id="Select"
        label={ message ? message : label}
        {...register(name)}
        onChange={onChange}
      >
        {arrayText.map((text) => (
          <MenuItem key={uuid()} value={text}>
            {text}
          </MenuItem>
        ))}
      </Select>
    </SelectStyled>
  );
};

export default SelectEdited;
