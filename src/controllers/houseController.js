const House = require('../models/House');
const Character = require('../models/Character');

exports.getAll = async (req, res, next) => {
  try {
    const list = await House.find();
    res.json(list);
  } catch (err) { next(err); }
};

exports.getById = async (req, res, next) => {
  try {
    const house = await House.findById(req.params.id);
    if (!house) return res.status(404).json({ message: 'House not found' });

    const chars = await Character.find({ house: house._id });
    res.json({ house, members: chars });
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const newHouse = new House(req.body);
    await newHouse.save();
    res.status(201).json(newHouse);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const updated = await House.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ message: 'House not found' });
    res.json(updated);
  } catch (err) { next(err); }
};

exports.remove = async (req, res, next) => {
  try {

    const houseId = req.params.id;
    await Character.updateMany({ house: houseId }, { $unset: { house: "" } });
    const removed = await House.findByIdAndDelete(houseId);
    if (!removed) return res.status(404).json({ message: 'House not found' });
    res.json({ message: 'House removed and members unlinked' });
  } catch (err) { next(err); }
};
