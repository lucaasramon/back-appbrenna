const express = require("express");
const routes = express.Router();

const appController = require("./controllers/appController");
const auserController = require("./controllers/usuario");
const equipes = require("./controllers/equipes");
const priorityController = require("./controllers/priorityController");
const contentController = require("./controllers/contentController");

// Rota AppData
routes.post("/appData", appController.create);
routes.get("/appData", appController.read);
routes.delete("/appData/:id", appController.delete);

// Rota usuario
routes.post("/usuario", auserController.create);
routes.get("/usuario", auserController.read);
routes.delete("/usuario/:id", auserController.delete);

// Rota reestruturação Cognitiva
routes.post("/equipes", equipes.create);
routes.get("/equipes", equipes.read);
routes.delete("/equipes/:id", equipes.delete);

// Rota priority
routes.get("/priorities", priorityController.read);
routes.post("/priorities/:id", priorityController.update);

// Rota content
routes.post("/contents/:id", contentController.update);

module.exports = routes;
