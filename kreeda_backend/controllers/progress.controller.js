const progressSchema = require("../models/progressSchema.module.js");
const User = require("../models/userModel.module.js");

exports.addProgress = async (req, res) => {
    try{
        const { userName, exerciseSet, exeName, repCount, caloriesburnt } = req.body;
        const userEmail = req.session.user1;
        const user = await User.findOne({ email: userEmail });
        if(!user){
            res.status(404).json({ message: 'User not found' });
            return;
        }
        const UserID = user.userID;
        const date1 = new Date();
        const dateISO = date1.toISOString();
        
        const progress = new progressSchema({
            userName,
            UserID,
            exerciseSet,
            exeName,
            repCount,
            caloriesburnt,
            date: dateISO
        });

        await progress.save();
        res.status(200).json({ message: 'Progress added successfully'});
    } catch (error) {
        console.error('Error while adding progress: ', error);
        res.status(500).son({ message: 'Server error while adding progress'});
    }
}

exports.getDailyProgress = async (req, res) => {
    try{
        const userEmail = req.session.user1;
        const user = await User.findOne({ email: userEmail });
        const UserID = user.userID;
        const { date } = req.query;
        console.log(date);
        const progress = await progressSchema.find({
            UserID: UserID,
            date: { $regex: `^${date}`}
        });
        res.status(200).json(progress);
    } catch (error) {
        console.error('Error while fetching progress: ', error);
        res.status(500).json({ message: 'Server error while fetching progress'})
    }
}

exports.getWeeklyProgress = async (req, res) => {
    try {
        const userEmail = req.session.user1;
        console.log('User email from session:', userEmail);  // Debug log for user email

        const user = await User.findOne({ email: userEmail });
        if (!user) {
            console.log('User not found');  // Debug log for user not found
            return res.status(404).json({ message: 'User not found' });
        }

        const UserID = user.userID;
        console.log('UserID:', UserID);  // Debug log for UserID

        const { startDate, endDate } = req.query;
        console.log('Start Date:', startDate);  // Debug log for start date
        console.log('End Date:', endDate);      // Debug log for end date

        // Parse the input dates
        const startOfWeek = new Date(startDate);
        const endOfWeek = new Date(endDate);
        const today = new Date();

        console.log('Parsed Start of Week:', startOfWeek); // Debug log for start of week
        console.log('Parsed End of Week:', endOfWeek);     // Debug log for end of week
        console.log('Today\'s Date:', today);              // Debug log for today's date

        // Helper function to format Date objects to ISO string without time
        const formatDate = (date) => {
            if (typeof date === 'string') {
                // Convert string to Date if it's in string format
                date = new Date(date);
            }
            const formattedDate = date.toISOString().split('T')[0];  // Returns date in 'YYYY-MM-DD' format
            console.log('Formatted Date:', formattedDate); // Debug log for formatted date
            return formattedDate;
        };

        // Fetch exercise progress for the user within the requested date range
        const weeklyProgress = await progressSchema.find({
            UserID: UserID,
            date: {
                $gte: formatDate(startOfWeek),
                $lte: formatDate(endOfWeek)  // Keep the end date as is
            }
        });

        console.log('Weekly Progress Data:', weeklyProgress); // Debug log for fetched progress data

        // Initialize the array to store daily data for the week
        const dailyData = [];
        for (let d = new Date(startOfWeek); d <= endOfWeek; d.setDate(d.getDate() + 1)) {
            dailyData.push({
                day: formatDate(d),
                performance: 0,
                calories: 0,
                exercises: {}
            });
        }

        console.log('Initialized Daily Data Array:', dailyData); // Debug log for initialized daily data

        // Fill the dailyData array with the actual progress data
        weeklyProgress.forEach((entry) => {
            const dayIndex = dailyData.findIndex(data => data.day === formatDate(new Date(entry.date)));
            if (dayIndex !== -1) {
                dailyData[dayIndex].performance += entry.repCount;
                dailyData[dayIndex].calories += entry.caloriesburnt;

                if (!dailyData[dayIndex].exercises[entry.exeName]) {
                    dailyData[dayIndex].exercises[entry.exeName] = {
                        performance: 0,
                        calories: 0
                    };
                }
                dailyData[dayIndex].exercises[entry.exeName].performance += entry.repCount;
                dailyData[dayIndex].exercises[entry.exeName].calories += entry.caloriesburnt;
            }
        });

        console.log('Final Daily Data:', dailyData); // Debug log for final daily data to be sent in response

        res.status(200).json(dailyData);
    } catch (error) {
        console.error('Error fetching weekly progress:', error); // Log the error
        res.status(500).json({ message: 'Server error while fetching weekly progress' });
    }
};



