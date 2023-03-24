const mongoose = require("mongoose");

const reqString = { type: String, required: true };

const AuthSchema = mongoose.Schema(
  {
    name: reqString,
    email: reqString,
    institute: reqString,
    avatar: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const AuthModel = mongoose.model("Users", AuthSchema);

module.exports = { AuthModel };
