const mongoose = require("mongoose");

const equipesSchema = new mongoose.Schema({
  equipe: String,
  rifa: String,
  valorBilhete: Number,
  componentesEquipe: Array,
  responsavel: String,
  numeroInicial: Number,
  numeroFinal: Number,
  priority: Boolean,
});

module.exports = mongoose.model("equipes", equipesSchema);
