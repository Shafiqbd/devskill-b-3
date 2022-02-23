
import { Grid, Container, Link, Button }from '@mui/material';
import styled from 'styled-components';
import {  SiHackerrank } from "react-icons/si";
import {  FaDownload } from "react-icons/fa";
import about from "../../assets/images/about.jpg";

const Section = styled.section`
& h4{
  font-size: 22px;
  line-height: 30px;
  text-transform: capitalize;
  font-weight: 600;
  color: #333;
  text-align:left;
}
& p{
  color: #666;
    margin: 1.5em 0;
    line-height: 28px;
    letter-spacing: .5px;
    font-size: 14px;
    text-align:left;
}
`;
const CustBtn = styled(Button)`
color: #fff !important;
background: #ea3a60 !important;
border: 2px solid #333;
font-weight: 600;
font-size: 15px;
letter-spacing: 1px;
display: flex !important;
border-radius: 35px;

`;
const Title = styled.h1`
font-size: 40px;
text-align: center;
color: #333;
font-weight: 600;
letter-spacing: 5px;
position: relative;
&:after{
  position: absolute;
    content: '';
    width: 10%;
    height: 3px;
    background: #ea3a60;
    left: 45%;
    bottom: -18%;
}
`;

const About =()=>{

  return(
    <Section >
      <Container>
      <Title>
            About Me
      </Title>
        <Grid container spacing={6}>
          <Grid item md={6}>
            <h4>Nulla Viverra Pharetra Sem, Eget Pulvinar Neque Pharetra Ac Int.</h4>
            <p>Nulla viverra pharetra sem, eget pulvinar neque pharetra ac int. 
              lorem ipsum Vestibulum. placerat placerat dolor. Vestibulum at 
              dui nunc. Nullam eu elit neque lectus. Aliquam erat volutpat.
              Nullam ac mattis mi.
              Donec tincidunt leoelit dictum viverra luctus.</p>
              <CustBtn>Download CV &nbsp; <FaDownload /> </CustBtn>
          </Grid>
          <Grid item md={6}>
            <img src={about} alt="" />
          </Grid>
        </Grid>
      </Container>
   </Section>
  );
}
export default About;

