const mongoose = require("mongoose");

const equipesSchema = new mongoose.Schema({
  equipe: String,
  rifa_id: Number,
  valorBilhete: Number,
  componentesEquipe: Array,
  responsavel: String,
  numerosDeBilhetes: Array,
  priority: Boolean,
});

module.exports = mongoose.model("equipes", equipesSchema);
