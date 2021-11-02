const mongoose = require("mongoose");

const reestruturacaoCognitivaSchema = new mongoose.Schema({
  user: String,
  data: String,
  situacao: String,
  pensamento: String,
  emocao: String,
  comportamento: String,
  pensamentoAlternativo: String,
  priority: Boolean,
});

module.exports = mongoose.model(
  "reeconstrucaoCognitiva",
  reestruturacaoCognitivaSchema
);
