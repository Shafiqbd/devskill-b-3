import { CHANGE_USER_INPUT, REMOVE_USER_MODEL, SET_SIGNUP, SET_USER, SET_USER_DETAILS } from "../contants/action-type";

const initialState = {
  userList: [],
  userData: {
    _id: "",
    email: "",
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    role: "",
    address: {
      city: "",
      street: "",
      number: "",
      zipcode: "",
    },
    phone: "",
  },
};
export const userReducers = (state = initialState, { payload, type }) => {
  switch (type) {
    case SET_USER:
      return { ...state, userList: payload };
      break;
    case SET_USER_DETAILS:
      return { ...state, userData: payload };
      break;
    case SET_SIGNUP:
      return { 
        ...state, 
        userData: {
          _id: "",
          email: "",
          username: "",
          password: "",
          firstname: "",
          lastname: "",
          role: "",
          address: {
            city: "",
            street: "",
            number: "",
            zipcode: "",
            geolocation: {
              lat: 0,
              long: 0,
            },
          },
          phone: "",
        }
      };
      break;
    case REMOVE_USER_MODEL:
      return { 
        ...state, 
        userData: {
          _id: "",
          email: "",
          username: "",
          password: "",
          firstname: "",
          lastname: "",
          role: "",
          address: {
            city: "",
            street: "",
            number: "",
            zipcode: "",
            geolocation: {
              lat: 0,
              long: 0,
            },
          },
          phone: "",
        }
      };
      break;
    case CHANGE_USER_INPUT:
      let userData = { ...state.userData };
      switch (payload.name) {
        case "city":
        case "street":
        case "number":
        case "zipcode":
          userData.address[payload.name] = payload.value;
          return { ...state, userData };
          break;
        default:
          userData[payload.name] = payload.value;
          return { ...state, userData };
          break;
      }
      break;
    default:
      return state;
  }
};
