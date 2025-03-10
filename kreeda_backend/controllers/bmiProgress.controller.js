const User = require("../models/userModel.module.js");
const bmiProgressSchema = require("../models/bmiProgressSchema.module.js");
const Router = require("express").Router();

exports.addbmiProgress = async (req, res) => {
    try{
        // const {weight, height} = req.body;
        const userEmail = req.session.user1;
        // console.log(userEmail);
        const user = await User.findOne({ email: userEmail });
        // console.log(user);
        if(!user){
            res.status(404).json({ message: 'User not found'});
            return;
        }

        const userName = user.userName;
        const UserID = user.userID;        
        const weight = user.weight;
        const height = user.height / 100;

        const date1 = new Date();
        const dateISO = date1.toISOString();

        // Get UTC time in milliseconds
        // const utcTime = date1.getTime() + (date1.getTimezoneOffset() * 60000);

        // IST offset is UTC + 5 hours 30 minutes
        // const istOffset = 5.5 * 60 * 60000;

        // Get the IST time in milliseconds and create a new Date object
        // const istTime = new Date(utcTime + istOffset);

        // Now istTime is in Date format
        // console.log("Current IST Date:", istTime.toLocaleDateString()); // For the date part
        // console.log("Current IST DateTime:", istTime.toLocaleString()); // For date and time

        // const istTimeLocal = istTime.toLocaleString();

        // const year = date1.toLocaleString("en-IN", { year: 'numeric', timeZone: "Asia/Kolkata"});
        // const month = date1.toLocaleString("en-IN", { month: 'numeric', timeZone: "Asia/Kolkata"});
        // const day = date1.toLocaleString("en-IN", { day: 'numeric', timeZone: "Asia/Kolkata"});

        // const hours = date1.toLocaleString("en-IN", { hour: 'numeric', hour12: false, timeZone: "Asia/Kolkata"});
        // const minute = date1.toLocaleString("en-IN", { minute: 'numeric', timeZone: "Asia/Kolkata"});
        // const second = date1.toLocaleString("en-IN", { second: 'numeric', timeZone: "Asia/Kolkata"});

        // const istFormattedDateTime = `${year}-${month}-${day} ${hours}-${minute}-${second}`;

        const bmiValue = weight / (height * height);
        // console.log(bmiValue);

        const bmiProgress = new bmiProgressSchema({
            userName,
            UserID,
            bmi: bmiValue,
            date: dateISO,
        });

        await bmiProgress.save();
        res.status(200).json({ message: 'Bmi progess added successfully!'});
    } catch (error){
        res.status(500).json({ message: 'Server error while adding bmi progress!'});
    }
};

exports.getbmiProgress = async (req, res) => {
    try{
        const userEmail = req.session.user1;
        const user = await User.findOne({ email: userEmail});
        const UserID = user.userID;
        const { date } = req.query;
        const bmiProgress = await bmiProgressSchema.find({
            UserID: UserID,
            date: { $regex: `^${date}`},
        });
        res.status(200).json(bmiProgress);
    } catch (error) {
        res.status(500).json({ message: "Server error while fetching BMIProgress" });
    }
};

exports.getWeeklyBmi = async (req, res) => {
  try {
    const userEmail = req.session.user1;
    const user = await User.findOne({ email: userEmail });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const { weight, height } = user; // Assuming weight and height are stored on the user

    // Calculate BMI for each week
    const weeklyBmi = [];
    for (let i = 1; i <= 4; i++) {
      // Generate mock data or retrieve the actual weight/height for each week
      const bmi = weight / (height * height); // Adjust if different for each week
      weeklyBmi.push({
        week: `Week ${i}`,
        bmi: parseFloat(bmi.toFixed(2)), // Keep BMI to 2 decimal points
      });
    }

    res.status(200).json(weeklyBmi);
  } catch (error) {
    console.error("Error fetching weekly BMI:", error);
    res.status(500).json({ message: 'Server error while fetching weekly BMI' });
  }
};
