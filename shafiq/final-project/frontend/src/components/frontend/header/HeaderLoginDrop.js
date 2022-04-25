import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CLEAR_MESSAGE, LOGOUT } from "../../../redux/contants/action-type";
import Action from "../../common/Action";

const HeaderUserContent = styled.div`
  display: flex;
  align-items: center;
  & .user_content {
    padding-right: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    & h5 {
      color: #fff;
    }
    & h6 {
      color: #fff;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      width: 118px;
      text-align: right;
    }
  }
`;

const HeaderLoginDrop = () => {
  const [settings, setSettings] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.storageStore);
  useEffect(() => {
    if (user) {
      setSettings(["Log Out"]);
    } else {
      setSettings(["Sign In"]);
    }
  }, [user]);

  const handelClickEvent = (actionKey) => {
    if (actionKey === "Sign In") {
      navigate("/login", { replace: true });
    } else if (actionKey === "Log Out") {
      dispatch({
        type: LOGOUT,
      });
      dispatch({
        type: CLEAR_MESSAGE,
      });
      if (user?.userInfo.role === "admin") {
        navigate("/login", { replace: true });
      }
    }
  };
  return (
    <HeaderUserContent>
      <div className="user_content">
        <h5>{user?.userInfo.role}</h5>
        <h6>{user?.userInfo.user}</h6>
      </div>
      <Action settings={settings} handelClickEvent={handelClickEvent} />
    </HeaderUserContent>
  );
};

export default HeaderLoginDrop;
