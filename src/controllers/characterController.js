const Character = require('../models/Character');
const House = require('../models/House');

exports.getAll = async (req, res, next) => {
  try {
    const list = await Character.find().populate('house');
    res.json(list);
  } catch (err) { next(err); }
};

exports.getById = async (req, res, next) => {
  try {
    const char = await Character.findById(req.params.id).populate('house');
    if (!char) return res.status(404).json({ message: 'Character not found' });
    res.json(char);
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const data = req.body;
    if (data.houseName) {
      let house = await House.findOne({ name: data.houseName });
      if (house) data.house = house._id;
    }
    const newChar = new Character(data);
    await newChar.save();
    res.status(201).json(newChar);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const updated = await Character.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ message: 'Character not found' });
    res.json(updated);
  } catch (err) { next(err); }
};

exports.remove = async (req, res, next) => {
  try {
    const removed = await Character.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).json({ message: 'Character not found' });
    res.json({ message: 'Character removed' });
  } catch (err) { next(err); }
};
