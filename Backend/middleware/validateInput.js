// Input validation helper middleware
const mongoose = require("mongoose");

const validateObjectId = (id) => {
  return mongoose.Types.ObjectId.isValid(id);
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePressRelease = (data) => {
  const errors = [];

  if (
    !data.title ||
    typeof data.title !== "string" ||
    data.title.trim() === ""
  ) {
    errors.push("Title is required and must be a non-empty string");
  }

  if (!data.date || typeof data.date !== "string") {
    errors.push("Date is required");
  }

  if (
    !data.content ||
    typeof data.content !== "string" ||
    data.content.trim() === ""
  ) {
    errors.push("Content is required");
  }

  return errors;
};

const validatePressConference = (data) => {
  const errors = [];

  if (
    !data.title ||
    typeof data.title !== "string" ||
    data.title.trim() === ""
  ) {
    errors.push("Title is required");
  }

  if (!data.date || typeof data.date !== "string") {
    errors.push("Date is required");
  }

  if (!data.youtubeLink || typeof data.youtubeLink !== "string") {
    errors.push("YouTube link is required");
  }

  return errors;
};

const validatePressCoverage = (data) => {
  const errors = [];

  if (!data.title || typeof data.title !== "string") {
    errors.push("Title is required");
  }

  if (!data.date || typeof data.date !== "string") {
    errors.push("Date is required");
  }

  if (!data.source || typeof data.source !== "string") {
    errors.push("Source is required");
  }

  return errors;
};

module.exports = {
  validateObjectId,
  validateEmail,
  validatePressRelease,
  validatePressConference,
  validatePressCoverage,
};
