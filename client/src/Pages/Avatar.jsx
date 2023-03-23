import React from "react";
import two from "../Assets/two.png";
import three from "../Assets/three.png";
import four from "../Assets/four.png";
import five from "../Assets/five.png";
import six from "../Assets/six.png";
import "../Styles/Avatar.css";

const Avatar = () => {
  return (
    <div className="mainDiv">
      <div className="avatarDiv">
        <h1>Choose Avatar</h1>
        <div className="avatarImg">
          <img src={two} alt="two" />
          <img src={three} alt="one" />
          <img src={four} alt="one" />
          <img src={five} alt="one" />
          <img src={six} alt="one" />
        </div>
        <button>Selected</button>
      </div>
    </div>
  );
};

export default Avatar;
