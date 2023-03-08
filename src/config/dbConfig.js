const mongoose = require("mongoose");
require('dotenv').config();


const dbConfig = process.env.DB_PASS;
const connection = mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
