const mongoose = require("mongoose");

const dbConfig =
  "mongodb+srv://brenna:ramon123@cluster0.ginqi.mongodb.net/appData?retryWrites=true&w=majority";

const connection = mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
