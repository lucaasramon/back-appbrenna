const Equipes = require("../models/equipes");
const Bilhetes = require("../models/bilhetes");

module.exports = {

  async read(request, response) {
    const ordem = { equipe: 1 };
    const appList = await Equipes.find().sort(ordem);

    return response.json(appList);
  },

  async create(request, response) {
    const appCreated = await Equipes.create(request.body);

    await Bilhetes.updateMany(
      {
        _id: {
          $in: (
            await Bilhetes.find({ equipe: "" })
              .skip(appCreated.numeroInicial - 1)
              .limit(appCreated.numeroFinal + 1 - appCreated.numeroInicial)
              .sort({ bilhete: 1 })
          ).map(function (doc) {
            return doc._id;
          }),
        },
      },
      { $set: { equipe: appCreated.equipe } }
    );

    return response.json(appCreated);
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
