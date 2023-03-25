import axios from "axios";
const URL = "https://gold-fly-garb.cyclic.app";

const getSprint = (org) => (dispatch) => {
  axios
    .post(`${URL}/getsprint`, { org })
    .then((res) => {
      dispatch({ type: "GetValue", payload: res.data.sprint });
    })
    .catch((err) => {
      console.log(err);
    });
};

const AddTask = (id, status, detail, assignee) => async (disptach) => {
  try {
    let data = await axios.post(`${URL}/task`, {
      id,
      status,
      detail,
      assignee,
    });
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const AddSprint = (name, institute) => async (dispatch) => {
  try {
    let data = await axios.post(`${URL}/sprint`, { name, institute });
    console.log(data.data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const DeleteTask = (sprintID, taskID) => async (dispatch) => {
  try {
    const data = await fetch(`${URL}/deletetask`, {
      method: "DELETE",
      body: JSON.stringify({ sprintID, taskID }),
      headers: { "Content-Type": "application/json" },
    });
    let res = await data.json();
    return res;
  } catch (error) {
    console.log(error);
  }
};

export { getSprint, AddTask, AddSprint, DeleteTask };
