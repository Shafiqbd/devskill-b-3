import React, { useEffect } from "react";
import styled from "styled-components";
import HeaderCart from "../../components/frontend/header/HeaderCart";
import HeaderLoginDrop from "../../components/frontend/header/HeaderLoginDrop";
import Logo from "../../components/frontend/header/Logo";

const HeaderContent = styled.div`
  padding-right: 10px;
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  & .product_list_header {
    padding-right: 10px;
  }
`;

const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    var navoffeset = window.pageYOffset;
    // let elHeight = document.querySelector('.agileits_header').clientHeight
    const header = document.querySelector(".agileits_header");
    const scrollTop = window.scrollY;
    scrollTop >= navoffeset ? header.classList.add("fixed") : header.classList.remove("fixed");
  };

  return (
    <HeaderContent className="agileits_header">
      <Logo />
      {/* <div className="w3l_search">
        <form action="#" method="post">
          <input type="text" name="Product" value="Search a product..." />
          <input type="submit" value=" " />
        </form>
      </div> */}
      <HeaderRight className="w3l_header_right1">
        <HeaderCart />
        <HeaderLoginDrop />
      </HeaderRight>
      <div className="clearfix"> </div>
    </HeaderContent>
  );
};

export default Header;
