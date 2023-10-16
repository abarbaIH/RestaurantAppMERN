const { Schema, model } = require("mongoose");
const bcrypt = require('bcryptjs')


const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Introduce el email'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Introduce una contraseña'],
      minlength: [2, 'La contraseña es demasiado corta']

    },
    username: {
      type: String,
      required: [true, 'Introduce el nombre de usuario'],
      trim: true,
      minlength: [2, 'El nombre de usuario es demasiado corto']
    }
  },
  {
    timestamps: true
  }
);


userSchema.pre('save', function (next) {

  const saltRounds = 10
  const salt = bcrypt.genSaltSync(saltRounds)
  const hashedPassword = bcrypt.hashSync(this.password, salt)
  this.password = hashedPassword

  next()
})

const User = model("User", userSchema);

module.exports = User;
