const mongoose = require('mongoose');

const monthInPicturesSchema = new mongoose.Schema({
  month: { type: String, required: true },
  year: { type: Number, required: true },
  thumbnail: { type: String, required: true },
  imageCount: { type: Number, default: 0 },
  images: [{ type: String }],
}, { timestamps: true });

module.exports = mongoose.model('MonthInPictures', monthInPicturesSchema);
