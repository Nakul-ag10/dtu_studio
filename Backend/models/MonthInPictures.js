const mongoose = require("mongoose");

const monthInPicturesSchema = new mongoose.Schema(
  {
    month: { type: String, required: true },
    year: { type: Number, required: true },
    pdfPath: { type: String, required: true },
    thumbnail: { type: String, default: null },
  },
  { timestamps: true },
);

module.exports = mongoose.model("MonthInPictures", monthInPicturesSchema);
