import { useEffect, useState } from 'react';
import {List, Grid, Container }from '@mui/material';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineGift, AiOutlineArrowRight } from "react-icons/ai";
import Social from './Social';

import s3 from "../../assets/images/s3-min.JPG"


const Section = styled.section``;

const CustSlider = styled.div`
  background: url(${s3}) no-repeat right;
  background-size: cover;
  background-position:center;
  min-height: 700px;
  position: relative;
  z-index: 0;
  display: grid;
  align-items: center;
  
`;
const ContentArea = styled.div`
  max-width:480px;
  text-align:left;
  
  z-index:999;
  & h1{
    font-size:50px;
    color:#fff;
    line-height: 70px;
    font-weight: 700;
    margin:0;
    & span{
      color:#ea3a60;
      display:block;
    }
  }
  & h4{
    font-size: 30px;
    font-weight: 500;
    text-decoration: underline;
    color: white;
    margin:0px;
  }
  
`;
const Banner =()=>{

  return(
    <Section >
        
          <Grid container >
              <Grid item md={12}>
                <CustSlider>
                  <Container>
                    <ContentArea>
                    <h1> <span> Hello, I’m </span>
                      Md. Shafiqul Islam</h1>
                      <h4>FrontEnd Developer</h4>
                      <Social />
                    </ContentArea>
                  </Container>
             
                </CustSlider>
               
              </Grid>
                
          </Grid>
       
   </Section>
  );
}
export default Banner;