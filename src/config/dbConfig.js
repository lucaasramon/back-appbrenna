const mongoose = require("mongoose");

const dbConfig =
  "mongodb+srv://dev:fYKNUySCxzAcHnGC@cluster0.5f839.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connection = mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
