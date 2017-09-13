const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Timeclock = new Schema({
  vendor: { type: String, required: true },
  model: String,
  wholesale: String,
  retailPrice: String,
  description: String,
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Timeclock', Timeclock);