/* exports.getWeeklyProgress = async (req, res) => {
    try {
        const userEmail = req.session.user1;
        const user = await User.findOne({ email: userEmail });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const UserID = user.userID;
        const { startDate, endDate } = req.query;

        // Helper function to parse dates
        const parseDate = (dateString) => {
            const [datePart] = dateString.split(',');
            const [day, month, year] = datePart.split('/');
            return new Date(year, month - 1, day);
        };

        // Helper function to format dates to dd/mm/yyyy
        const formatDate = (date) => {
            return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        };

        // Parse the input dates
        const startOfWeek = parseDate(startDate);
        const endOfWeek = parseDate(endDate);
        const today = new Date();

        // Ensure end date doesn't go beyond today
        const adjustedEndOfWeek = endOfWeek > today ? today : endOfWeek;

        // Fetch exercise progress for the user within the requested date range
        const weeklyProgress = await Progress.find({
            UserID: UserID,
            date: {
                $gte: startDate, // Ensure dates are properly formatted
                $lte: formatDate(adjustedEndOfWeek)
            }
        });

        // Initialize the array to store daily data for the week, including missing days
        const dailyData = [];
        for (let d = new Date(startOfWeek); d <= adjustedEndOfWeek; d.setDate(d.getDate() + 1)) {
            dailyData.push({
                day: formatDate(d),
                performance: 0,  // Default to 0 for days without data
                calories: 0,     // Default to 0 for days without data
                exercises: {}    // Empty object for exercises
            });
        }

        // Fill the dailyData array with the actual progress data from the database
        weeklyProgress.forEach((entry) => {
            const entryDate = parseDate(entry.date); // Parse entry date
            const dayIndex = dailyData.findIndex(data => data.day === formatDate(entryDate));

            if (dayIndex !== -1) {
                // Add performance and calories for the day
                dailyData[dayIndex].performance += entry.repCount;
                dailyData[dayIndex].calories += entry.caloriesburnt;

                // Handle exercise-specific data
                Object.keys(entry.exercises).forEach((exercise) => {
                    if (!dailyData[dayIndex].exercises[exercise]) {
                        dailyData[dayIndex].exercises[exercise] = {
                            performance: 0,
                            calories: 0
                        };
                    }
                    dailyData[dayIndex].exercises[exercise].performance += entry.exercises[exercise].performance;
                    dailyData[dayIndex].exercises[exercise].calories += entry.exercises[exercise].calories;
                });
            }
        });

        // Return the daily data (including days with zero performance and calories)
        res.status(200).json(dailyData);
    } catch (error) {
        console.error('Error fetching weekly progress:', error);
        res.status(500).json({ message: 'Server error while fetching weekly progress' });
    }
}; */

exports.getProgressForDateRange = async (req, res) => {
    try {
        const userEmail = req.session.user1;
        console.log('User email from session:', userEmail); // Debug log for user email

        const user = await User.findOne({ email: userEmail });
        if (!user) {
            console.log('User not found'); // Debug log for user not found
            return res.status(404).json({ message: 'User not found' });
        }

        const UserID = user.userID;
        console.log('UserID:', UserID); // Debug log for UserID

        const { startDate, endDate } = req.query;
        console.log('Start Date:', startDate); // Debug log for start date
        console.log('End Date:', endDate); // Debug log for end date

        // Parse the input dates
        const parsedStartDate = new Date(startDate);
        const parsedEndDate = new Date(endDate);
        console.log('Parsed Start Date:', parsedStartDate); // Debug log for parsed start date
        console.log('Parsed End Date:', parsedEndDate); // Debug log for parsed end date

        // Helper function to format Date objects to ISO string without time
        const formatDate = (date) => {
            if (typeof date === 'string') {
                date = new Date(date); // Convert string to Date if it's in string format
            }
            const formattedDate = date.toISOString().split('T')[0]; // Returns date in 'YYYY-MM-DD' format
            console.log('Formatted Date:', formattedDate); // Debug log for formatted date
            return formattedDate;
        };

        // Fetch progress for the user within the selected date range
        const progressData = await progressSchema.find({
            UserID: UserID,
            date: {
                $gte: formatDate(parsedStartDate),
                $lte: formatDate(parsedEndDate) // Keep the end date as is
            }
        });

        console.log('Progress Data for Selected Range:', progressData); // Debug log for fetched progress data

        // Initialize the array to store daily data for the selected date range
        const dailyData = [];
        for (let d = new Date(parsedStartDate); d <= parsedEndDate; d.setDate(d.getDate() + 1)) {
            dailyData.push({
                day: formatDate(d),
                performance: 0,
                calories: 0,
                exercises: {}
            });
        }

        console.log('Initialized Daily Data Array:', dailyData); // Debug log for initialized daily data

        // Fill the dailyData array with the actual progress data
        progressData.forEach((entry) => {
            const dayIndex = dailyData.findIndex(data => data.day === formatDate(new Date(entry.date)));
            if (dayIndex !== -1) {
                dailyData[dayIndex].performance += entry.repCount;
                dailyData[dayIndex].calories += entry.caloriesburnt;

                if (!dailyData[dayIndex].exercises[entry.exeName]) {
                    dailyData[dayIndex].exercises[entry.exeName] = {
                        performance: 0,
                        calories: 0
                    };
                }
                dailyData[dayIndex].exercises[entry.exeName].performance += entry.repCount;
                dailyData[dayIndex].exercises[entry.exeName].calories += entry.caloriesburnt;
            }
        });

        console.log('Final Daily Data:', dailyData); // Debug log for final daily data to be sent in response

        res.status(200).json(dailyData);
    } catch (error) {
        console.error('Error fetching progress for selected date range:', error); // Log the error
        res.status(500).json({ message: 'Server error while fetching progress for selected date range' });
    }
};
