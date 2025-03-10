const mongoose = require("mongoose");

const calorieProgressSchema = new mongoose.Schema({
  userName: { 
    type: String,
    required: true,
  },
  UserID: {
    type: String,
    maxLength: 50,
  },
  exerciseSet: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  exeName: {
    type: String,
    required: true,
    trim: true,

    maxLength: 50,
  },
  caloriesburnt: {
    type: Number,
    required: true,
    trim: true,
    maxLength: 50,
  },
  date: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
});

module.exports = mongoose.model("calProgress", calorieProgressSchema);
