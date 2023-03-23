import React from "react";
import "../Styles/Login.css";

const Login = () => {
  return (
    <div className="Login">
      <form>
        <h1 className="loginHeading">Login</h1>
        <div>
          <label htmlFor="email" className="nameLabel">
            Name
          </label>
          <input type="email" id="email" name="email" className="nameInput" />
        </div>
        <div>
          <label htmlFor="email" className="emailLabel">
            Email
          </label>
          <input type="email" id="email" name="email" className="emailInput" />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
