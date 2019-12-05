const Usuario = require("../models/Usuarios");
module.exports = {
  async store(req, res) {
    const { email, password } = req.body;
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(400).json({ error: "User not found" });
    } if (!(await usuario.compareHash(password))) {
      return res.status(400).json({ error: "Invalid Password" });
    }
    const { _id, name, isadmin } = usuario;
    return res.json({
      usuario: { _id, name, isadmin, email },
      token: Usuario.generateToken(usuario)
    });
  }

};