import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import "../Styles/Home.css";
import { GrEdit } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

import {
  AddTask,
  DeleteSprint,
  DeleteTask,
  getSprint,
  UpdatingTask,
} from "../Redux/TaskRedux/Action";
import { Input, Modal } from "antd";
import { Popconfirm } from "antd";
import { GetUser } from "../Redux/AuthRedux/Action";

const Home = () => {
  const dispatch = useDispatch();
  const { sprint } = useSelector((ele) => ele.Task);
  const { user } = useSelector((ele) => ele.Auth);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenTwo, setIsModalOpenTwo] = useState(false);
  const [allUser, setAllUser] = useState([]);

  const [sprintId, setsprintId] = useState("");

  const [Taskvalue, setTaskValue] = useState({
    status: "",
    details: "",
    assignee: "",
  });

  const [updateTaskValue, setUpdateTaskValue] = useState({
    status: "",
    details: "",
    assignee: "",
  });

  const HandleChange = (e) => {
    setTaskValue({ ...Taskvalue, [e.target.name]: e.target.value });
  };

  const HandleUpdateChange = (e) => {
    setUpdateTaskValue({ ...updateTaskValue, [e.target.name]: e.target.value });
  };

  const [UpdateTaskID, setUpdateTaskID] = useState({
    sprintID: "",
    taskID: "",
  });

  const showModal = (id) => {
    setIsModalOpen(true);
    setsprintId(id);
  };

  const showModalTwo = (elem, ele) => {
    setIsModalOpenTwo(true);
    setUpdateTaskValue({
      status: elem.status,
      details: elem.detail,
      assignee: elem.assignee,
    });

    setUpdateTaskID({
      sprintID: ele._id,
      taskID: elem._id,
    });
  };

  const handleOk = () => {
    setIsModalOpen(false);

    if (
      Taskvalue.assignee === "" ||
      Taskvalue.details === "" ||
      Taskvalue.status === ""
    ) {
      return alert("Please Fill all the Details");
    }
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

  const handleOkTwo = () => {
    setIsModalOpenTwo(false);

    dispatch(
      UpdatingTask(UpdateTaskID.sprintID, UpdateTaskID.taskID, updateTaskValue)
    ).then((res) => {
      if (res.message === "Tasked Updated") {
        dispatch(getSprint(user.institute));
      }
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleCancelTwo = () => {
    setIsModalOpenTwo(false);
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
    dispatch(GetUser(user.institute)).then((res) => {
      setAllUser(res.user);
    });
  }, [dispatch, user.institute]);
  return (
    <div>
      <Navbar />

      {sprint.length === 0 ? (
        <div className="noTaskDiv">
          <h1 style={{ textAlign: "center" }}>
            Please Create Some Sprint To show Here.
          </h1>
          <img
            src={
              "https://cdni.iconscout.com/illustration/premium/thumb/task-completion-6333613-5230173.png"
            }
            alt="task"
          />
        </div>
      ) : (
        <div className="mainTaskDiv">
          {sprint.map((ele, i) => (
            <div className="singleTaskDiv" key={i}>
              <div className="Heading">
                <h3>{ele.name}</h3>
                <div style={{ gap: "1rem" }}>
                  <button onClick={() => showModal(ele._id)}>Add</button>
                  <Popconfirm
                    title="Alert"
                    description="Do you really want to create this Sprint."
                    onConfirm={() => {
                      dispatch(DeleteSprint(ele._id)).then((res) => {
                        if (res.message === "Sprint Deleted") {
                          dispatch(getSprint(user.institute));
                        }
                      });
                    }}
                  >
                    <button>Delete</button>
                  </Popconfirm>
                </div>
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
                      <GrEdit
                        style={{ cursor: "pointer" }}
                        onClick={() => showModalTwo(elem, ele)}
                      />
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
      )}

      <Modal
        title="Add Task"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form>
          <select
            name="status"
            value={Taskvalue.status}
            onChange={HandleChange}
          >
            <option value="">Choose Status</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
          </select>

          <Input
            placeholder="Detail"
            name="details"
            value={Taskvalue.details}
            onChange={HandleChange}
          />

          <select
            name="assignee"
            value={Taskvalue.assignee}
            onChange={HandleChange}
          >
            <option value="">Choose Assignee</option>
            {allUser?.map((ele, i) => (
              <option value={ele.name} key={i}>
                {ele.name}
              </option>
            ))}
          </select>
        </form>
      </Modal>
      <Modal
        title="Update Task"
        open={isModalOpenTwo}
        onOk={handleOkTwo}
        onCancel={handleCancelTwo}
      >
        <form>
          <select
            name="status"
            value={updateTaskValue.status}
            onChange={HandleUpdateChange}
          >
            <option value="">Choose Status</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
          </select>
          <Input
            placeholder="Detail"
            name="details"
            value={updateTaskValue.details}
            onChange={HandleUpdateChange}
          />

          <select
            name="assignee"
            value={updateTaskValue.assignee}
            onChange={HandleUpdateChange}
          >
            <option value="">Choose Assignee</option>
            {allUser?.map((ele, i) => (
              <option value={ele.name} key={i}>
                {ele.name}
              </option>
            ))}
          </select>
        </form>
      </Modal>
    </div>
  );
};

export default Home;
