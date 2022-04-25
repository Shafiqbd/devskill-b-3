import { Button, Card, FormControl, Grid, InputLabel, OutlinedInput } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import FileBase64 from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import styled from "styled-components"
import { setCategoryList } from '../../../redux/actions/categorys/categoryListAction'
import { handleProductInputChange } from '../../../redux/actions/products/productAction'
import { CHANGE_PRODUCT_INPUT } from '../../../redux/contants/action-type'
import Select from '../../common/Select'

const ImagePreview = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  width: 100px;
  overflow: hidden;
  border: 2px solid #ddd;
  & img {
    width: 100px;
    height: 100px;
  }
`

const ProductForm = ({productModel, handleSubmit}) => {
  const[fileUrl, setFileUrl] = useState("");
  
  const dispatch = useDispatch();
  const {categoryList} = useSelector(state => state.categoryStore);

  useEffect(() => {
    dispatch(setCategoryList());    
  }, []);

  const getFiles = (files) =>{
    const inputData = {
      name: "image",
      value: files.base64 ? files.base64 : "",
    };
    dispatch({
      type: CHANGE_PRODUCT_INPUT,
      payload: inputData

    })
  }
  

  const handleInputChange = (e) => {
    dispatch(handleProductInputChange(e));
  }
  return (
    <Grid container spacing={0}>
      <Grid item md={6}>
        <Card style={{ padding: "15px" }}>
          <Form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>    

              <Select options={categoryList.map((item, i) =>
              {
                return {
                  id : item._id,
                  name : item.name
                }
              })} 
              name={"_id"} label={"Category"}  value={productModel.category._id} 
              handleInputChange = {handleInputChange} />                      

              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Product Name</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={productModel.title}
                  name="title"
                  onChange={(e) => dispatch(handleProductInputChange(e))}
                  label="Product Name"
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={productModel.price}
                  name="price"
                  onChange={(e) => dispatch(handleProductInputChange(e))}
                  label="Price"
                  type='number'
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Stock</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={productModel.stock}
                  name="stock"
                  onChange={(e) => dispatch(handleProductInputChange(e))}
                  label="Stock"
                  type='number'
                />
              </FormControl>

              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Descriptiion</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={productModel.description}
                  name="description"
                  onChange={(e) => dispatch(handleProductInputChange(e))}
                  label="Description"
                  multiline
                  rows={3}
                  maxRows={4}
                />
              </FormControl>

              <FormControl fullWidth sx={{ m: 1 }}>
                <FileBase64 multiple={ false } onDone={(e) => getFiles(e) } />
                {productModel.image && (
                  <ImagePreview>
                    {/* <img src={fileUrl} alt="" /> */}
                    <img src={productModel.image} alt="" />
                    
                  </ImagePreview>
                )}
              </FormControl>

              <FormControl fullWidth sx={{ m: 1, flexDirection: "row-reverse" }}>
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </FormControl>
            </Box>
          </Form>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ProductForm