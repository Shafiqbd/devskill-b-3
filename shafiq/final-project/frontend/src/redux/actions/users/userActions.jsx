import { toastr } from "react-redux-toastr";
import { addUserSignUp, getAllUser, userLogin } from "../../../utils/api/UserApi";
import { CHANGE_USER_INPUT, SET_LOGIN, SET_MESSAGE, SET_SIGNUP, SET_USER } from "../../contants/action-type";

export const userSignIn = (user) => async (dispatch) => {
  const signIn = await userLogin(user);
  if (signIn != null) {
    if (signIn && signIn.userInfo) {
      dispatch({
        type: SET_MESSAGE,
        payload: signIn,
      });

      dispatch({
        type: SET_LOGIN,
        payload: signIn,
      });
      toastr.success(signIn.message);
    } else {
      dispatch({
        type: SET_MESSAGE,
        payload: signIn,
      });
      toastr.error(signIn.message);
    }
  }
};

export const userSignUp = (signUpData) => async (dispatch) => {
  const signUp = await addUserSignUp(signUpData);

  if (signUp) {
    dispatch({
      type: SET_SIGNUP,
      payload: signUp,
    });
    toastr.success(signUp.message);
  }
};

export const getAllUserList = () => async (dispatch) => {
  const userList = await getAllUser();

  dispatch({
    type: SET_USER,
    payload: userList,
  });
};

export const handleInputChange = (event) => (dispatch) => {
  const { name, value } = event.target;
  const inputData = {
    name,
    value,
  };
  dispatch({
    type: CHANGE_USER_INPUT,
    payload: inputData,
  });
};
