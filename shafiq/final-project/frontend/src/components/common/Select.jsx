import { FormControl, InputLabel, MenuItem, Select as MuiSelect } from '@mui/material';
import React from 'react';

const Select = (props) => {
  const {options, handleInputChange, label, name, value} = props;
  return (
    <FormControl fullWidth sx={{ m: 1 }}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <MuiSelect
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label={label}
        name={name}
        onChange={handleInputChange}
      >
        {options.map((data, i) => (
          <MenuItem value={data.id} key={i}>
            {data.name}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  )
}

export default Select