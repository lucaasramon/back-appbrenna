const AppData = require("../models/appBrennaData");

module.exports = {
  // Função que busca registro no mongo a partir de uma condição.
  // Ex: Buscar somente titulo com o nome igual a "Lucas".
  async read(request, response) {
    const priority = request.query;

    const priorityNotes = await AppData.find(priority);

    return response.json(priorityNotes);
  },

  //Função que busca um registro e altera para true ou false.
  async update(request, response) {
    const { id } = request.params;

    const app = await AppData.findOne({ _id: id });

    if (app.priority) {
      app.priority = false;
    } else {
      app.priority = true;
    }

    await app.save();

    return response.json(app);
  },
};
