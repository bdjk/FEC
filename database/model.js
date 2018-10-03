const mongoose = require('mongoose');
const db = require('./index.js');
// const random = require('mongoose-simple-random');
const itemSchema = mongoose.Schema({
  name: { type: String, require: true },
  picture: { type: String },
  cost: { type: Number },
  about: { type: String },
  rating: Number,
  index: Number
});
// itemSchema.plugin(random);

const Items = mongoose.model('Items', itemSchema, 'Items');

module.exports = Items;
