const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  nome: String,
  email: String,
  endereco: String,
  idade: String,
  numero: String,
  numeroEmergencia: String,
  senha: String,
  priority: Boolean,
});

module.exports = mongoose.model("usuario", usuarioSchema);
