// backend/models/dataModel.js
const mongoose = require("mongoose");

const { Schema } = mongoose;

const dataSchema = new Schema({
  innerdata: [
    {
      userName: { type: String, required: true },
      UserID: {
        type: String,
        maxLength: 50,
        required: true,
        unique: true,
      },
      exeName: {
        type: String,
        required: true,
        trim: true,

        maxLength: 50,
      },
      repCount: {
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
    },
  ],
});

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;
