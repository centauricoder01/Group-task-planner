import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Login.css";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { LoginUser } from "../Redux/AuthRedux/Action";

const Login = () => {
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  const [email, setemail] = useState("");
  const HandleChange = (e) => {
    setemail(e.target.value);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginUser(email)).then((res) => {
      if (res.message === "User Not found") {
        messageApi.open({
          type: "error",
          content: "User Not Found ",
          duration: 3,
        });
      } else {
        messageApi.open({
          type: "success",
          content: "Congrats, Welcome Back",
          duration: 3,
        });
      }
    });
  };
  return (
    <div className="Login">
      <form onSubmit={HandleSubmit}>
        <h1 className="loginHeading">Login</h1>
        <div>
          <label htmlFor="email" className="emailLabel">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="emailInput"
            value={email}
            onChange={HandleChange}
          />
        </div>
        <label>
          {" "}
          Dont't Have Account{" "}
          <Link to={"/signup"}>
            <span
              style={{ color: "red", fontWeight: "bold", cursor: "pointer" }}
            >
              Signup
            </span>
          </Link>
        </label>
        <button type="submit">{contextHolder}Submit</button>
      </form>
    </div>
  );
};

export default Login;
