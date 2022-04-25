import { toastr } from "react-redux-toastr";
import { addUser, addUserSignUp, deleteUser, getAllUser, getUserDetails, updateUser, userLogin } from "../../../utils/api/UserApi";
import { CHANGE_USER_INPUT, SET_LOGIN, SET_MESSAGE, SET_SIGNUP, SET_USER, SET_USER_DETAILS } from "../../contants/action-type";

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
    toastr.success("Sign Up Save Successfully!!");
  }
};

export const addUserInfo = (userData) => async (dispatch) => {
  const user = await addUser(userData);

  if (user) {
    dispatch({
      type: SET_SIGNUP,
      payload: user,
    });
    toastr.success("User Save Successfully!!");
  }
};

export const updateUserInfo = (userData, userId) => async (dispatch) => {
  const user = await updateUser(userData, userId);

  if (user) {
    dispatch({
      type: SET_SIGNUP,
      payload: user,
    });
    dispatch(getAllUserList());
    toastr.success("User Update Successfully!!");
  }
};

export const getDeleteUser = (userId) => async (dispatch) => {
  const user = await deleteUser(userId);
  if (user) {
    dispatch(getAllUserList());
    toastr.success("User Delete Successfully!!");
  }
};

export const getAllUserList = () => async (dispatch) => {
  const userList = await getAllUser();

  dispatch({
    type: SET_USER,
    payload: userList,
  });
};
export const getUserByUserId = (userId) => async (dispatch) => {
  const userData = await getUserDetails(userId);

  if (userData) {
    dispatch({
      type: SET_USER_DETAILS,
      payload: userData,
    });
  }
  
};

export const handleUserInputChange = (event) => (dispatch) => {
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
