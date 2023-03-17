const Bilhete = require('../models/bilhetes');
const Rifas = require('../models/rifas');

module.exports = {
  // Função que faz a busca no banco.
  async read(request, response) {
    const ListaRifa = await Rifas.find();
    return response.json(ListaRifa);
  },

  async create(request, response) {
    const criarRifa = await Rifas.create(request.body);
    console.log(response);
    let valorTotal = criarRifa.numeroFinal - criarRifa.numeroInicial;
    valorTotal++;
    console.log(valorTotal);
    // createAllBilhetes(valorTotal + 1);
    for (let i = 1; i <= valorTotal; i++) {
      Bilhete.create({
        rifa_id: criarRifa.id_counter,
        bilhete: i,
        equipe: '',
        bilheteVenda: [
          {
            meioPagamento: '',
            responsavelVenda: '',
            identificacaoPagamento: '',
            dataVenda: '',
          },
        ],
        status: false,
      });
    }
    return response.json(criarRifa);
  },

  createAllBilhetes(quantidade) {
    console.log(quantidade);
  },
};
