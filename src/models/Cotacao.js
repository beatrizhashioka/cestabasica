
const { Schema, model } = require("mongoose");
const CotacaoSchema = new Schema(
  {
    month: {
      type: String,
      required: true
    },
    commerceId: [{
      type: Schema.Types.ObjectId,
      ref: "Comercio",
      required: true
    }],
    userId: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Cotacao", CotacaoSchema);