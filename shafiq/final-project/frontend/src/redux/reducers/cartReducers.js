import { ADD_CART } from "../contants/action-type";

const initialState = {
  cart: null,
};
export const cartReducers = (state = initialState, { payload, type }) => {
  switch (type) {
    case ADD_CART:
      return { ...state, cart: payload };
      break;
    default:
      return state;
  }
};
