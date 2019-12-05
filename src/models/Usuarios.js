const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");
const UsuarioSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    isadmin: {
      type: Boolean,
      default: false
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true
      // select: false
    },

  },
  {
    timestamps: true
  }
);
UsuarioSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 8);
});
UsuarioSchema.methods = {
  compareHash(password) {
    return bcrypt.compare(password, this.password);
  }
};
UsuarioSchema.statics = {
  generateToken({ id }) {
    return jwt.sign({ id }, authConfig.secret, {
      expiresIn: authConfig.ttl
    });
  }
};
module.exports = model("Usuario", UsuarioSchema);