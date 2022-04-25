import $ from "jquery";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { handleUserInputChange, userSignIn, userSignUp } from "../../redux/actions/users/userActions";

const LoginArea = styled.div``;

const loginModel = {
  email: "",
  password: "",
};

const Login = () => {
  const [login, setLogin] = useState(loginModel);
  const [toggleName, setToggleName] = useState("Sign Up");
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.storageStore);
  const { response } = useSelector((state) => state.messageStore);
  const { userData } = useSelector((state) => state.userStore);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getAllCartList());
    if (response && response.userInfo) {
      if (response?.userInfo.role === "user") {
        navigate("/", { replace: true });
      } else if (response?.userInfo.role === "admin") {
        navigate("/admin", { replace: true });
      }
    }
  }, [response]);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setLogin({ ...login, [name]: value });
  };

  const handleToggle = () => {
    if (toggleName === "Sign Up") {
      setToggleName("Login");
    } else {
      setToggleName("Sign Up");
    }

    $(`.form`).animate(
      {
        height: "toggle",
        "padding-top": "toggle",
        "padding-bottom": "toggle",
        opacity: "toggle",
      },
      "slow"
    );
  };

  return (
    <LoginArea>
      <div className="w3_login">
        <h3>Login {"&"} Sign Up</h3>
        <div className="w3_login_module">
          <div className="module form-module">
            <div className="toggle" id="toggle" onClick={handleToggle}>
              <i className={toggleName === "Sign Up" ? "fa fa-pencil" : "fa fa-times"}></i>
              <div className="tooltip">{toggleName}</div>
            </div>

            <div className="form">
              <h2>Login to your account</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  dispatch(userSignIn(login));
                }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={(e) => handleOnChange(e)}
                  value={login.email}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={(e) => handleOnChange(e)}
                  value={login.password}
                />
                <input type="submit" value="Login" />
              </form>
            </div>

            <div className="form">
              <h2>Create an account</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  dispatch(userSignUp(userData));
                }}
              >
                <div className="row">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="firstname"
                      value={userData.firstname}
                      onChange={(e) => dispatch(handleUserInputChange(e))}
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="lastname"
                      value={userData.lastname}
                      onChange={(e) => dispatch(handleUserInputChange(e))}
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
                <input
                  type="text"
                  name="username"
                  value={userData.username}
                  onChange={(e) => dispatch(handleUserInputChange(e))}
                  placeholder="User Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={(e) => dispatch(handleUserInputChange(e))}
                  placeholder="Email"
                  required
                />
                <input
                  type="password"
                  name="password"
                  value={userData.password}
                  onChange={(e) => dispatch(handleUserInputChange(e))}
                  placeholder="Password"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  value={userData.phone}
                  onChange={(e) => dispatch(handleUserInputChange(e))}
                  placeholder="Phone"
                />
                <div className="row">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="city"
                      value={userData.address.city}
                      onChange={(e) => dispatch(handleUserInputChange(e))}
                      placeholder="City"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="street"
                      value={userData.address.street}
                      onChange={(e) => dispatch(handleUserInputChange(e))}
                      placeholder="Street"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="number"
                      value={userData.address.number}
                      onChange={(e) => dispatch(handleUserInputChange(e))}
                      placeholder="Number"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="zipcode"
                      value={userData.address.zipcode}
                      onChange={(e) => dispatch(handleUserInputChange(e))}
                      placeholder="Zipcode"
                    />
                  </div>
                </div>
                <input type="submit" value="Sgin Up" />
              </form>
            </div>
            <div className="cta">
              <a href="#">Forgot your password?</a>
            </div>
          </div>
        </div>
      </div>
    </LoginArea>
  );
};

export default Login;
