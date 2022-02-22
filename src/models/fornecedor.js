const mongoose = require("mongoose");

const fornecedorSchema = new mongoose.Schema({
  nome: String,
  razaoSocial: String,
  cnpj: String,
  segmento: String,
  endereco: String,
  telefone: String,
  email: String,
  priority: Boolean,
});

module.exports = mongoose.model(
  "fornecedor",
  fornecedorSchema
);
