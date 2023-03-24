import React from "react";
import "../Styles/Avatar.css";

const Avatar = () => {
  return (
    <div className="mainDiv">
      <div className="avatarDiv">
        <h1>Choose Avatar</h1>
        <div className="avatarImg">
          <img
            src="https://res.cloudinary.com/diverse/image/upload/v1679633801/diverse/sbbvjvjlkrdfxas2qfjz.png"
            alt="two"
          />
          <img
            src="https://res.cloudinary.com/diverse/image/upload/v1679633793/diverse/r8ke9awmk1tn2ybny0na.png"
            alt="one"
          />
          <img
            src="https://res.cloudinary.com/diverse/image/upload/v1679633761/diverse/ttitom6r3zrvetbokven.png"
            alt="one"
          />
          <img
            src="https://res.cloudinary.com/diverse/image/upload/v1679633724/diverse/xctj387ja7iqdp8vvoub.png"
            alt="one"
          />
          <img
            src="https://res.cloudinary.com/diverse/image/upload/v1679633786/diverse/xvxsh11gdpxqmo6wmbxs.png"
            alt="one"
          />
        </div>
        <button>Selected</button>
      </div>
    </div>
  );
};

export default Avatar;
