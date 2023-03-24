import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Login.css";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { SignupUser } from "../Redux/AuthRedux/Action";

const Signup = () => {
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const [signupDetails, setsignupDetails] = useState({
    name: "",
    email: "",
    institute: "",
  });

  const HandleChange = (e) => {
    setsignupDetails({ ...signupDetails, [e.target.name]: e.target.value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    dispatch(SignupUser(signupDetails)).then((res) => {
      if (res.message === "Successful") {
        messageApi.open({
          type: "success",
          content: "Congrats, You have Signup",
          duration: 3,
        });
        navigate("/avatar");
      } else {
        messageApi.open({
          type: "error",
          content: "Some Error Occured, Please Try Again.",
          duration: 3,
        });
      }
    });
  };

  return (
    <div className="Login">
      <form onSubmit={HandleSubmit}>
        <h1 className="loginHeading">Signup</h1>
        <div>
          <label className="nameLabel">Name</label>
          <input
            type="text"
            name="name"
            className="nameInput"
            value={signupDetails.name}
            onChange={HandleChange}
            required
          />
        </div>
        <div>
          <label className="emailLabel">Email</label>
          <input
            type="email"
            name="email"
            className="emailInput"
            value={signupDetails.email}
            onChange={HandleChange}
            required
          />
        </div>
        <div>
          <label className="emailLabel">Institute</label>
          <input
            type="text"
            name="institute"
            className="emailInput"
            value={signupDetails.institute}
            onChange={HandleChange}
            required
          />
        </div>
        <label>
          {" "}
          Already Have Account{" "}
          <Link to={"/login"}>
            <span
              style={{ color: "red", fontWeight: "bold", cursor: "pointer" }}
            >
              Login
            </span>
          </Link>
        </label>
        <button type="submit">{contextHolder}Submit</button>
      </form>
    </div>
  );
};

export default Signup;
