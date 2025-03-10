const mongoose = require ('mongoose');
const bcrypt = require ('bcrypt');

const defaultProfilePic = '../uploads/profilePic.png'; // Replace with your actual path or URL

const appSchema = new mongoose.Schema ({
  userName: {type: String, required: true},
  userID: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  pwd: {type: String, required: true},
  height: {type: Number, required: true},
  weight: {type: Number, required: true},
  date: {type: String, required: true},
  profilePic: {type: String, default: defaultProfilePic}, // Default profile pic as a URL or file path
});

// Pre-save hook to hash password before saving to the database
appSchema.pre ('save', async function (next) {
  // If the password is not modified, skip hashing
  if (!this.isModified ('pwd')) {
    return next ();
  }

  try {
    const salt = await bcrypt.genSalt (10); // Generate a salt
    this.pwd = await bcrypt.hash (this.pwd, salt); // Hash the password
    next ();
  } catch (error) {
    next (error);
  }
});

// Method to compare user-entered password with the stored hashed password
appSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare (candidatePassword, this.pwd);
};

// Create the Mongoose model
const userModel = mongoose.model ('User', appSchema);

module.exports = userModel;
