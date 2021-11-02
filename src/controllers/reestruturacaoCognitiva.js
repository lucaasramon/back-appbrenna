const ReestruturacaoCognitiva = require("../models/reestruturacaoCognitiva");

module.exports = {
  // Função que faz a busca no banco.
  async read(request, response) {
    const appList = await ReestruturacaoCognitiva.find();

    return response.json(appList);
  },
  // Função que cria um registro no banco.
  async create(request, response) {
    const {
      user,
      data,
      situacao,
      pensamento,
      emocao,
      comportamento,
      pensamentoAlternativo,
      priority,
    } = request.body;

    if (
      !situacao ||
      !pensamento ||
      !emocao ||
      !comportamento ||
      !pensamentoAlternativo
    ) {
      return response
        .status(400)
        .json({ error: "Necessário um titulo/anotação" });
    }
    const appCreated = await ReestruturacaoCognitiva.create({
      user,
      data,
      situacao,
      pensamento,
      emocao,
      comportamento,
      pensamentoAlternativo,
      priority,
    });
    return response.json(appCreated);
  },

  // Função que deleta o registro chamado pelo :id
  async delete(request, response) {
    const { id } = request.params;

    const userDeleted = await ReestruturacaoCognitiva.findOneAndDelete({
      _id: id,
    });

    if (userDeleted) {
      return response.json(userDeleted);
    }

    return response
      .status(401)
      .json({ error: "Não foi encontrato nada para excluir" });
  },

  // Função que busca registro no mongo a partir de uma condição.
  // Ex: Buscar somente titulo com o nome igual a "Lucas".
  async read(request, response) {
    const priority = request.query;

    const priorityNotes = await ReestruturacaoCognitiva.find(priority);

    return response.json(priorityNotes);
  },

  //Função que busca um registro e altera para true ou false.
  async update(request, response) {
    const { id } = request.params;

    const app = await ReestruturacaoCognitiva.findOne({ _id: id });

    if (app.priority) {
      app.priority = false;
    } else {
      app.priority = true;
    }

    await app.save();

    return response.json(app);
  },
};
