const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { LoginUser } = require("./Controllers/Login");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.post("/login", LoginUser);

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
