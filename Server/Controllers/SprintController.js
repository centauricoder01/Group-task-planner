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

    let findbyID = await SprintModel.findByIdAndUpdate(
      sprintID,
      { $pull: { task: { _id: taskID } } },

      { new: true }
    );

    res.send({ message: "Value Deleted", newID: findbyID });
  } catch (error) {
    res.send({ message: "Some Error", error });
  }
};

const UpdateTask = async (req, res) => {
  try {
    const { sprintID, taskID } = req.body;
    console.log(sprintID, taskID, req.body.updateTask);

    await SprintModel.findOneAndUpdate(
      { _id: sprintID, "task._id": taskID },
      {
        $set: {
          "task.$.status": req.body.updateTask.status,
          "task.$.detail": req.body.updateTask.details,
          "task.$.assignee": req.body.updateTask.assignee,
        },
      }
    );

    res.send({ message: "Tasked Updated" });
  } catch (error) {
    res.send({ message: "Some error", error });
  }
};

const DeleteSprint = async (req, res) => {
  try {
    const { sprintID } = req.body;
    await SprintModel.findByIdAndDelete(sprintID);
    res.send({ message: "Sprint Deleted" });
  } catch (error) {
    res.send({ message: "Some Error", error });
  }
};

module.exports = {
  AddSprint,
  AddTask,
  DeleteTask,
  GetSprint,
  UpdateTask,
  DeleteSprint,
};
