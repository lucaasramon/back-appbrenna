const mongoose = require('mongoose');

const rifasSchema = new mongoose.Schema({
  rifa_id: Number,
  titulo: String,
  dataInicio: Date,
  dataFim: Date,
  valorBilhete: Number,
  numeroInicial: Number,
  numeroFinal: Number,
});

module.exports = mongoose.model('rifas', rifasSchema);
