// ContactController.js

const Contact = require('../models/contactForm.module.js');

// Controller function to handle contact form submissions
const saveContact = async (req, res) => {
    const { name, email, mobile, message } = req.body;

    // Create a new Contact document
    const newContact = new Contact({
        name,
        email,
        mobile,
        message
    });

    try {
        // Save the contact to the database
        await newContact.save();
        res.status(200).json({ message: 'Contact saved successfully!' });
    } catch (error) {
        console.error('Error saving contact:', error.message);
        res.status(500).json({ message: 'Failed to save contact', error });
    }
};

module.exports = { saveContact };
