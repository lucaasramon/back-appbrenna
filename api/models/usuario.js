const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  nome: String,
  equipeId: String,
  email: String,
  endereco: String,
  idade: String,
  numero: String,
  numeroEmergencia: String,
  senha: String,
  isAdmin: Boolean,
  priority: Boolean,
});

module.exports = mongoose.model("usuario", usuarioSchema);
