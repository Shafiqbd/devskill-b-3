import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styled from "styled-components";
import s1 from "../../assets/slider/s1.jpg";
import s2 from "../../assets/slider/s2.jpg";
import s3 from "../../assets/slider/s3.jpg";

const SliderAarea = styled.div`
  & .slider {
    height: 70vh;
  }
  & .carousel .thumbs-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const Slider = () => {
  return (
    <SliderAarea>
      <Carousel autoPlay>
        <div className="slider">
          <img src={s1} />
        </div>
        <div className="slider">
          <img src={s2} />
        </div>
        <div className="slider">
          <img src={s3} />
        </div>
      </Carousel>
    </SliderAarea>
  );
};

export default Slider;

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
