import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoContent = styled.div`
  background-color: #fff;
  & h1 a{
    font-size: 1em;
  }
`
const Logo = () => {
  return (
    <LogoContent className="w3ls_logo_products_left">
      <h1><Link to="/"><span>Grocery</span> Store</Link></h1>
    </LogoContent>
    
  )
}

export default Logo