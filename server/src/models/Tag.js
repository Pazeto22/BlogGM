const mongoose = require("mongoose");
const findOneOrCreate = require("mongoose-findoneorcreate");

//Criação do modelo de dados.
const schema = mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  tituloLower: {
    type: String,
    required: true,
  },
});

schema.plugin(findOneOrCreate);
// 1° parametro: Nome do modelo
// 2° parametro: Esquema do modelo
// 3° parametro: Nome da coleção => em que os objetos criados a partir do modelo serão armazenados no MongoDB

// Exportação do modelo de dados.
module.exports = mongoose.model("Tag", schema, "tags");
