const mongoose = require("mongoose");

const bmiProgressSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    UserID: {
        type: String,
        maxLength: 50,
    },
    bmi: {
        type: Number,
        required: true,
    },
    date: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50,
    },
});

module.exports = mongoose.model("bmiProgress", bmiProgressSchema);