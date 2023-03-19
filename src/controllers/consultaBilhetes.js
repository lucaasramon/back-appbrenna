const BilhetesConsulta = require("../models/bilhetes");

module.exports = {
  // Função que faz a busca no banco.
  async read(request, response) {
    const ordem = {bilhete:1}
    const appList = await BilhetesConsulta.find().sort(ordem);
    
    return response.json(appList);
  },
  
  // Função que busca registro no mongo a partir de uma condição.
  // Ex: Buscar somente STATUS = "PAGO"; EQUIPE = "VERDE"
  async read(request, response) {
    const priority = request.query;
    const ordem = {bilhete:1}
    const priorityFilter = await BilhetesConsulta.find(priority).sort(ordem);

    return response.json(priorityFilter);
  },
  
  //Função que busca os registros por equipe.
  async readBilhetesEquipe(request, response) {
    const { equipe } = request.params;
    const ordem = {bilhete:1}
    const app = await BilhetesConsulta.find({ equipe: equipe }).sort(ordem);

    if (app.priority) {
      app.priority = false;
    } else {
      app.priority = true;
    }

    return response.json(app);

  },
};
