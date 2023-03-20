const AppData = require("../models/appBrennaData");

module.exports = {
  // Função que faz a busca no banco.
  async read(request, response) {
    const appList = await AppData.find();

    return response.json(appList);
  },

  // Função que cria um registro no banco.
  async create(request, response) {
    const { title, notes, priority } = request.body;

    if (!notes || !title) {
      return response
        .status(400)
        .json({ error: "Necessário um titulo/anotação" });
    }
    const appCreated = await AppData.create({
      title,
      notes,
      priority,
    });
    return response.json(appCreated);
  },

  // Função que deleta o registro chamado pelo :id
  async delete(request, response) {
    const { id } = request.params;

    const appDeleted = await AppData.findOneAndDelete({ _id: id });

    if (appDeleted) {
      return response.json(appDeleted);
    }

    return response
      .status(401)
      .json({ error: "Não foi encontrato nada para excluir" });
  },
};
