const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  house: { type: mongoose.Schema.Types.ObjectId, ref: 'House', required: false },
  title: { type: String, default: '' },
  alive: { type: Boolean, default: true },
  age: { type: Number, min: 0 },
  bio: { type: String, default: '' },
  image: { type: String, default: '' } 
}, { timestamps: true });

module.exports = mongoose.model('Character', characterSchema);
