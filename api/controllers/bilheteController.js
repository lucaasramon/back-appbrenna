const Bilhetes = require('../models/bilhetes');

module.exports = {
  // Função que faz a busca no banco.
  async read(request, response) {
    const ordem = {bilhete:1}
    const appList = await Bilhetes.find().sort(ordem);

    return response.json(appList);
  },
  // Função que cria um registro no banco.
  async create(request, response) {
    const appCreated = await Bilhetes.create(request.body);
    return response.json(appCreated);
  },

  // Função que deleta o registro chamado pelo :id
  async delete(request, response) {
    const { id } = request.params;

    const equipeDeleted = await Bilhetes.findOneAndDelete({
      _id: id,
    });

    if (equipeDeleted) {
      return response.json(equipeDeleted);
    }

    return response.status(401).json({ error: 'Não foi encontrato nada para excluir' });
  },

  // Função que busca registro no mongo a partir de uma condição.
  async read(request, response) {
    const priority = request.query;
    const ordem = {bilhete:1}
    const priorityNotes = await Bilhetes.find(priority).sort(ordem);

    return response.json(priorityNotes);
  },

  //Função que busca um registro e altera para true ou false.
  async update(request, response) {
    const { id } = request.params;
    
    let filter = { _id: id };
    let update = { $set: request.body };
  
    try {
      await Bilhetes.updateOne(filter, update);
      const updatedDoc = await Bilhetes.findOne({_id: id});
      return response.json(updatedDoc);
    } catch (err) {
      console.error(err);
      return response.status(500).send('Erro interno do servidor');
    }
  }
  
};