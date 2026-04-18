const mongoose = require('mongoose');

const pressCoverageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  summary: { type: String, default: '' },
  source: { type: String, required: true },
  date: { type: String, required: true },
  link: { type: String, required: true },
  thumbnail: { type: String, default: '' },
}, { timestamps: true });

module.exports = mongoose.model('PressCoverage', pressCoverageSchema);
