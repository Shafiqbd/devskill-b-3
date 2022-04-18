import { toastr } from "react-redux-toastr";
import authHeader from "../../hooks/authHeader";
import FetchApi from "./index";
// import Api from "./index";

export const userLogin = async (user) => {
  try {
    const { data } = await FetchApi.post(`/signin`, {
      email: user.email,
      password: user.password,
    });
    return data;
  } catch (err) {
    toastr.error(err.message ?? err);
    return null;
  }
};
export const addUserSignUp = async (signUp) => {
  try {
    const { data } = await FetchApi.post(`/signup`, {
      email: signUp.email,
      username: signUp.username,
      password: signUp.password,
      firstname: signUp.firstname,
      lastname: signUp.lastname,
      address: {
        city: signUp.address.city,
        street: signUp.address.street,
        number: signUp.address.number,
        zipcode: signUp.address.zipcode,
        geolocation: {
          lat: signUp.geolocation ? signUp.geolocation.lat : 0,
          long: signUp.geolocation ? signUp.geolocation.long : 0,
        },
      },
      phone: signUp.phone,
    });
    return data;
  } catch (err) {
    toastr.error(err.message ?? err);
    return null;
  }
};

// for access admin user
export const getAllUser = async () => {
  authHeader();
  try {
    const { data } = await FetchApi.get(`/user`);
    return data;
  } catch (err) {
    toastr.error(err.message ?? err);
    return null;
  }
};
