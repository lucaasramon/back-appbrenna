const Equipes = require("../models/equipes");
const Bilhetes = require('../models/bilhetes');


module.exports = {
  // Função que faz a busca no banco.
  async read(request, response) {
    const appList = await Equipes.find();

    return response.json(appList);
  },
  // Função que cria um registro no banco.
  async create(request, response) {
    const appCreated = await Equipes.create(request.body);

    for (let i = appCreated.numeroInicial; i <= appCreated.numeroFinal; i++) {
      const result = await Bilhetes.findOne({bilhete: i})
      result.equipe = appCreated.equipe
      await result.save();
    }
    return response.json(appCreated);
  },

  // Função que deleta o registro chamado pelo :id
  async delete(request, response) {
    const { id } = request.params;

    const equipeDeleted = await Equipes.findOneAndDelete({
      _id: id,
    });

    if (equipeDeleted) {
      return response.json(equipeDeleted);
    }

    return response
      .status(401)
      .json({ error: "Não foi encontrato nada para excluir" });
  },

  // Função que busca registro no mongo a partir de uma condição.
  // Ex: Buscar somente titulo com o nome igual a "Lucas".
  async read(request, response) {
    const priority = request.query;

    const priorityNotes = await Equipes.find(priority);

    return response.json(priorityNotes);
  },

  //Função que busca um registro e altera para true ou false.
  async update(request, response) {
    const { id } = request.params;

    const app = await Equipes.findOne({ _id: id });

    if (app.priority) {
      app.priority = false;
    } else {
      app.priority = true;
    }

    await app.save();

    return response.json(app);
  },
};
