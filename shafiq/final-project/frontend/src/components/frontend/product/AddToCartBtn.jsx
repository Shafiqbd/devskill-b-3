import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addToCartProduct } from "../../../redux/actions/carts/cartActions";

const AddToCartBtn = ({ productData }) => {
  const { user } = useSelector((state) => state.storageStore);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddTocart = (data) => {
    if (data && user && user.userInfo) {
      const cartData = {
        id: data._id,
        quantity: 1,
      };
      dispatch(addToCartProduct(cartData));
    } else {
      navigate("/login", { replace: true });
    }
  };

  return (
    <fieldset>
      <input
        type="button"
        name="submit"
        value="Add to cart"
        className="button"
        onClick={() => handleAddTocart(productData)}
      />
    </fieldset>
  );
};

export default AddToCartBtn;
