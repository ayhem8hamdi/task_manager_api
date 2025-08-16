const mongoose = require('mongoose');
const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config(); // with this line our project will have the ability to read from the .env file
//Data Base Connection Function
async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGO);
    // Start server
app.listen(process.env.PORT || 8000, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`);
});

    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
  }
}


//Export Section
module.exports = {connectToDB}