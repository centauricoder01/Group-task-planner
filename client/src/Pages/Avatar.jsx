import React, { useState } from "react";
import { AvatarAdded } from "../Redux/AuthRedux/Action";
import "../Styles/Avatar.css";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Avatar = () => {
  const [avatar, setAvatar] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const imgURL = [
    "https://res.cloudinary.com/diverse/image/upload/v1679633801/diverse/sbbvjvjlkrdfxas2qfjz.png",
    "https://res.cloudinary.com/diverse/image/upload/v1679633793/diverse/r8ke9awmk1tn2ybny0na.png",
    "https://res.cloudinary.com/diverse/image/upload/v1679633761/diverse/ttitom6r3zrvetbokven.png",
    "https://res.cloudinary.com/diverse/image/upload/v1679633724/diverse/xctj387ja7iqdp8vvoub.png",
    "https://res.cloudinary.com/diverse/image/upload/v1679633786/diverse/xvxsh11gdpxqmo6wmbxs.png",
  ];

  const AddAvatar = () => {
    if (avatar === "") {
      return messageApi.open({
        type: "info",
        content: "Please Select Some Avatar.",
        duration: 3,
      });
    }
    let localval = JSON.parse(localStorage.getItem("userAuth"));
    dispatch(AvatarAdded(avatar, localval._id)).then((res) => {
      if (res.message === "Avatar Added") {
        messageApi.open({
          type: "success",
          content: "Avatar Added",
          duration: 3,
        });
        navigate("/");
      } else {
        messageApi.open({
          type: "info",
          content: "Some error Occured.",
          duration: 3,
        });
      }
    });
  };

  return (
    <div className="mainDiv">
      <div className="avatarDiv">
        <h1>Choose Avatar</h1>
        <div className="avatarImg">
          {imgURL.map((ele, i) => (
            <img src={ele} key={i} alt="two" onClick={() => setAvatar(ele)} />
          ))}
        </div>
        <button onClick={AddAvatar}> {contextHolder}Selected</button>
      </div>
    </div>
  );
};

export default Avatar;
