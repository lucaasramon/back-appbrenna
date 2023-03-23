const mongoose = require('mongoose');

const bilheteSchema = new mongoose.Schema({
  rifa_id: String,
  nomeRifa: String,
  bilhete: Number,
  equipe: String,
  bilheteVenda: [
    {
      meioPagamento: String,
      responsavelVenda: String,
      identificacaoPagamento: String,
      dataVenda: Date,
      quemComprou: String,
      valorBilhete: Number
    },
  ],
  status: Boolean,
});

module.exports = mongoose.model('bilhetes', bilheteSchema);
