import axios from "axios";
const URL = "https://gold-fly-garb.cyclic.app";

const SignupUser = (userData) => async (dispatch) => {
  try {
    const data = await axios.post(`${URL}/signup`, userData);
    localStorage.setItem("userAuth", JSON.stringify(data.data.user));
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const AvatarAdded = (value, id) => async (dispatch) => {
  try {
    let data = await axios.patch(`${URL}/avatar`, { value, id });
    localStorage.setItem("userAuth", JSON.stringify(data.data.findUser));
    dispatch({ payload: data.data, type: "SignupSucessfull" });
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const LoginUser = (email) => async (dispatch) => {
  try {
    let data = await axios.post(`${URL}/login`, { email });
    if (data.data.message !== "User Not found") {
      localStorage.setItem("userAuth", JSON.stringify(data.data.findUser));
      dispatch({ payload: data.data, type: "SignupSucessfull" });
    }

    console.log(data.data);
    return data.data;
  } catch (error) {
    console.log("Some Error");
  }
};

export { SignupUser, AvatarAdded, LoginUser };
