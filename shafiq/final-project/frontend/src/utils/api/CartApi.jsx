import authHeader from "../../hooks/authHeader";
import FetchApi from "./index";
// import Api from "./index";

// for access user
export const getAllCart = async () => {
  authHeader();
  try {
    const { data } = await FetchApi.get(`/cart`);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
export const addToCart = async (cartData) => {
  authHeader();
  try {
    const { data } = await FetchApi.post(`/cart`, {
      product: {
        id: cartData.id,
        quantity: cartData.quantity,
      },
    });
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
export const orderConfirm = async () => {
  authHeader();
  try {
    const { data } = await FetchApi.get(`/order/checkout`);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
