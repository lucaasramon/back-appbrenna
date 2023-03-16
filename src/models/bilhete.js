const mongoose = require("mongoose");

const bilheteSchema = new mongoose.Schema({
  rifa_id: Number,
  bilhete: Number,
  equipe: Number,
  bilheteVenda: [{
    meioPagamento: String,
    responsavelVenda: String,
    identificacaoPagamento: String,
    dataVenda: Date
    }],
  status: String
});

module.exports = mongoose.model("bilhetes", bilheteSchema);
