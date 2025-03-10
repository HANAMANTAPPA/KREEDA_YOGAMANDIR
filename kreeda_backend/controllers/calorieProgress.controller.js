const User = require("../models/userModel.module.js");
const calorieProgressSchema = require("../models/calorieProgressSchema.module.js");
const Router = require("express").Router();

exports.addCalProgress = async (req, res) => {
  // console.log("HI post", req.body);
  // const UserID = 101;
  try{
    const { userName, exerciseSet, exeName, caloriesburnt } = req.body;
    // console.log(typeof(userName), "username type");
    
    const userEmail = req.session.user1;

    const user = await User.findOne({ email: userEmail });
    if(!user){
      // console.log(userEmail);
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const UserID = user.userID

    const date1 = new Date();

    // Get UTC time in milliseconds
    const utcTime = date1.getTime() + (date1.getTimezoneOffset() * 60000);

    // IST offset is UTC + 5 hours 30 minutes
    const istOffset = 5.5 * 60 * 60000;

    // Get the IST time in milliseconds and create a new Date object
    const istTime = new Date(utcTime + istOffset);

    // Now istTime is in Date format
    // console.log("Current IST Date:", istTime.toLocaleDateString()); // For the date part
    // console.log("Current IST DateTime:", istTime.toLocaleString()); // For date and time

    const istTimeLocal = istTime.toLocaleString();

    // Get the IST date parts
    // const year = date1.toLocaleString("en-IN", { year: 'numeric', timeZone: "Asia/Kolkata" });
    // const month = date1.toLocaleString("en-IN", { month: 'numeric', timeZone: "Asia/Kolkata" });
    // const day = date1.toLocaleString("en-IN", { day: 'numeric', timeZone: "Asia/Kolkata" });

    // Get the IST time parts
    // // const hours = date1.toLocaleString("en-IN", { hour: 'numeric', hour12: false, timeZone: "Asia/Kolkata" });
    // const minutes = date1.toLocaleString("en-IN", { minute: 'numeric', timeZone: "Asia/Kolkata" });
    // const seconds = date1.toLocaleString("en-IN", { second: 'numeric', timeZone: "Asia/Kolkata" });

    // Format as YYYY-MM-DD HH:MM:SS
    // const istFormattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    const calorieProgress = new calorieProgressSchema({
      userName,
      UserID,
      exerciseSet,
      exeName,
      caloriesburnt,
      date: istTimeLocal,
    });

    // console.log(calorieProgress);

    await calorieProgress.save();
    res.status(200).json({ message: 'Calorie progress added successfully' });
  } catch (error) {
    console.error('Error adding calorie progress:', error);
    res.status(500).json({ message: 'Server error while adding calorieProgress' });
  }

};

// get method for Exercise progress for a person
exports.getCalProgress = async (req, res) => {
  // console.log("HI post", req.body);
  // try{
  //   const userEmail = req.session.user1;
  //   console.log(userEmail, "mail id from the server");
  //   const user = await User.findOne({ email: "mvb@gmail.com" });
  //   const UserID = user.userID;
  //   const exerciseProgress = await exerciseProgressSchema.find({
  //         UserID: UserID,
  //       });
  //       res.status(200).json(exerciseProgress);
  //   // console.log(user);
  //   // res
  //   //   .json({ message : "hi"});
  //     // console.log(user.email);
  // } catch(error) {
  //   res
  //   .status(500)
  //     .json({ message : ""});
  // }
  // conditions or Validations
  try {
    const userEmail = req.session.user1;
    // console.log(userEmail, "mail id from the server");
    const user = await User.findOne({ email: userEmail });
    const UserID = user.userID;
    // console.log(UserID);
    // console.log(user);
    // const { date } = req.body;
    // console.log(date);
    // date = { date: { $regex: "^2024-9-19" } }
    const { date } = req.query;
    const calorieProgress = await calorieProgressSchema.find({
      UserID: UserID,
      date: { $regex: `^${date}` },
    });
    // console.log(calorieProgress);
    res.status(200).json(calorieProgress);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server error while fetching CalProgress" });
  }
};

// Backend: Weekly Calorie Progress API
exports.getWeeklyCalProgress = async (req, res) => {
  try {
    const userEmail = req.session.user1;
    const user = await User.findOne({ email: userEmail });
    const UserID = user.userID;

    const { startDate, endDate } = req.query;
    const parsedStartDate = new Date(startDate);
    const parsedEndDate = new Date(endDate);

    if (isNaN(parsedStartDate) || isNaN(parsedEndDate)) {
      return res.status(400).json({ message: "Invalid date format" });
    }

    // Get calorie data between the dates
    const calorieProgress = await calorieProgressSchema.find({
      UserID: UserID,
      date: {
        $gte: new Date(startDate).toISOString().split("T")[0], // Format as YYYY-MM-DD
        $lte: new Date(endDate).toISOString().split("T")[0],
      },
    });

    const dailyData = Array.from({ length: 7 }, (_, index) => {
      const currentDate = new Date(parsedStartDate);
      currentDate.setDate(parsedStartDate.getDate() + index);

      // Format the current date as YYYY-M-D (to match your data format)
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1;
      const day = currentDate.getDate();
      const formattedDate = `${year}-${month}-${day}`;

      const calorieEntry = calorieProgress.find((calorie) => {
        // Extract only the date part from the calorie date (before the space)
        const calorieDate = calorie.date.split(' ')[0];
        return calorieDate === formattedDate;
      });

      return {
        date: formattedDate,
        caloriesburnt: calorieEntry ? calorieEntry.caloriesburnt : 0, // Default to 0 if no entry found
      };
    });

    res.status(200).json(dailyData);
  } catch (error) {
    console.error("Error fetching weekly calorie progress:", error);
    res.status(500).json({ message: "Server error while fetching weekly calorie progress." });
  }
};
