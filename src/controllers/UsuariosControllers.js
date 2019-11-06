const Usuarios = require('../models/Usuarios');
module.exports = {
  async store(req, res) {
    const usuario = await Usuarios.create(req.body);
    return res.json(usuario);
  },
  async list(req, res) {
    const usuario = await Usuarios.find({})
    return res.json(usuario);
  },
  async index(req, res) {
    const usuario = await Usuarios.findOne(req.body)
    return res.json(usuario);
  },
  async update(req, res) {
    const usuario = await Usuarios.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.json(usuario);
  },
  async destroy(req, res) {
    await Usuarios.deleteOne({ _id: req.params.id });
    return res.json({ message: "Excluído" });
  }

};