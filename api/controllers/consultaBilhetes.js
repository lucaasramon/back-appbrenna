const BilhetesConsulta = require("../models/bilhetes");

module.exports = {
  async read(request, response) {
    const ordem = {bilhete:1}
    const appList = await BilhetesConsulta.find().sort(ordem);
    
    return response.json(appList);
  },

  async read(request, response) {
    const priority = request.query;
    const ordem = {bilhete:1}
    const priorityFilter = await BilhetesConsulta.find(priority).sort(ordem);

    return response.json(priorityFilter);
  },
  
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

  async pegarParamURL(request, response) {
    const { id } = request.params;

    const app = await BilhetesConsulta.findOne({ _id: id });

    if (app.priority) {
      app.priority = false;
    } else {
      app.priority = true;
    }

    await app.save();

    return response.json(app);
  }
};
