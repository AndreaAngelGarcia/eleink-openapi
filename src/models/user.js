const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  birthday: { type: String, format: Date, required: true },
  phone: { type: Number, unique: true, required: true },
  password: { type: String, required: true },
  userInstagram: { type: String, unique: true },
  rol: { type: String, enum: ['admin', 'client'], required: true },
});

// eslint-disable-next-line func-names, consistent-return
userSchema.pre('save', async function (next) {
  const user = this;

  if (user.rol !== 'admin') {
    return next();
  }

  const count = await this.model('Users').countDocuments({ rol: 'admin' });
  if (count > 0) {
    const error = new Error('Ya hay un usuario con rol de "admin" en la base de datos');
    return next(error);
  }

  next();
});

module.exports = model('Users', userSchema);
