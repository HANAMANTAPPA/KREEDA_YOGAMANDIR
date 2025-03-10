const express = require ('express');
const mongoose = require ('mongoose');

// Create a router for handling contact form submissions
const router = express.Router ();

// Define the schema for the contact form
const Contact =
  mongoose.models.Contact ||
  mongoose.model (
    'Contact',
    new mongoose.Schema (
      {
        name: {type: String, required: true},
        email: {type: String, required: true},
        mobile: {type: String, required: true},
        message: {type: String, required: true},
      },
      {collection: 'contactDB'}
    )
  );

// API endpoint to handle form submissions
router.post ('/contact', async (req, res) => {
  const {name, email, mobile, message} = req.body;

  // Create a new Contact document
  const newContact = new Contact ({
    name,
    email,
    mobile,
    message,
  });

  try {
    // Save the contact to the database
    await newContact.save ();
    console.log ('Contact saved successfully!');

    res.status (200).json ({message: 'Contact saved successfully!'});
  } catch (error) {
    console.error ('Error saving contact:', error.message);
    res.status (500).json ({message: 'Failed to save contact', error});
  }
});

module.exports = router;
