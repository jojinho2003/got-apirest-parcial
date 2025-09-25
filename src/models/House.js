const mongoose = require('mongoose');

const houseSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, trim: true },
  region: { type: String, default: '' },
  words: { type: String, default: '' },
  coatOfArms: { type: String, default: '' },
  founded: { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('House', houseSchema);
