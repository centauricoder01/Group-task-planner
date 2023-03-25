const initstate = {
  sprint: [],
};

const TaskReducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case "GetValue":
      return { sprint: payload };
    default:
      return state;
  }
};

export { TaskReducer };
