const Bilhete = require("../models/bilhetes");
const Rifas = require("../models/rifas");

module.exports = {
  // Função que faz a busca no banco.
  async read(request, response) {
    const ListaRifa = await Rifas.find();
    return response.json(ListaRifa);
  },

  async create(request, response) {
    const criarRifa = await Rifas.create(request.body);
    let valorTotal = criarRifa.numeroFinal - criarRifa.numeroInicial;
    valorTotal++;
    for (let i = 1; i <= valorTotal; i++) {
      Bilhete.create({
        rifa_id: criarRifa.rifa_id,
        bilhete: i,
        equipe: "",
        bilheteVenda: [
          {
            meioPagamento: "",
            responsavelVenda: "",
            identificacaoPagamento: "",
            dataVenda: "",
          },
        ],
        status: false,
      });
    }
    return response.json(criarRifa);
  },
};
