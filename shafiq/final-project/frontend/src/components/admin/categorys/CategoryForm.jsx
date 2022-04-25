import { Box, Button, Card, FormControl, Grid, InputLabel, OutlinedInput } from "@mui/material";
import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { handleCategoryInputChange } from "../../../redux/actions/categorys/categoryAction";

const CategoryForm = ({categoryModel, handleSubmit}) => {  
  const dispatch = useDispatch();

  return (
    <Grid container spacing={0}>
      <Grid item md={6}>
        <Card style={{ padding: "15px" }}>
          <Form>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Category Name</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={categoryModel.name}
                  name="name"
                  onChange={(e) => dispatch(handleCategoryInputChange(e))}
                  label="Category Name"
                />
              </FormControl>

              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Descriptiion</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={categoryModel.description}
                  name="description"
                  onChange={(e) => dispatch(handleCategoryInputChange(e))}
                  label="Description"
                  multiline
                  rows={3}
                  maxRows={4}
                />
              </FormControl>

              <FormControl fullWidth sx={{ m: 1, flexDirection: "row-reverse" }}>
                <Button variant="contained" onClick={handleSubmit} type="submit">
                  Submit
                </Button>
              </FormControl>
            </Box>
          </Form>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CategoryForm;
