const BilhetesConsulta = require("../models/consultaBilhetes");

module.exports = {
  // Função que faz a busca no banco.
  async read(request, response) {
    const appList = await BilhetesConsulta.find();

    return response.json(appList);
  },
  
  // Função que busca registro no mongo a partir de uma condição.
  // Ex: Buscar somente STATUS = "PAGO"; EQUIPE = "VERDE"
  async read(request, response) {
    const priority = request.query;

    const priorityFilter = await BilhetesConsulta.find(priority);

    return response.json(priorityFilter);
  }  
};
