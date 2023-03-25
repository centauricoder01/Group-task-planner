import React from "react";
import "../Styles/Navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((ele) => ele.Auth);
  return (
    <div className="navbarDiv">
      <h2>Centauri</h2>
      <div>
        <img
          src="https://res.cloudinary.com/diverse/image/upload/v1679633801/diverse/sbbvjvjlkrdfxas2qfjz.png"
          alt="two"
        />
        <p>@{user.institute}</p>
      </div>
    </div>
  );
};

export default Navbar;
