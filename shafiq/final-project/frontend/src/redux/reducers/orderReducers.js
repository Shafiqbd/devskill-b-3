import { SET_ORDER_LIST } from "../contants/action-type";

const initialState = {
  orderList: [],
};
export const orderReducers = (state = initialState, { payload, type }) => {
  switch (type) {
    case SET_ORDER_LIST:
      return { ...state, orderList: payload };
      break;
    default:
      return state;
  }
};
