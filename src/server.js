const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const routes = require('./routes');

const server = express();
server.use(express.json());
server.use(cors());

mongoose.connect("mongodb://localhost:27017/projetocestabasica",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
mongoose.set("useCreateIndex", true);
server.use(express.json());
server.use(routes);
server.listen(3333);
//   "/"=caminho, req=resquisicao, res=resposta