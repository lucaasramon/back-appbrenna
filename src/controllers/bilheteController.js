const Equipes = require("../models/equipes");

module.exports = {
  // Função que faz a busca no banco.
  async read(request, response) {
    const appList = await Equipes.find();

    return response.json(appList);
  },
  // Função que cria um registro no banco.
  async create(request, response) {

    if (!numeroInicial || !numeroFinal) {
      return response
        .status(400)
        .json({ error: "Necessário um titulo/anotação" });
    }
    const appCreated = await Equipes.create(request.body);
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
