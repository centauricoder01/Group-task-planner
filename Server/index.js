const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const {
  AddAvatar,
  SignupUser,
  LoginUser,
  GetOrgUser,
} = require("./Controllers/Login");
const {
  AddSprint,
  AddTask,
  DeleteTask,
  GetSprint,
  UpdateTask,
  DeleteSprint,
} = require("./Controllers/SprintController");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send({ message: "Welcome Back, Sir" }));
app.post("/getUser", GetOrgUser);
app.post("/signup", SignupUser);
app.patch("/avatar", AddAvatar);
app.post("/login", LoginUser);
app.post("/sprint", AddSprint);
app.post("/getsprint", GetSprint);
app.post("/task", AddTask);
app.delete("/deletetask", DeleteTask);
app.patch("/updatetask", UpdateTask);
app.delete("/deletesprint", DeleteSprint);

mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () =>
  console.log(`Server started on ${process.env.PORT}`)
);
