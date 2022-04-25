import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toastr } from "react-redux-toastr";
import { useNavigate } from "react-router";
import styled from "styled-components";
import CheckoutProductCalculation from "../../components/frontend/product/CheckoutProductCalculation";
import CheckoutTable from "../../components/frontend/product/CheckoutTable";
import { orderCheckoutConfirm } from "../../redux/actions/carts/cartActions";

const CheckOutRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 3em;
  margin-left: -7px;
  margin-right: -7px;
  & .checkout-right {
    width: 66.66666667%;
    margin: 0px;
    padding-left: 7px;
    padding-right: 7px;
  }
  & .checkout-left {
    width: 33.33333333%;
    margin: 0px;
    padding-top: 61.39px;
    padding-left: 7px;
    padding-right: 7px;
    display: flex;
    flex-direction: column;
    & .checkout-right-basket {
      width: 100%;
      display: flex;
      & a {
        width: 100%;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
      }
    }
  }
`;

const CheckOut = () => {
  const { cartListData } = useSelector((state) => state.storageStore);
  const { user } = useSelector((state) => state.storageStore);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = cartListData ? cartListData.products : [];

  const handleConfirmOrder = () => {
    if (user && user.userInfo) {
      if (cartListData) {
        dispatch(orderCheckoutConfirm());
      } else {
        toastr.error("Please first cart add!!");
      }
    } else {
      navigate("/login", { replace: true });
    }
  };
  return (
    <div className="privacy about">
      <h3>
        Chec<span>kout</span>
      </h3>
      <CheckOutRow>
        <div className="checkout-right">
          <h4>Your shopping cart contains: <span>{products.length} Products</span></h4>
          <CheckoutTable cartListData={cartListData} />
        </div>

        <div className="checkout-left">
          <div className="checkout-left-basket">
            <h4>Continue to basket</h4>
            <CheckoutProductCalculation cartListData={cartListData} />
          </div>
          <div className="address_form_agile">
            <div className="checkout-right-basket">
              <a onClick={handleConfirmOrder}>
                Confirm Order
                {/* <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span> */}
              </a>
            </div>
          </div>

          <div className="clearfix"> </div>
        </div>
      </CheckOutRow>
    </div>
  );
};

export default CheckOut;
