const Usuarios = require('../models/Usuarios');
module.exports = {
  async store(req, res) {
    const { email } = req.body;
    if (await Usuarios.findOne({ email })) {
      return res.status(400).json({ error: "User already exists!" });
    }
    const usuario = await Usuarios.create(req.body);
    return res.json(usuario);
  },

  async list(req, res) {
    const usuario = await Usuarios.find({})
    return res.json(usuario);
  },
  async index(req, res) {
    const usuario = await Usuarios.findOne({ email: req.params.email })
    if (!usuario) {
      return res.status(400).json({ error: "User not found" });
    }
    return res.json(usuario);

  },
  async update(req, res) {
    const usuario = await Usuarios.findByIdAndUpdate(req.params.email, req.body, { new: true });
    return res.json(usuario);
  },
  async destroy(req, res) {
    await Usuarios.deleteOne({ _id: req.params.id });
    return res.json({ message: "Excluído" });
  }

};