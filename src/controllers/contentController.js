const AppData = require("../models/appBrennaData");

module.exports = {
  // Função que consulta por id e altera o elemento do registro que foi especificado.
  async update(request, response) {
    const { id } = request.params;
    const { notes } = request.body;
    const appContent = await AppData.findOne({ _id: id });

    if (notes) {
      appContent.notes = notes;
      await appContent.save();
    }

    return response.json(appContent);
  },
};
