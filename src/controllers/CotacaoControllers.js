const Cotacao = require('../models/Cotacao');
const Comercio = require('../models/Comercio');
// const Usuarios = require('../models/Usuarios');
module.exports = {
  async store(req, res) {

    const cotacao = await Cotacao.create(req.body);
    await Comercio.update({ _id: cotacao.comercio }, { $push: { cotacao: cotacao._id } });
    return res.json(cotacao);
    // if (await Usuarios.findOne({ email })) {
    //   return res.status(400).json({ error: "User already exists!" });
  },
  async index(req, res) {
    const commerceId = res.params.id;
    const cotacao = await Cotacao.findOne({ _id: commerceId }).populate(["comercios", "user"]);
    return res.json(cotacao);

  }
};