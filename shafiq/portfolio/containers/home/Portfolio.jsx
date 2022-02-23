
import styled from "styled-components";
import React from "react";
import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";
// import Dialog from './dialog'
import { Grid, Container, Link, Button }from '@mui/material';


const Section = styled.section`
  
`;
const ProjectWrap = styled.div`
box-shadow: 0 2px 20px 1px rgb(0 0 0 / 49%);
padding: 20px;
transition: all 0.3s ease-in-out;
position: relative;
height: 180px;
& img{
  width:100%;
}
&:hover {
  & .project-details {
    opacity: 1 !important;

  }
}
`;
const Title = styled.h1`
font-size: 40px;
text-align: center;
color: #333;
font-weight: 600;
letter-spacing: 5px;
position: relative;
margin:50px 0px;
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
const ProjectDetails = styled.div`
transition: all 0.3s ease-in-out;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
opacity: 0;
background: rgba(255,255,255,.8);
& .project-name{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align:center;
  
}
`;


export default function Portfolio(props) {

  return (
    <Section>
<Container>
           <Title>
            Portfolio
          </Title>
          <Grid container spacing={4}>
            <Grid item md={4}>
              <ProjectWrap>
                <img src={p1} alt="" />
                <ProjectDetails className="project-details">
                  <div className="project-name">
                    <div>
                      <h4>Bangladesh Muktijoddha</h4>
                      <p>PHP/Laravel</p>
                      
                    </div>
                  </div>
                </ProjectDetails>
              </ProjectWrap>
            </Grid>
            <Grid item md={4}>
              <ProjectWrap>
                <img src={p1} alt="" />
                <ProjectDetails className="project-details">
                  <div className="project-name">
                    <div>
                      <h4>PrideBook Pro</h4>
                      <p>Angular / Spring Boot</p>
                    
                    </div>
                  </div>
                </ProjectDetails>
              </ProjectWrap>
            </Grid>
            <Grid item md={4}>
              <ProjectWrap>
                <img src={p2} alt="" />
                <ProjectDetails className="project-details">
                  <div className="project-name">
                    <div>
                      <h4>AYR Now Aps BackOffice</h4>
                      <p>React Js / Material UI /Firebase</p>
                     
                    </div>
                  </div>
                </ProjectDetails>
              </ProjectWrap>
            </Grid>
            <Grid item md={4}>
              <ProjectWrap>
                <img src={p1} alt="" />
                <ProjectDetails className="project-details">
                  <div className="project-name">
                    <div>
                      <h4>AYR Now Aps BackOffice</h4>
                      <p>React Js / Material UI /Firebase</p>
                     
                    </div>
                  </div>
                </ProjectDetails>
              </ProjectWrap>
            </Grid>
            <Grid item md={4}>
              <ProjectWrap>
                <img src={p1} alt="" />
                <ProjectDetails className="project-details">
                  <div className="project-name">
                    <div>
                      <h4>AYR Now Aps BackOffice</h4>
                      <p>React Js / Material UI /Firebase</p>
                     
                    </div>
                  </div>
                </ProjectDetails>
              </ProjectWrap>
            </Grid>
            <Grid item md={4}>
              <ProjectWrap>
                <img src={p1} alt="" />
                <ProjectDetails className="project-details">
                  <div className="project-name">
                    <div>
                      <h4>AYR Now Aps BackOffice</h4>
                      <p>React Js / Material UI /Firebase</p>
                     
                    </div>
                  </div>
                </ProjectDetails>
              </ProjectWrap>
            </Grid>
            
          </Grid>
      </Container>
    </Section>
        
  );
}
