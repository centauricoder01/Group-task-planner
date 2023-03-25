import axios from "axios";
const URL = "http://localhost:8080";

const getSprint = (org) => (dispatch) => {
  axios
    .post(`${URL}/getsprint`, { org })
    .then((res) => {
      console.log(res.data, "GetSprint Data");
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getSprint };
