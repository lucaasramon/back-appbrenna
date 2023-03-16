const Rifas = require('../models/rifas');

module.exports = {
  // Função que faz a busca no banco.
  async read(request, response) {
    const ListaRifa = await Rifas.find();
    return response.json(ListaRifa);
  },

  async create(request, response) {
    const criarRifa = await Rifas.create(request.body);
    return response.json(criarRifa);
  },


};
