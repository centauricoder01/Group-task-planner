import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import "../Styles/Home.css";
import { GrEdit } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { AddTask, DeleteTask, getSprint } from "../Redux/TaskRedux/Action";
import { Input, Modal } from "antd";
import { Popconfirm } from "antd";

const Home = () => {
  const dispatch = useDispatch();
  const { sprint } = useSelector((ele) => ele.Task);
  const { user } = useSelector((ele) => ele.Auth);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [sprintId, setsprintId] = useState("");
  const [Taskvalue, setTaskValue] = useState({
    status: "",
    details: "",
    assignee: "",
  });

  const HandleChange = (e) => {
    setTaskValue({ ...Taskvalue, [e.target.name]: e.target.value });
  };

  const showModal = (id) => {
    setIsModalOpen(true);
    setsprintId(id);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    dispatch(
      AddTask(sprintId, Taskvalue.status, Taskvalue.details, Taskvalue.assignee)
    ).then((res) => {
      if (res.message === "Task Added") {
        dispatch(getSprint(user.institute));
        setTaskValue({
          status: "",
          details: "",
          assignee: "",
        });
      }
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const DeleteTheTask = (sprintID, taskID) => {
    dispatch(DeleteTask(sprintID, taskID)).then((res) => {
      if (res.message === "Value Deleted") {
        dispatch(getSprint(user.institute));
      }
    });
  };

  useEffect(() => {
    dispatch(getSprint(user.institute));
  }, []);
  return (
    <div>
      <Navbar />
      <div className="mainTaskDiv">
        {sprint.map((ele, i) => (
          <div className="singleTaskDiv" key={i}>
            <div className="Heading">
              <h3>{ele.name}</h3>
              <button onClick={() => showModal(ele._id)}>Add</button>
            </div>
            {ele.task.map((elem, i) => (
              <div className="singleDiv" key={i}>
                <div className="firstDiv">
                  {elem.status === "Pending" ? (
                    <p style={{ backgroundColor: "red" }}>{elem.status}</p>
                  ) : (
                    <p style={{ backgroundColor: "green" }}>{elem.status}</p>
                  )}
                  <div>
                    <GrEdit style={{ cursor: "pointer" }} />
                    <Popconfirm
                      title="Alert"
                      description="Do you really want to create this task."
                      onConfirm={() => {
                        DeleteTheTask(ele._id, elem._id);
                      }}
                    >
                      <AiFillDelete style={{ cursor: "pointer" }} />
                    </Popconfirm>
                  </div>
                </div>
                <p>{elem.detail}</p>
                <p>{elem.assignee}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <Modal
        title="Add Task"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form>
          <Input
            placeholder="Status"
            name="status"
            value={Taskvalue.status}
            onChange={HandleChange}
          />
          <Input
            placeholder="Detail"
            name="details"
            value={Taskvalue.details}
            onChange={HandleChange}
          />
          <Input
            placeholder="Assignee"
            name="assignee"
            value={Taskvalue.assignee}
            onChange={HandleChange}
          />
        </form>
      </Modal>
    </div>
  );
};

export default Home;
