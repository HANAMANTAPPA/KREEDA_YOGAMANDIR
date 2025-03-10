const Router = require ('express').Router ();
const multer = require ('multer');
const path = require ('path');
// const logger = require("../logger.js");
const userModel = require ('../models/userModel.module.js');
const appModel = require ('../models/userModel.module.js');
const User = require ('../models/userModel.module.js');
const {
  initializeDefaultModulesForUser,
} = require ('../models/exerciseModule.model');
// const session = require("express-session");
exports.postHome = async (req, res) => {
  res.send ({message: 'Hello World'});
};

const validateEmail = email => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test (String (email).toLowerCase ());
};

exports.postLogin = async (req, res) => {
  const {email, password} = req.body;
  console.log (email, password);

  if (req.session.user1) {
    console.log ('user already logged in', req.session.user1);
    res.status (200).send ({message: 'already logeed in'});
  } else {
    try {
      const user = await appModel.findOne ({email: email});
      // console.log(user);

      if (user) {
        // res.status(200).send({ message: "Logged In!!!" });
        const isMatch = await user.comparePassword (password);
        if (isMatch) {
          req.session.user1 = email;
          return res.status (200).send ({message: 'Logged In!!!', user: user});
        } else {
          return res.status (201).send ({message: 'Incorrect Password!!!'});
        }
      } else {
        // const isMatch = await user.comparePassword(password);
        // if (!user || !isMatch) {
        //   const loginError = new Error('Invalid credentials');

        //   // Log the failed login attempt (including the username)
        //   // logger.error(`Login failed for username: ${username}`, {
        //   //   method: req.method,
        //   //   url: req.url,
        //   //   username: username, // Log the login data
        //   //   stack: loginError.stack, // Capture stack trace (optional for simple errors)
        //   // });
        // }
        res.status (203).send ({message: 'User not found'});
      }
    } catch (err) {
      return res
        .status (500)
        .send ({message: 'Server error -- while login ', error: err});
    }
  }
};
exports.getlogin = async (req, res) => {
  res.status (200).send ({message: 'log in page'});
};

exports.getsignup = async (req, res) => {
  res.status (200).send ({message: 'sign in page'});
};

exports.postRegister = async (req, res) => {
  const {name, email, password, height, weight} = req.body;

  //   if (!validateEmail(email)) {
  //     res.status(400).send({ message: "Invalid email format" });
  //   }

  try {
    const existingUser = await userModel.findOne ({email: email});
    if (existingUser) {
      res.status (400).send ({message: 'User Already Registered!!!'});
    } else {
      const date1 = new Date ();
      const dateISO = date1.toISOString ();

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

      // Construct the full URL for the profile picture
      const protocol = req.protocol; // Get the request protocol (http or https)
      const host = req.get ('host'); // Get the host (domain or localhost)
      const profilePicUrl = `${protocol}://${host}/uploads/profilePic.png`; // Full URL
      console.log (profilePicUrl);

      const userid = Date.now ();
      const newUser = new userModel ({
        userName: name,
        userID: userid,
        email: email,
        pwd: password,
        height: height,
        weight: weight,
        date: dateISO,
        profilePic: profilePicUrl,
      });
      await newUser.save ();
      // await initializeDefaultModulesForUser(newUser._id);
      res.status (200).send ({message: 'Successfully Registered!!!'});
    }
  } catch (err) {
    console.log (err);
    res.status (500).send ({message: 'Server error', error: err});
  }
};

exports.postLogout = async (req, res) => {
  req.session.destroy (err => {
    if (err) {
      return res.status (500).send ({message: 'Error logging out'});
    }
    res.clearCookie ('connect.sid');
    res.status (200).send ({message: 'Logout Successful'});
  });
};

exports.getNext = async (req, res) => {
  console.log ('req.session : = ', req.session);
  // console.log("req.session.user1", req.session.user1);

  if (req.session.user1) {
    console.log ('req.session.user1', req.session.user1);
    res.status (200).send ({message: 'welcome to my next page'});
  } else {
    console.log ('needs to redirect to log in page ');

    res.redirect ('/login');
  }
};

