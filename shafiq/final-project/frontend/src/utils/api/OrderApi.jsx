import authHeader from "../../hooks/authHeader";
import FetchApi from "./index";

export const getAllOrderList = async () => {
  try {
    authHeader();
    const { data } = await FetchApi.get(`/order`);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
export const updateOrder = async (orderId, orderData) => {
  try {
    authHeader();
    debugger;
    const { data } = await FetchApi.patch(`/order/${orderId}`,
    {
      status: orderData.status
    });
    return data;
  } catch (err) {
    throw new Error(err);
  }
};