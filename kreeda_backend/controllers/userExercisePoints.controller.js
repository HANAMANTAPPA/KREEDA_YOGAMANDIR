const User = require ('../models/userModel.module.js');
const UserExerciseProfile = require ('../models/userExerciseProfile.module.js');

exports.addOrUpdateUserExerciseProfile = async (req, res) => {
  try {
    const {userName, points} = req.body;
    const userEmail = req.session.user1;
    const user = await User.findOne ({email: userEmail});
    if (!user) {
      return res.status (404).json ({message: 'User not found'});
    }

    const userID = user.userID;
    const dateISO = new Date ().toISOString ();

    const existingProfile = await UserExerciseProfile.findOne ({
      userID: userID,
      date: {$gte: new Date ().toISOString ().split ('T')[0]}, // Check today's date
    });

    if (existingProfile) {
      // Update the points
      existingProfile.points += points; // Add points to existing ones
      await existingProfile.save ();
      return res.status (200).json ({message: 'Progress updated successfully'});
    } else {
      // Create a new entry if no profile exists
      const newProfile = new UserExerciseProfile ({
        userName,
        userID,
        email: userEmail,
        points,
        date: dateISO,
      });

      await newProfile.save ();
      return res.status (200).json ({message: 'Progress added successfully'});
    }
  } catch (error) {
    console.error ('Error while adding/updating progress: ', error);
    res.status (500).json ({message: 'Server error while processing progress'});
  }
};

exports.getUserExerciseProfile = async (req, res) => {
  try {
    // Fetch top 10 users based on points, sorted in descending order
    const userExerciseProfileDetails = await UserExerciseProfile.find ().sort ({
      points: -1,
    }); // Sort by points in descending order

    if (
      Array.isArray (userExerciseProfileDetails) &&
      userExerciseProfileDetails.length === 0
    ) {
      return res.status (200).send ({message: 'No data was found!!'});
    }

    res.status (200).json (userExerciseProfileDetails);
  } catch (error) {
    console.log (error);
    res
      .status (500)
      .send ({message: 'Error while fetching the exercise profile details!'});
  }
};

// exports.getWeeklyUserProfile = async (req, res) => {
//   try {
//     // Get the current date
//     const today = new Date();

//     // Find the start and end of the current week
//     const startOfWeek = new Date(today);
//     startOfWeek.setDate(today.getDate() - today.getDay()); // Sunday

//     const endOfWeek = new Date(today);
//     endOfWeek.setDate(startOfWeek.getDate() + 6); // Saturday

//     // Format dates to ISO without time
//     const formatDate = (date) => {
//       return date.toISOString().split('T')[0];
//     };

//     const formattedStart = formatDate(startOfWeek);
//     const formattedEnd = formatDate(endOfWeek);

//     console.log('Start of Week:', formattedStart); // Debug log for start of the week
//     console.log('End of Week:', formattedEnd);    // Debug log for end of the week

//     // Fetch user profiles for the week
//     const weeklyUserProfiles = await UserExerciseProfile.find({
//       date: { $gte: formattedStart, $lte: formattedEnd },
//     }).sort({ points: -1 });

//     const filteredUserProfiles = weeklyUserProfiles.map((element) => {

//     })

//     if (weeklyUserProfiles.length === 0) {
//       return res.status(200).json({ message: "No data found for this week!" });
//     }

//     // Respond with the weekly user data
//     res.status(200).json(weeklyUserProfiles);
//   } catch (error) {
//     console.error("Error fetching weekly user profiles:", error);
//     res.status(500).json({ message: "Error while fetching the weekly exercise profile details!" });
//   }
// };

exports.getWeeklyUserProfile = async (req, res) => {
  try {
    // Get the current date
    const today = new Date ();

    // Find the start and end of the current week
    const startOfWeek = new Date (today);
    startOfWeek.setDate (today.getDate () - today.getDay ()); // Sunday

    const endOfWeek = new Date (today);
    endOfWeek.setDate (startOfWeek.getDate () + 6); // Saturday

    // Format dates to ISO without time
    const formatDate = date => {
      return date.toISOString ().split ('T')[0];
    };

    const formattedStart = formatDate (startOfWeek);
    const formattedEnd = formatDate (endOfWeek);

    console.log ('Start of Week:', formattedStart); // Debug log for start of the week
    console.log ('End of Week:', formattedEnd); // Debug log for end of the week

    // Fetch user profiles for the week
    const weeklyUserProfiles = await UserExerciseProfile.find ({
      date: {$gte: formattedStart, $lte: formattedEnd},
    }).sort ({points: -1});

    console.log ('Fetched Weekly User Profiles:', weeklyUserProfiles);

    // Combine points for users with the same userID
    const filteredUserProfiles = Object.values (
      weeklyUserProfiles.reduce ((acc, profile) => {
        if (!acc[profile.userID]) {
          acc[profile.userID] = {
            userID: profile.userID,
            userName: profile.userName,
            points: 0,
          };
        }
        acc[profile.userID].points += profile.points;
        return acc;
      }, {})
    );

    console.log ('Filtered User Profiles:', filteredUserProfiles);

    if (filteredUserProfiles.length === 0) {
      return res.status (200).json ({message: 'No data found for this week!'});
    }

    // Respond with the aggregated user data
    res.status (200).json (filteredUserProfiles);
  } catch (error) {
    console.error ('Error fetching weekly user profiles:', error);
    res.status (500).json ({
      message: 'Error while fetching the weekly exercise profile details!',
    });
  }
};

exports.getMonthlyFitnessData = async (req, res) => {
  return res.status (200).json ({message: 'No data found for this week!'});
};