exports.postFwd = async (req, res) => {
  res.send ({message: 'Hello'});
};

/// user dat fetch

exports.getUserdata = async (req, res) => {
  if (req.session.user1) {
    const email = req.session.user1;
    try {
      const userdetails = await userModel.find ({email: email});
      console.log (userdetails); // log the data

      res.status (200).json (userdetails);
    } catch (err) {
      // console.log(err);
      res.status (500).send ({message: 'Server error', error: err});
    }
  } else {
    console.log ('user not logged in');
    res.status (203).send ({message: 'User not found'});
  }
};

exports.getUserdata1 = async (req, res) => {
  try {
    const userEmail = req.session.user1;
    const user = await User.findOne ({email: userEmail});
    if (!user) {
      console.log (userEmail);
      res.status (404).json ({message: 'User not found'});
      return;
    }
    // res.json({user});
    const userData = {
      userName: user.userName,
      userID: user.userID,
      height: user.height,
      weight: user.weight,
    };
    console.log (userData);
    res.json ({userData});
  } catch (error) {
    res
      .status (500)
      .json ({message: 'Server error while fetching user details'});
  }
};

exports.updateUserdata = async (req, res) => {
  const {userName, weight, height} = req.body; // Destructure the updated data from request body

  if (!req.session.user1) {
    return res.status (403).json ({message: 'User not logged in'});
  }

  try {
    const userEmail = req.session.user1;
    const user = await User.findOne ({email: userEmail});

    if (!user) {
      return res.status (404).json ({message: 'User not found'});
    }

    // Update user data
    user.userName = userName;
    user.weight = weight;
    user.height = height;

    await user.save (); // Save changes to the database
    res.status (200).json ({message: 'User data updated successfully'});
  } catch (error) {
    console.error ('Error updating user data', error);
    res.status (500).json ({message: 'Server error while updating user data'});
  }
};

// Set up multer storage configuration for profile picture upload
const storage = multer.diskStorage ({
  destination: function (req, file, cb) {
    cb (null, 'uploads/'); // Directory where files will be stored
  },
  filename: function (req, file, cb) {
    cb (null, `${Date.now ()}_${file.originalname}`); // Name the file with timestamp and original name
  },
});

// File filter to accept only image files (jpeg, jpg, png)
const upload = multer ({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const extname = filetypes.test (
      path.extname (file.originalname).toLowerCase ()
    );
    const mimetype = filetypes.test (file.mimetype);

    if (mimetype && extname) {
      return cb (null, true);
    } else {
      cb ('Error: Images Only!'); // If file type is not an image, return error
    }
  },
}).single ('profilePic'); // Accept a single file upload with the field name 'profilePic'

// New route for profile picture update
exports.updateProfilePic = async (req, res) => {
  // Use multer to handle the file upload
  upload (req, res, async err => {
    if (err) {
      return res.status (400).send ({message: err}); // Handle any multer-related errors
    }

    // Check if a profile picture was uploaded
    if (!req.file) {
      return res.status (400).json ({message: 'No file uploaded'});
    }

    // Construct the full URL for the profile picture
    const protocol = req.protocol; // Get the request protocol (http or https)
    const host = req.get ('host'); // Get the host (domain or localhost)
    const profilePicUrl = `${protocol}://${host}/uploads/${req.file.filename}`; // Full URL
    // console.log (profilePicUrl);
    if (!req.session.user1) {
      return res.status (403).json ({message: 'User not logged in'}); // If no user is logged in
    }

    try {
      const userEmail = req.session.user1; // Retrieve logged-in user email
      const user = await User.findOne ({email: userEmail}); // Find user by email

      if (!user) {
        return res.status (404).json ({message: 'User not found'}); // If user not found in DB
      }

      // Update the user's profile picture
      user.profilePic = profilePicUrl;

      await user.save (); // Save updated user data to the database
      res.status (200).json ({
        message: 'Profile picture updated successfully',
        profilePic: profilePicUrl,
      });
    } catch (error) {
      console.error ('Error updating profile picture:', error.message); // Log the error message
      console.error (error);
      res
        .status (500)
        .json ({message: 'Server error while updating profile picture'});
    }
  });
};
