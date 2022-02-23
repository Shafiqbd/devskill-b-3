import { useEffect, useState } from 'react';
import productList from './productList.json';
import Loader from './Loader';
import ProductDetails from "./ProductDetails"
import {List, Grid, Container }from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import styled from 'styled-components';

const ProductWrapper = styled.div`
  max-width:900px;
  margin:0 auto;
  & h1{
    text-align:left;
  }
`;
const CustBtn = styled(ListItemButton)`
  justify-content:center !important;
  margin-bottom:6px !important;
`;
const Product =()=>{
const[products, setProducts] = useState([]);
const[obj, setObj] = useState({});
const[loading, setLoading] = useState(false);
const[counter, setCounter] = useState(0);

const getProductList = ()=> {
  setLoading(false);
  setProducts(productList);

}
const loadProductDetails = (product)=>{
  setObj(product);

}
useEffect(()=>{
  console.log("products", products); 
  getProductList();
  setLoading(true);

},[obj, products]);
  return(

    <ProductWrapper >
        <Container>
          <Grid container spacing={6}>
              <Grid item md={6}>
              <h1>Product List</h1>
              <List
              sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}
              aria-label="contacts"
            >
                { 
              loading === false ? <Loader /> :
              products.map((product, index) =>{
                  return(
                    <ListItem disablePadding key={index}>
                    <CustBtn onClick={()=>loadProductDetails(product)}>
                    {`${product.name}`}
                    </CustBtn>
                  </ListItem>

                  )
                })
              } 
            
            </List>
              </Grid>
              <Grid item md={6}>
                <h1>Product Details</h1>
                <ProductDetails items={obj} setCounter={setCounter}/>
              </Grid>
          </Grid>
        </Container>
      
      
   </ProductWrapper>
  );
}
export default Product;