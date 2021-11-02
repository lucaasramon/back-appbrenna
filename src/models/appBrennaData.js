const mongoose = require("mongoose");

const appDataSchema = new mongoose.Schema({
  title: String,
  notes: String,
  priority: Boolean,
});

module.exports = mongoose.model("appData", appDataSchema);
