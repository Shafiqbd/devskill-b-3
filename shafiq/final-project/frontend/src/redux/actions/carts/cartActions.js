import { toastr } from "react-redux-toastr";
import { addToCart, getAllCart, orderConfirm } from "../../../utils/api/CartApi";
import { ADD_CART, SET_CART_LIST } from "../../contants/action-type";

export const getAllCartList = () => async (dispatch) => {
  const cartList = await getAllCart();

  dispatch({
    type: SET_CART_LIST,
    payload: cartList,
  });
};

export const addToCartProduct = (cartData) => async (dispatch) => {
  const cart = await addToCart(cartData);
  if (cart) {
    debugger;
    const cartList = await getAllCart();
    if (cartList && cartList.products.length > 0) {
      document.body.classList.add("minicart-showing");
      dispatch({
        type: SET_CART_LIST,
        payload: cartList,
      });

      dispatch({
        type: ADD_CART,
        payload: cart,
      });
      toastr.error(cart.message);
    }
  } else {
    toastr.error(cart.message);
  }
};

export const orderCheckoutConfirm = () => async (dispatch) => {
  const order = await orderConfirm();
  debugger;
  if (order) {
    // dispatch({
    //   type: ORDER_CONFIRM,
    // });
    // toastr.error(order.message);
  } else {
    toastr.error(order.message);
  }
};
