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
  },
  
  //Função que busca os registros por equipe.
  async readBilhetesEquipe(request, response) {
    const { equipe } = request.params;

    const app = await BilhetesConsulta.find({ equipe: equipe });

    if (app.priority) {
      app.priority = false;
    } else {
      app.priority = true;
    }

    return response.json(app);

  },
};
