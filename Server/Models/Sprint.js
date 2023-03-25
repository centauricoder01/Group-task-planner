const mongoose = require("mongoose");

const reqString = { type: String, required: true };

const SprintSchema = mongoose.Schema({
  name: reqString,
  institute: reqString,
  task: [
    {
      status: reqString,
      detail: reqString,
      assignee: reqString,
    },
  ],
});

const SprintModel = mongoose.model("Sprint", SprintSchema);

module.exports = { SprintModel };
