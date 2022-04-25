import { toastr } from "react-redux-toastr";
import { getAllOrderList, updateOrder } from "../../utils/api/OrderApi";
import { SET_ORDER_LIST } from "../contants/action-type";

export const setOrderList = () => async (dispatch) => {
    
  const orderList = await getAllOrderList();
  dispatch({
      type: SET_ORDER_LIST,
      payload: orderList
  })
}
export const updateStatusOrder = (orderData) => async (dispatch) => {
    
  const order = await updateOrder(orderData._id, orderData);
  if (order) {
    dispatch(setOrderList());
    toastr.success("Order Update Successfully!!");
  }
}