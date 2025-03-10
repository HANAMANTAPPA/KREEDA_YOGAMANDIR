const express = require("express");
const cors = require("cors");
const { db } = require("./db/db");
const { readdirSync } = require("fs");
const path = require("path");
require("dotenv").config();
const bodyParser = require("body-parser");
const session = require("express-session");
const routes1 = require("./routes/routingfile.js");
const logger = require('./logger');
const contactFormRouter = require('./api/contactForm');

const app = express();
app.use(bodyParser.json());

// Middleware
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const SECRET_KEY = process.env.SECRET_KEY;

const corsConfig = {
  origin:  process.env.FRONTEND_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Add allowed methods
  credentials: true
};

// Handle preflight requests for all routes
app.options('*', cors(corsConfig));
app.use(cors(corsConfig));

// Session configuration
app.use(
  session({
    secret: SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    },
  })
);

// Routes
app.use("/api", routes1);
app.use('/api/contact', contactFormRouter);

// Log all incoming requests
app.use((req, res, next) => {
  logger.info(`Received ${req.method} request for ${req.url}`);
  next();
});

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error(`Error occurred: ${err.message}`, {
    method: req.method,
    url: req.url,
    body: req.body,
    stack: err.stack,
  });
  res.status(500).send('Something went wrong!');
});

// Local development server initialization
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5001;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  db(); // Initialize the database connection here for local development
}

// Export app for testing or external server use
module.exports = app;
