// ContactModel.js

const mongoose = require('mongoose');

// Define the schema for the contact form
const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    message: { type: String, required: true }
}, { collection: 'contactDB' });

// Export the model
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);
module.exports = Contact;
