import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllProduct } from "./ApiClass";
import "./App.css";
import Product from "./Product";
const Loader = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
function App() {
  const [productList, setProductList] = useState([]);

  useEffect(async () => {
    //  await getAllProduct();
    setProductList(await getAllProduct());
  }, []);
  return (
    <Container>
      <div className="App">
        {productList.length === 0 ? <Loader>Loading...</Loader> : <Product productList={productList} />}
      </div>
    </Container>
  );
}

export default App;
