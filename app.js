const express = require('express');
const app = express();
require("dotenv").config();// with this line our project will have the ability to read from the .env file
const {errorHandler , notFoundHandler} = require("./middlewares/errors");
const {connectToDB}=require("./config/db_connection");

// DataBase Connection 
connectToDB();

// Middleware
app.use(express.json());


// Routes

// Error + Not Found Handler
app.use(notFoundHandler);
app.use(errorHandler);

// Start server
app.listen(process.env.PORT || 8000, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`);
});












