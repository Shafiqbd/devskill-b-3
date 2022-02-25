import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  margin: 30px 0px;
`;
const ProductDetailsWrap = styled.div`
  & span {
    font-size: 22px;
    font-weight: 700;
  }
`;
const ProductDetails = () => {
  return (
    <ProductDetailsWrap>
      <Container>
        <Title>Product List</Title>
      </Container>
    </ProductDetailsWrap>
  );
};

export default ProductDetails;
