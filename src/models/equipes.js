const mongoose = require("mongoose");

const equipesSchema = new mongoose.Schema({
  equipe: String,
  responsavel: String,
  numeroInicial: Number,
  numeroFinal: Number,
  priority: Boolean,
});

module.exports = mongoose.model(
  "equipes",
  equipesSchema
);
