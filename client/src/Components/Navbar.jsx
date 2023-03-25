import React, { useState } from "react";
import "../Styles/Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Modal } from "antd";
import { AddSprint, getSprint } from "../Redux/TaskRedux/Action";

const Navbar = () => {
  const { user } = useSelector((ele) => ele.Auth);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [name, setName] = useState("");

  const HandleChange = (e) => {
    setName(e.target.value);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);

    dispatch(AddSprint(name, user.institute)).then((res) => {
      if (res.message === "Sprint Added") {
        dispatch(getSprint(user.institute));
        setName("");
      }
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="navbarDiv">
      <h2>Centauri</h2>
      <Button type="primary" onClick={showModal}>
        Add Sprint
      </Button>
      <div>
        <img
          src="https://res.cloudinary.com/diverse/image/upload/v1679633801/diverse/sbbvjvjlkrdfxas2qfjz.png"
          alt="two"
        />
        <p>@{user.institute}</p>
      </div>

      <Modal
        title="Add Task"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form>
          <Input
            placeholder="Heading"
            name="heading"
            value={name}
            onChange={HandleChange}
          />
        </form>
      </Modal>
    </div>
  );
};

// name,institute,

export default Navbar;
