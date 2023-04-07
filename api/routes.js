const express = require('express');
const routes = express.Router();

const appController = require('./controllers/appController');
const auserController = require('./controllers/usuario');
const equipes = require('./controllers/equipes');
const bilhetes = require('./controllers/bilheteController');
const consultaBilhetes = require("./controllers/consultaBilhetes");
const priorityController = require('./controllers/priorityController');
const contentController = require('./controllers/contentController');
const gerenciarRifasController = require('./controllers/gerenciarRifasController');

// Rota AppData
routes.post('/appData', appController.create);
routes.get('/appData', appController.read);
routes.delete('/appData/:id', appController.delete);

// Rota ConsultaBilhetes
routes.get("/consultaBilhetes/:equipe", consultaBilhetes.readBilhetesEquipe);
routes.get("/consultaBilhetes/:id", consultaBilhetes.pegarParamURL);

// Rota usuario
routes.post('/usuario', auserController.create);
routes.get('/usuario', auserController.read);
routes.delete('/usuario/:id', auserController.delete);

// Rota reestruturação Cognitiva
routes.post('/equipes', equipes.create);
routes.post('/updateBilhete', equipes.updateBilhete);
routes.get('/equipes', equipes.read);
routes.get('/buscaNumeroBilheteEquipe/:id', equipes.idNumero);


// Rota bilhetes
routes.post("/bilhetes", bilhetes.create);
routes.post('/bilhetesUp/:id', bilhetes.update);
routes.get("/bilhetes", bilhetes.read);
routes.get("/bilhetes/:id", consultaBilhetes.pegarParamURL);
routes.delete("/bilhetes/:id", bilhetes.delete);


// Rota priority
routes.get('/priorities', priorityController.read);
routes.post('/priorities/:id', priorityController.update);

// Rota content
routes.post('/contents/:id', contentController.update);

// Rota Rifas
routes.get('/rifas', gerenciarRifasController.read);
routes.post('/rifas', gerenciarRifasController.create);

module.exports = routes;
