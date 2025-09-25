require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../src/config/db');
const House = require('../src/models/House');
const Character = require('../src/models/Character');

const seed = async () => {
  await connectDB();

  try {
    await House.deleteMany({});
    await Character.deleteMany({});

    const stark = await House.create({
      name: 'House Stark',
      region: 'The North',
      words: 'Winter Is Coming',
      coatOfArms: 'A grey direwolf on a white field'
    });

    const lannister = await House.create({
      name: 'House Lannister',
      region: 'The Westerlands',
      words: 'Hear Me Roar',
      coatOfArms: 'A golden lion rampant on a crimson field'
    });

    const arya = await Character.create({
      name: 'Arya Stark',
      title: 'No One',
      house: stark._id,
      alive: true,
      age: 18,
      bio: 'A young girl from Winterfell, skilled with Needle.'
    });

    const ned = await Character.create({
      name: 'Eddard Stark',
      title: 'Lord of Winterfell',
      house: stark._id,
      alive: false,
      age: 35,
      bio: 'Former Warden of the North.'
    });

    const tyrion = await Character.create({
      name: 'Tyrion Lannister',
      title: 'Hand of the Queen',
      house: lannister._id,
      alive: true,
      age: 32,
      bio: 'Known as the Imp; intelligent and witty.'
    });

    console.log('Seed complete');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();
