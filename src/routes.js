const express = require('express');
const routes = express.Router();
const UsuariosControllers = require('./controllers/UsuariosControllers');

routes.post("/usuarios", UsuariosControllers.store);
routes.get("/usuarios/:id", UsuariosControllers.index);
routes.get("/usuarios", UsuariosControllers.list);
routes.delete("/usuarios/:id", UsuariosControllers.destroy);
routes.put("/usuarios/:id", UsuariosControllers.update);

module.exports = routes;