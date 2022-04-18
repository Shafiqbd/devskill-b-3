import React from "react";
import FooterCopy from "../../components/frontend/footer/FooterCopy";
import FooterPayments from "../../components/frontend/footer/FooterPayments";
import FooterSocial from "../../components/frontend/footer/FooterSocial";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="col-md-4 w3_footer_grid">
          <h3>information</h3>
          <ul className="w3_footer_grid_list">
            <li>
              <a>Events</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Best Deals</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Short Codes</a>
            </li>
          </ul>
        </div>
        <div className="col-md-4 w3_footer_grid">
          <h3>policy info</h3>
          <ul className="w3_footer_grid_list">
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>privacy policy</a>
            </li>
            <li>
              <a>terms of use</a>
            </li>
          </ul>
        </div>
        <div className="col-md-4 w3_footer_grid">
          <h3>what in stores</h3>
          <ul className="w3_footer_grid_list">
            <li>
              <a>Pet Food</a>
            </li>
            <li>
              <a>Frozen Snacks</a>
            </li>
            <li>
              <a>Kitchen</a>
            </li>
            <li>
              <a>Branded Foods</a>
            </li>
            <li>
              <a>">Households</a>
            </li>
          </ul>
        </div>
        <div className="clearfix"> </div>
        <div className="agile_footer_grids">
          <div className="col-md-3 w3_footer_grid agile_footer_grids_w3_footer">
            <FooterPayments />
          </div>
          <div className="col-md-3 w3_footer_grid agile_footer_grids_w3_footer">
            <div className="w3_footer_grid_bottom">
              <h5>connect with us</h5>
              <FooterSocial />
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>

        <FooterCopy />
      </div>
    </div>
  );
};

export default Footer;
