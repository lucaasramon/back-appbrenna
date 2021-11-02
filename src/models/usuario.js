const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  nome: String,
  email: String,
  endereco: String,
  idade: Number,
  numero: Number,
  numeroEmergencia: Number,
  senha: String,
  priority: Boolean,
});

module.exports = mongoose.model("usuario", usuarioSchema);
