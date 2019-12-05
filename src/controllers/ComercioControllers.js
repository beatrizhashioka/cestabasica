const Comercios = require('../models/Comercio');
module.exports = {
  async store(req, res) {
    const { name } = req.body;
    if (await Comercios.findOne({ name })) {
      return res.status(400).json({ error: "Comercio já existente" });
    }
    const comercio = await Comercios.create(req.body);
    return res.json(comercio);
  },

  async list(req, res) {
    const comercio = await Comercios.find({})
    return res.json(comercio);
  },
  async index(req, res) {
    const comercio = await Comercios.findOne({ name: req.params.name })
    if (!comercio) {
      return res.status(400).json({ error: "Comércio não encontrado" });
    }
    return res.json(comercio);

  },
  async update(req, res) {
    const comercio = await Comercios.findByIdAndUpdate(req.params.name, req.body, { new: true });
    return res.json(comercio);
  },
  async destroy(req, res) {
    await Comercios.deleteOne({ _name: req.params.name });
    return res.json({ message: "Excluído" });
  }

};