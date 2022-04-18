import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../pages/frontend/Footer";
import Header from "../../pages/frontend/Header";
import Newsletter from "../../pages/frontend/Newsletter";
import Slider from "../../pages/frontend/Slider";
import Megamenu from "../frontend/menu/Megamenu";

const BannerContent = styled.div``;

const WebLayout = () => {
  return (
    <>
      <Header />
      <Slider />

      <BannerContent className="banner">
        <Megamenu />
        <div className="w3l_banner_nav_right">
          <Outlet />
        </div>
        <div className="clearfix"></div>
      </BannerContent>
      <Newsletter />
      <Footer />
    </>
  );
};

export default WebLayout;
