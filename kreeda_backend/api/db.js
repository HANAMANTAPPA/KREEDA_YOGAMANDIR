const mongoose = require("mongoose");

let isConnected = false;

const connectToDatabase = async () => {
  if (isConnected) {
    console.log("Already connected to MongoDB");
    return;
  }

  try {
    console.log('MongoDB URI:', process.env.MONGO_URL);
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000
    });
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    throw error; // Throw the error to be handled by the calling function
  }
};

// Ensure strictQuery is set
mongoose.set("strictQuery", false);

// Export the connection function
module.exports = connectToDatabase;
