const mongoose = require("mongoose");

const appSchema = new mongoose.Schema({
    userName: { type: String, required: true},
    userID: {type: String},
    email: { type: String},
    points: { type: Number, required: true},
    date: { type: String, required: true}
});

const userExerciseProfileModel = mongoose.model("UserExerciseProfile", appSchema);

module.exports = userExerciseProfileModel;