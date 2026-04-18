const mongoose = require('mongoose');

const pressReleaseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  content: { type: String, required: true },
  thumbnail: { type: String, default: '' },
}, { timestamps: true });

module.exports = mongoose.model('PressRelease', pressReleaseSchema);
