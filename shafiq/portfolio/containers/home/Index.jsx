import { useEffect, useState } from 'react';
import {List, Grid, Container }from '@mui/material';
import styled from 'styled-components';
import Banner from './Banner';
import About from './About';
import Portfolio from './Portfolio';
import Experience from './Experience';



const Section = styled.section`
 
`;
const Home =()=>{

  return(

    <Section >
        <Banner />
        <About />
        <Portfolio />
        <Experience />
        
      
   </Section>
  );
}
export default Home;