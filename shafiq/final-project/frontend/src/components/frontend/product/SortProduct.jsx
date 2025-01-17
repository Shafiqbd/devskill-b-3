import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const SortProduct = ({ getSortByProduct, sorting, setSorting}) => {
  

  const handleChange = (event) => {
    setSorting(event);
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Sorting</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={sorting}
        label="Sort"
        onChange={(e) => {
          handleChange(e.target.value);
          getSortByProduct(e.target.value);
        }}
      >
        <MenuItem value={"asc"}>Sort by Asc</MenuItem>
        <MenuItem value={"desc"}>Sort by Desc</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortProduct;
