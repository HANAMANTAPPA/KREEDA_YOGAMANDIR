const {
  addExeProgress,
  getExeProgress,
  getmainpage,
  getWeeklyExeProgress,
} = require ('../controllers/exerciseProgress.controller.js');
const {
  addCalProgress,
  getCalProgress,
  getWeeklyCalProgress,
} = require ('../controllers/calorieProgress.controller.js');
const {
  postHome,
  postLogin,
  postRegister,
  postLogout,
  getNext,
  postFwd,
  getlogin,
  getsignup,
  getUserdata,
  getUserdata1,
  updateUserdata,
  updateProfilePic,
} = require ('../controllers/user.controller.js');
const {
  addbmiProgress,
  getbmiProgress,
  getWeeklyBmi,
} = require ('../controllers/bmiProgress.controller.js');
const {
  addProgress,
  getWeeklyProgress,
  getDailyProgress,
  getProgressForDateRange,
} = require ('../controllers/progress.controller.js');
const {saveContact} = require ('../controllers/contactForm.controller.js');
const {
  getWorkoutExercises,
  getAllWorkoutModules,
} = require ('../controllers/exerciseWorkout.controller');
const {
  getUserExerciseProfile,
  addOrUpdateUserExerciseProfile,
  getWeeklyUserProfile,
  getMonthlyFitnessData,
} = require ('../controllers/userExercisePoints.controller.js');
const router = require ('express').Router ();

router
  .get ('/', getmainpage)
  .post ('/addExeProgress', addExeProgress)
  .get ('/get-exeProgress', getExeProgress)
  .post ('/add-bmiProgress', addbmiProgress)
  .get ('/get-bmiProgress', getbmiProgress)
  .post ('/addCalProgress', addCalProgress)
  .get ('/get-calProgress', getCalProgress)
  .get ('/get-WeeklyCalProgress', getWeeklyCalProgress)
  .get ('/getWeeklyProgress', getWeeklyExeProgress)
  .get ('/getProgressForDateRange', getProgressForDateRange)
  .post ('/login', postLogin)
  .get ('/login', getlogin)
  .post ('/register', postRegister)
  .get ('register', getsignup)
  .post ('/home', postHome)
  .post ('/forgetPwd', postFwd)
  .post ('/logout', postLogout)
  .get ('/next', getNext)
  .get ('/getUserdata', getUserdata)
  .get ('/getUserdata1', getUserdata1)
  .post ('/updateUserdata', updateUserdata)
  .post ('/addProgress', addProgress)
  .get ('/getDailyProgress', getDailyProgress)
  .get ('/getWeeklyProgress', getWeeklyProgress)
  .get ('/getWeeklyBMI', getWeeklyBmi)
  .post ('/contact', saveContact)
  .post ('/updateProfilePic', updateProfilePic)
  .get ('/exercises/:moduleName', getWorkoutExercises)
  .get ('/workoutModules', getAllWorkoutModules)
  .get ('/getuserExerciseProfile', getUserExerciseProfile)
  .post ('/addOrUpdateUserExerciseProfile', addOrUpdateUserExerciseProfile)
  .get ('/getWeeklyUserProfile', getWeeklyUserProfile)
  .get ('/getMonthlyFitnessData', getMonthlyFitnessData);
module.exports = router;
