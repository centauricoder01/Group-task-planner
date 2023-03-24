let localstor = JSON.parse(localStorage.getItem("userAuth"));
const Initstate = {
  isAuth: localstor ? true : false,
  user: JSON.parse(localStorage.getItem("userAuth")) || {},
};

const AuthReducer = (state = Initstate, { type, payload }) => {
  switch (type) {
    case "SignupSucessfull":
      return { isAuth: true, user: payload.findUser };
    default:
      return state;
  }
};

export { AuthReducer };
