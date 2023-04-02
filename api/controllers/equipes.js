const Equipes = require("../models/equipes");
const Bilhetes = require("../models/bilhetes");

async function atualizarBilhetes(equipeId, res) {
  const equipe = await Equipes.find({ _id: equipeId });
  const bilhetes = await Bilhetes.find({
    bilhete: { $gte: equipe[0].numeroInicial, $lte: equipe[0].numeroFinal },
  });
  let hasError = false;


  await Promise.all(
    bilhetes.map(async (bilhete) => {
      if (bilhete.equipe != "") {
        hasError = true;
      } else {
        bilhete.equipe = equipe[0].equipe;
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
  async read(request, response) {
    const ordem = { equipe: 1 };
    const appList = await Equipes.find().sort(ordem);

    return response.json(appList);
  },

  async create(request, response) {
      const novaEquipe = await Equipes.create(request.body);
      await atualizarBilhetes(novaEquipe._id, response);
  },

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

  async read(request, response) {
    const priority = request.query;

    const priorityNotes = await Equipes.find(priority);

    return response.json(priorityNotes);
  },

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
