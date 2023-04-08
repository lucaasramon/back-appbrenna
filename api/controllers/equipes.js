const Equipes = require("../models/equipes");
const Bilhetes = require("../models/bilhetes");

async function atualizarBilhetes(equipeId, numeroInicial, numeroFinal, nomeEquipe, res) {
  // const equipe = await Equipes.find({ _id: equipeId });
  // console.log(equipe)
  const bilhetes = await Bilhetes.find({
    bilhete: { $gte: numeroInicial, $lte: numeroFinal },
  });
  let hasError = false;


  await Promise.all(
    bilhetes.map(async (bilhete) => {
      if (bilhete.equipe != "") {
        hasError = true;
      } else {
        bilhete.equipe = nomeEquipe;
        await bilhete.save();
      }
      // res.json({ message: "Bilhetes atualizados com sucesso!" });
    })
  );

  if (hasError) {
    res.status(404).json({ message: "Esses bilhetes já estão sendo utilizados" });
  } else {
    res.json({ message: "Bilhetes atualizados com sucesso!" });
  }
}

module.exports = {

  async updateBilhete(request, response){
    const {idEquipe, numeroInicial, numeroFinal, nomeEquipe} = request.body;
    await Equipes.updateOne(
      { _id: idEquipe }, 
      { $push: { numerosDeBilhetes: [{
        numeroInicial: numeroInicial,
        numeroFinal: numeroFinal
      }]}}).exec(
        function(err, result) {
          if (err) {
            console.log(err)
          } else {
            console.log("Deu Certo", result)
            // tratamento de sucesso
          }
        }
      )
  
    // equipe.numeroDeBilhetes = bilhete
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

    console.log(id)
    const result = await Equipes.updateOne({_id: id}, { $set: request.body });
    console.log(result.modifiedCount)
    return response.json(result);
  },
};