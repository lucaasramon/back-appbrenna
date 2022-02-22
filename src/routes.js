const express = require("express");
const routes = express.Router();
const auserController = require("./controllers/usuario");
const fornecedor = require("./controllers/fornecedor");

// Rota usuario
routes.post("/usuario", auserController.create);
routes.get("/usuario", auserController.read);
routes.delete("/usuario/:id", auserController.delete);

// Rota fornecedor Cognitiva
routes.post("/fornecedor", fornecedor.create);
routes.get("/fornecedor", fornecedor.read);
routes.delete("/fornecedor/:id", fornecedor.delete);


module.exports = routes;
