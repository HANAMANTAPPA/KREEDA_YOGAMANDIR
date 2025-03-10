const mongoose = require('mongoose');
const { ExerciseModule } = require('../models/exerciseModule.model'); // Adjust path to the actual model
const User = require("../models/userModel.module.js");
// Controller function to fetch exercises for a given user and module
exports.getWorkoutExercises = async (req, res) => {
  const { moduleName } = req.params;

  // if (!req.session.user1) {
  //   return res.status(403).json({ error: 'User not logged in' });
  // }

  // const userEmail = req.session.user1;

  try {
    // Find the user by email
    // const user = await User.findOne({ email: userEmail });
    // if (!user) {
    //   return res.status(404).json({ error: 'User not found' });
    // }

    // Now fetch the workout module for this user
    const workoutModule = await ExerciseModule.findOne({
       // userId: new mongoose.Types.ObjectId(user._id), // Use 'new'
        moduleName: moduleName
    });
      
    if (!workoutModule) {
      return res.status(404).json({ error: 'Workout module not found' });
    }
    // console.log("hi");
    res.json(workoutModule.exercises); // Return the exercises array from the module
  } catch (error) {
    console.error('Error fetching workout module:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getAllWorkoutModules = async (req, res) => {
  // if (!req.session.user1) {
  //   return res.status(403).json({ error: 'User not logged in' });
  // }

  // const userEmail = req.session.user1;

  try {
    // Find the user by email
    // const user = await User.findOne({ email: userEmail });
    // if (!user) {
    //   return res.status(404).json({ error: 'User not found' });
    // }

    // Fetch all workout modules for this user
    const workoutModules = await ExerciseModule.find();

    if (!workoutModules.length) {
      return res.status(404).json({ error: 'No workout modules found for this user' });
    }

    // Return all modules with their details and exercises
    res.json(workoutModules.map(module => ({
      moduleName: module.moduleName,
      moduleImage: module.moduleImage,
      exercises: module.exercises,
      isDaily:module.isDaily
    })));
  } catch (error) {
    console.error('Error fetching workout modules:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
