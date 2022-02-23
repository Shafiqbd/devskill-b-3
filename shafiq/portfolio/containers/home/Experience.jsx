
import { Grid, Container, Link, Button, Typography }from '@mui/material';
import styled from 'styled-components';
import {  SiHackerrank } from "react-icons/si";
import {  FaDownload } from "react-icons/fa";
import {  MdDoubleArrow } from "react-icons/md";
import about from "../../assets/images/about.jpg";

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
const DateArea = styled.div`
background: #222;
text-align: right;
padding-right: 3em;
} 

& h4{
  text-transform: capitalize;
    color: #aaa;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
    margin:0;
    padding:0;
    padding-top:10px;
    
}
& h5{
  font-size: 16px;
    color: #666;
    font-weight: 600;
    margin:0;
    padding-top: 6px; 
    &:last-child{
      padding-bottom:10px;
    }
}
`;

const DateArea2 = styled.div`
background: #222;
text-align: left;
padding-left: 3em;

& h4{
  text-transform: capitalize;
    color: #aaa;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
    margin:0;
    padding:0;
    padding-top:10px;
    
}
& h5{
  font-size: 16px;
    color: #666;
    font-weight: 600;
    margin:0;
    margin:0;
    padding-top: 6px; 
    &:last-child{
      padding-bottom:10px;
    }
}
`;
const Section = styled.section``;
const Content = styled.div`
  & p{
    ine-height: 28px;
    letter-spacing: .5px;
    font-size: 15px;
    color: #666;
    border-left: 3px solid #333;
    padding-left: 3em;
    text-align: left;
    line-height: 29px;
    margin: 0;
  }
`;
const Content2 = styled.div`
  & p{
    ine-height: 28px;
    letter-spacing: .5px;
    font-size: 15px;
    color: #666;
    border-right: 3px solid #333;
    padding-right: 3em;
    text-align: right;
    line-height: 29px;
    margin: 0;
  }
`;
const ExpWrap = styled.div`
  margin-bottom: 25px;
`;

const Experience = ()=>{
  return(
    <Section  >
      <Container>
      <Title>
        Experience
      </Title>
      <ExpWrap>
      <Grid container spacing={3}>
        <Grid item md={3}>
            <DateArea>
            <h4>Web Developer</h4>
            <h5>Pridesys IT Ltd.</h5>
            <h5>2020 - Present</h5>
            </DateArea>
        </Grid>
        <Grid item md={9}>
          <Content>
          <p>Nulla viverra pharetra sem, eget pulvinar neque pharetra ac int. 
          lorem ipsum Vestibulum. placerat placerat dolor. Vestibulum at dui
           nunc. Nullam eu elit neque lectus. Aliquam erat volutpat. Nullam
            ac mattis mi. 
          Donec tincidunt leoelit dictum viverra luctus.</p>
          </Content>
   
        </Grid>
      </Grid>
      </ExpWrap>
      <ExpWrap>
      <Grid container spacing={3}>
        
        <Grid item md={9}>
          <Content2>
          <p>Nulla viverra pharetra sem, eget pulvinar neque pharetra ac int. 
          lorem ipsum Vestibulum. placerat placerat dolor. Vestibulum at dui
           nunc. Nullam eu elit neque lectus. Aliquam erat volutpat. Nullam
            ac mattis mi. 
          Donec tincidunt leoelit dictum viverra luctus.</p>
          </Content2>
        </Grid>
        <Grid item md={3}>
            <DateArea2>
            <h4>Web Designer</h4>
            <h5>LinkBird Technology</h5>
            <h5>2019 - 2020</h5>
            </DateArea2>
        </Grid>
      </Grid>
      </ExpWrap>
      <ExpWrap>
      <Grid container spacing={3}>
        <Grid item md={3}>
            <DateArea>
            <h4>Web Developer</h4>
            <h5>Pridesys IT Ltd.</h5>
            <h5>2020 - Present</h5>
            </DateArea>
        </Grid>
        <Grid item md={9}>
          <Content>
          <p>Nulla viverra pharetra sem, eget pulvinar neque pharetra ac int. 
          lorem ipsum Vestibulum. placerat placerat dolor. Vestibulum at dui
           nunc. Nullam eu elit neque lectus. Aliquam erat volutpat. Nullam
            ac mattis mi. 
          Donec tincidunt leoelit dictum viverra luctus.</p>
          </Content>
   
        </Grid>
      </Grid>
      </ExpWrap>
      <ExpWrap>
      <Grid container spacing={3}>
        
        <Grid item md={9}>
          <Content2>
          <p>Nulla viverra pharetra sem, eget pulvinar neque pharetra ac int. 
          lorem ipsum Vestibulum. placerat placerat dolor. Vestibulum at dui
           nunc. Nullam eu elit neque lectus. Aliquam erat volutpat. Nullam
            ac mattis mi. 
          Donec tincidunt leoelit dictum viverra luctus.</p>
          </Content2>
        </Grid>
        <Grid item md={3}>
            <DateArea2>
            <h4>Web Designer</h4>
            <h5>LinkBird Technology</h5>
            <h5>2019 - 2020</h5>
            </DateArea2>
        </Grid>
      </Grid>
      </ExpWrap>
      </Container>

</Section>
  )
}
export default Experience;