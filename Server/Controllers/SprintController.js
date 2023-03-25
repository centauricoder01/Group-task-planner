const { SprintModel } = require("../Models/Sprint");

const GetSprint = async (req, res) => {
  try {
    const { org } = req.body;
    console.log(org, "This is Server ORg");
    const Sprint = await SprintModel.find({ institute: org });
    res.send({ message: "Find all Sprint", sprint: Sprint });
  } catch (error) {
    res.send({ message: "Some Error", error });
  }
};

const AddSprint = async (req, res) => {
  try {
    const { name, institute } = req.body;
    const data = new SprintModel({
      name,
      institute,
    });

    let returnValue = await data.save();

    res.send({ message: "Sprint Added", value: returnValue });
  } catch (error) {
    res.send({ message: "Some Error Occured", error });
  }
};

const AddTask = async (req, res) => {
  try {
    const { id, status, detail, assignee } = req.body;

    let findbyID = await SprintModel.findById(id);

    let taskObj = {
      status,
      detail,
      assignee,
    };

    findbyID.task.push(taskObj);

    let returnValue = await findbyID.save();
    res.send({ message: "Task Added", user: returnValue });
  } catch (error) {
    res.send({ message: "Some Error Occured", error });
  }
};

const DeleteTask = async (req, res) => {
  try {
    const { sprintID, taskID } = req.body;

    let findbyID = await SprintModel.findById(sprintID);
    let newValue = findbyID.task.filter((ele) => {
      return ele._id !== taskID;
    });
    let returnValue = await findbyID.save();
    console.log(newValue);
    res.send({ message: "Value Deleted" });
  } catch (error) {
    res.send({ message: "Some Error", error });
  }
};

module.exports = { AddSprint, AddTask, DeleteTask, GetSprint };
