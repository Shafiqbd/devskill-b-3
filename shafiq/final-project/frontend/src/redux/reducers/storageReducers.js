import { LOGOUT, ORDER_CONFIRM, SET_CART_LIST, SET_LOGIN } from "../contants/action-type";

const initialState = {
  cartListData: null,
  user: null,
};
export const storageReducers = (state = initialState, { payload, type }) => {
  switch (type) {
    case SET_LOGIN:
      return { ...state, user: payload };
      break;
    case SET_CART_LIST:
      return { ...state, cartListData: payload };
      break;
    case ORDER_CONFIRM:
      return { ...state, cartListData: null };
      break;
    case LOGOUT:
      return { ...state, user: null };
      break;
    default:
      return state;
  }
};
