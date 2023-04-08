const Equipes = require("../models/equipes");
const Bilhetes = require("../models/bilhetes");

async function atualizarBilhetes(idEquipe, numeroInicial, numeroFinal, nomeEquipe, res) {
  const bilhetes = await Bilhetes.find({
    bilhete: { $gte: numeroInicial, $lte: numeroFinal },
  });
  let hasError = false;
  let arrayNumeroUtilizados = []
  for (const bilhete of bilhetes) {
    if (bilhete.equipe != "") {
      arrayNumeroUtilizados.push(bilhete.bilhete)
    }
  }
  for (const bilhete of bilhetes) {
    if (bilhete.equipe != "") {
      hasError = true;
      break;
    }
  }

  if (hasError) {
    arrayNumeroUtilizados.sort((a, b) => a - b);
    return res.status(400).json({ message: "Esses bilhetes já estão sendo utilizados: " +  arrayNumeroUtilizados});
  } else {
    await Promise.all(
      bilhetes.map(async (bilhete) => {
        bilhete.equipe = nomeEquipe;
        await bilhete.save();
      })
      );
      await Equipes.updateOne(
        { _id: idEquipe },
      { $push: { numerosDeBilhetes: [{
        numeroInicial: numeroInicial,
        numeroFinal: numeroFinal
      }]}})
      return res.status(200).json({ message: "Números de bilhetes salvos com sucesso."});
  }
}

module.exports = {

  async updateBilhete(request, response){
    const {idEquipe, numeroInicial, numeroFinal, nomeEquipe} = request.body;
    
    await atualizarBilhetes(idEquipe, numeroInicial, numeroFinal, nomeEquipe, response);
  },
  
  async create(request, response) {
      const result = await Equipes.create(request.body);

      return response.json(result);
  },

  async read(request, response) {
    const ordem = { equipe: 1 };
    const appList = await Equipes.find().sort(ordem);

    return response.json(appList);
  },

  async idNumero(request, response) {
    const {id} = request.params
    const equipe = await Equipes.find({
      _id: id,
    });

      return response.json(equipe);
  
  },

  async read(request, response) {
    const priority = request.query;

    const priorityNotes = await Equipes.find(priority);

    return response.json(priorityNotes);
  },

  async update(request, response) {
    const { id } = request.params;
    const result = await Equipes.updateOne({_id: id}, { $set: request.body });
    return response.json(result);
  },
};