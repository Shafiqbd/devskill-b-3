import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

const MiniCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartListData } = useSelector((state) => state.storageStore);

  const handleCartClose = () => {
    document.body.classList.remove("minicart-showing");
  };

  const handleCheckout = () => {
    document.body.classList.remove("minicart-showing");
    navigate("/Checkout", { replace: true });
  };
  return (
    <div id="PPMiniCart">
      {cartListData == null ? (
        <EmptyCart handleCartClose={handleCartClose} />
      ) : (
        <form>
          <button type="button" className="minicart-closer" onClick={handleCartClose}>
            ×
          </button>
          <ul>
            {cartListData?.products.map((item, index) => (
              <CartItem itemData={item} key={index} />
            ))}
          </ul>
          <div className="minicart-footer">
            <button className="minicart-submit" type="button" onClick={handleCheckout}>
              Check Out with
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default MiniCart;
