const mongoose = require("mongoose");

const dbConfig =
  "mongodb+srv://brenna:barro123@cluster0.ginqi.mongodb.net/?retryWrites=true&w=majority";

const connection = mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
