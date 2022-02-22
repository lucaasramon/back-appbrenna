const Fornecedor = require("../models/fornecedor");

module.exports = {
  // Função que faz a busca no banco.
  async read(request, response) {
    const appList = await Fornecedor.find();

    return response.json(appList);
  },
  // Função que cria um registro no banco.
  async create(request, response) {
    const {
      nome,
      razaoSocial,
      cnpj,
      segmento,
      endereco,
      telefone,
      email,
      priority,
    } = request.body;

    if (
      !cnpj ||
      !segmento ||
      !endereco ||
      !telefone ||
      !email
    ) {
      return response
        .status(400)
        .json({ error: "Um ou mais campo está vazio!" });
    }
    const appCreated = await Fornecedor.create({
      nome,
      razaoSocial,
      cnpj,
      segmento,
      endereco,
      telefone,
      email,
      priority,
    });
    return response.json(appCreated);
  },

  // Função que deleta o registro chamado pelo :id
  async delete(request, response) {
    const { id } = request.params;

    const userDeleted = await Fornecedor.findOneAndDelete({
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

    const priorityNotes = await Fornecedor.find(priority);

    return response.json(priorityNotes);
  },

  //Função que busca um registro e altera para true ou false.
  async update(request, response) {
    const { id } = request.params;

    const app = await Fornecedor.findOne({ _id: id });

    if (app.priority) {
      app.priority = false;
    } else {
      app.priority = true;
    }

    await app.save();

    return response.json(app);
  },
};
