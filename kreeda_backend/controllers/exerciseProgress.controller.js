const User = require("../models/userModel.module.js");
const exerciseProgressSchema = require("../models/exerciseProgress.module.js");
const Router = require("express").Router();

exports.getmainpage = async (req, res) => {
  return res.status(200).json({ message: "hellow" });
};

exports.addExeProgress = async (req, res) => {
  // console.log("HI post", req.body);
  // const UserID = 101;
  try{
    const { userName, exerciseSet, exeName, repCount } = req.body;
    const userEmail = req.session.user1;

    const user = await User.findOne({ email: userEmail });
    if(!user){
      console.log(userEmail);
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const UserID = user.userID

    const date1 = new Date();

    // Get UTC time in milliseconds
    // const utcTime = date1.getTime() + (date1.getTimezoneOffset() * 60000);

    // // IST offset is UTC + 5 hours 30 minutes
    // const istOffset = 5.5 * 60 * 60000;

    // // Get the IST time in milliseconds and create a new Date object
    // const istTime = new Date(utcTime + istOffset);

    // Now istTime is in Date format
    // console.log("Current IST Date:", istTime.toLocaleDateString()); // For the date part
    // console.log("Current IST DateTime:", istTime.toLocaleString()); // For date and time

    const istTimeLocal = date1.toLocaleString();

    // Get the IST date parts
    // const year = date1.toLocaleString("en-IN", { year: 'numeric', timeZone: "Asia/Kolkata" });
    // const month = date1.toLocaleString("en-IN", { month: 'numeric', timeZone: "Asia/Kolkata" });
    // const day = date1.toLocaleString("en-IN", { day: 'numeric', timeZone: "Asia/Kolkata" });

    // Get the IST time parts
    // const hours = date1.toLocaleString("en-IN", { hour: 'numeric', hour12: false, timeZone: "Asia/Kolkata" });
    // const minutes = date1.toLocaleString("en-IN", { minute: 'numeric', timeZone: "Asia/Kolkata" });
    // const seconds = date1.toLocaleString("en-IN", { second: 'numeric', timeZone: "Asia/Kolkata" });

    // Format as YYYY-MM-DD HH:MM:SS
    // const istFormattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    // console.log(istFormattedDateTime); // Output: "2024-9-24 14:35:42"

    // const date_time = date1.toISOString();

    const exerciseProgress = new exerciseProgressSchema({
      userName,
      UserID,
      exerciseSet,
      exeName,
      repCount,
      date: istTimeLocal,
    });

    console.log(exerciseProgress);

    await exerciseProgress.save();
    res.status(200).json({ message: 'Exercise progress added successfully' });
  } catch (error) {
    console.error('Error adding exercise progress:', error);
    res.status(500).json({ message: 'Server error while adding ExerciseProgress' });
  }

};

// get method for Exercise progress for a person

exports.getExeProgress = async (req, res) => {
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
    console.log(userEmail, "mail id from the server");
    const user = await User.findOne({ email: userEmail });
    const UserID = user.userID;
    console.log(UserID);
    // console.log(user);
    // const { date } = req.body;
    // console.log(date);
    // date = { date: { $regex: "^2024-9-19" } }
    const { date } = req.query;
    const exerciseProgress = await exerciseProgressSchema.find({
      UserID: UserID,
      date: { $regex: `^${date}` },
    });
    // console.log(exerciseProgress);
    res.status(200).json(exerciseProgress);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server error while fetching ExeProgress" });
  }
};

// // Backend: Weekly Exercise Progress API
// exports.getWeeklyExeProgress = async (req, res) => {
//   try {
//     const userEmail = req.session.user1;
//     console.log(userEmail);
//     const user = await User.findOne({ email: userEmail });
//     console.log("f",user);
//     const UserID = user.userID;
//     console.log("g",UserID);
//     const { startDate, endDate } = req.query;
//     const parsedStartDate = new Date(startDate);
//     const parsedEndDate = new Date(endDate);
//     // Get exercise data between the dates
//     console.log(startDate); 
//     const exerciseProgress = await exerciseProgressSchema.find({
//       UserID: UserID,
//       date: {
//         // Since your stored date is a string, we compare it as a string
//         $gte: startDate,
//         $lte: endDate,
//       },
//     });
//     console.log(exerciseProgress);
//     // Generate daily data for the week
//     const dailyData = Array.from({ length: 7 }, (_, index) => {
//       const currentDate = new Date(parsedStartDate);
//       currentDate.setDate(parsedStartDate.getDate() + index);

//       // Format the current date as DD/MM/YYYY to match the database format
//       const day = String(currentDate.getDate()).padStart(1, '0');
//       const month = String(currentDate.getMonth() + 1).padStart(2, '0');
//       const year = currentDate.getFullYear();
//       const formattedDate = `${day}/${month}/${year}`;
//       console.log("gcb",formattedDate);


//       const exerciseEntry = exerciseProgress.find((exercise) => {
//         // Extract the date part from the stored string (before the time part)
//         const exerciseDate = exercise.date.split(',')[0]; // '8/10/2024'
//         console.log("dsvdv",exerciseDate);
//         return exerciseDate === formattedDate;
//       });


//       return {
//         date: formattedDate,
//         repCount: exerciseEntry ? exerciseEntry.repCount : 0, // Default to 0 if no entry found
//         exeName: exerciseEntry ? exerciseEntry.exeName : "None", // Optional, depending on your data
//       };
//     });

//     res.status(200).json(dailyData);
//   } catch (error) {
//     console.error("Error fetching weekly exercise progress:", error);
//     res.status(500).json({ message: "Server error while fetching weekly exercise progress." });
//   }
// };
exports.getWeeklyExeProgress = async (req, res) => {
  try {
    const userEmail = req.session.user1;
    const user = await User.findOne({ email: userEmail });
    const UserID = user.userID;

    const { startDate, endDate } = req.query;
    const parsedStartDate = new Date(startDate);
    const parsedEndDate = new Date(endDate);

    // Get exercise data between the dates
    const exerciseProgress = await exerciseProgressSchema.find({
      UserID: UserID,
      date: {
        // Since your stored date is a string, we compare it as a string
        $gte: startDate,
        $lte: endDate,
      },
    });

    // Generate daily data for the week
    const dailyData = Array.from({ length: 7 }, (_, index) => {
      const currentDate = new Date(parsedStartDate);
      currentDate.setDate(parsedStartDate.getDate() + index);

      // Format the current date as DD/MM/YYYY to match the database format
      const day = String(currentDate.getDate()).padStart(1, '0');
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const year = currentDate.getFullYear();
      const formattedDate = `${day}/${month}/${year}`;


      const exerciseEntry = exerciseProgress.find((exercise) => {
        // Extract the date part from the stored string (before the time part)
        const exerciseDate = exercise.date.split(',')[0]; // '8/10/2024'
        return exerciseDate === formattedDate;
      });


      return {
        date: formattedDate,
        repCount: exerciseEntry ? exerciseEntry.repCount : 0, // Default to 0 if no entry found
        exeName: exerciseEntry ? exerciseEntry.exeName : "None", // Optional, depending on your data
      };
    });

    res.status(200).json(dailyData);
  } catch (error) {
    console.error("Error fetching weekly exercise progress:", error);
    res.status(500).json({ message: "Server error while fetching weekly exercise progress." });
  }
};
