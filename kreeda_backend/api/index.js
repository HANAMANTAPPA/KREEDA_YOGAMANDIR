require('dotenv').config(); 
// In api/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactFormRouter = require('./contactForm');
const connectToDatabase = require('./db');

const app = express();
const PORT = process.env.PORT || 5000; // Use PORT environment variable or default to 5000

app.use(cors({
    origin: '*', // Allows any origin (for local development). Adjust as needed for production.
}));
app.use(bodyParser.json());

connectToDatabase();

app.use('/api/contact', contactFormRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
