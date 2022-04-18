import { CLEAR_MESSAGE, SET_MESSAGE } from "../contants/action-type";

const initialState = {
  response: null,
};
export const messageReducers = (state = initialState, { payload, type }) => {
  switch (type) {
    case SET_MESSAGE:
      return { ...state, response: payload };
      break;
    case CLEAR_MESSAGE:
      return { ...state, response: null };
      break;
    default:
      return state;
  }
};
