const Usuario = require("../models/Usuarios");
module.exports = async (req, res, next) => {
  //  find em Usuario pelo id, guardar em uma const

  const usuario = await Usuario.findById(req.userId)
  //  verificar se o usuario é administrador
  if (usuario.isadmin) {
    return next();
  }
  return res.status(401).json({ error: "Unathorized user" });
};