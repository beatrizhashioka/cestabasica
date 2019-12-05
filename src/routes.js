const express = require('express');
const routes = express.Router();
const ComercioControllers = require("./controllers/ComercioControllers");
const UsuariosControllers = require('./controllers/UsuariosControllers');
const SecaoControllers = require("./controllers/SecaoControllers");
const authMiddleware = require("./middlewares/auth");
const adminMiddleware = require("./middlewares/admin");

routes.use(authMiddleware);
routes.get("/usuarios/:email", UsuariosControllers.index);
routes.post("/secoes", SecaoControllers.store);


routes.post("/usuarios", UsuariosControllers.store);
routes.delete("/usuarios/:id", UsuariosControllers.destroy);
routes.get("/usuarios", UsuariosControllers.list);
routes.put("/usuarios/:id", UsuariosControllers.update);

routes.post("/comercios", adminMiddleware, ComercioControllers.store);
routes.delete("/comercios/:name", ComercioControllers.destroy);
routes.get("/comercios", ComercioControllers.list);
routes.put("/comercios/:name", ComercioControllers.update);
routes.post("/cotacao", ComercioControllers.store);
routes.post("/cotacao/:id", ComercioControllers.index);

// routes.get("/teste", (req, res) => res.json({ ok: true }));

module.exports = routes;