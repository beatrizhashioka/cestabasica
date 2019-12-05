const { Schema, model } = require("mongoose");

const ComercioSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },

    streetName: {
      type: String,
      required: true
    },
    streetNumber: {
      type: Number,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    neighborhood: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Comercio", ComercioSchema);