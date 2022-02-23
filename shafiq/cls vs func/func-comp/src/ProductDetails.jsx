import { useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styled from 'styled-components';

const ProductDetailsArea = styled.div`
& p{
  margin-bottom:6px !important;
  text-align:left;
}
`;
const Item = styled.div`
  display:flex;
  align-tiems:center;
  justify-content:space-between;
  & .name{
    font-weight:700;
  }
`;
const NameWrap = styled.div`
  width:120px;
  display:flex;
  align-items:center;
  justify-content:space-between;
`;
const ProductDetails =(props)=>{
  console.log('props',props);
  useEffect(()=>{
    console.log("ProductDetails didMount");
  })

  const updatePrice =(price)=>{
    console.log(price+1);
    props.setCounter(price+1);
  }
  return(
    <ProductDetailsArea> 
      <Card variant="outlined" style={{height:'225px'}}>
        {
          props.items !== null ? <CardContent>
          <Item>
            <NameWrap>
            <p className="name">Name</p>
            <p className="name">:</p>
            </NameWrap>
            <p>{props.items.name}</p>
          </Item>
          <Item>
          <NameWrap>
            <p className="name">Description</p>
            <p className="name">:</p>
            </NameWrap>
            <p>{props.items.description}</p>
          </Item>
          <Item>
          <NameWrap>
            <p className="name">Price</p>
            <p className="name">:</p>
            </NameWrap>
            <p>{props.items.price}</p>
          </Item>
          <Item>
          <NameWrap>
            <p className="name">Cetegory</p>
            <p className="name">:</p>
            </NameWrap>
            <p>{props.items.category}</p>
          </Item>
          
        </CardContent> : <h1>No</h1>
        }
        
      </Card>
    </ProductDetailsArea>

  );
}
export default ProductDetails;